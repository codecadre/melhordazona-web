(ns bb-passrates.shared.main
  (:require [clojure.string :as clj-str]
            [clojure.set :refer [map-invert]]))

(defn clean-q
  "Allow:
  - alphanumeric
  - spaces
  - comma: ','
  "
  [q]
  (let [words (-> q
                  clj-str/lower-case
                  (clj-str/replace #"[^0-9a-z_ ]" "")
                  (clj-str/split #" "))]
    (remove empty? words)))

(defn query-place-list [list q]
  (let [q (apply str (interpose " " (clean-q q)))]
    (filter #(clj-str/includes? (:search-field %) q) list)))


(def lang :pt)

(def seo
  {"district" "distritos"
   "municipality" "municipios"
   "city" "cidades"})

(def url->canonical
  (map-invert seo))



(defn build-href
  "builds href taking into account a variable number of query strings"
  [path {:keys [url/lang url/foo]}]
  (let [qs (->> [(when lang
                  ["lang" lang])
                (when foo
                  ["foo" foo])]
                (remove nil?)
                (map #(clj-str/join "=" %)))]
    (cond
      (= nil foo lang) path
      (> (count qs) 1) (apply str (into (interpose "&" qs) (list "?" path)))
      :else (apply str (into qs (list "?" path))))))

(comment
  ;;tests
  (= "/path?foo=bar"
     (build-href "/path" {:url/lang nil
                      :url/foo "bar"}))

  (= "/?lang=pt&foo=bar"
     (build-href "/" {:url/lang "pt"
                      :url/foo "bar"}))

  (= "/"
     (build-href "/" {:url/lang nil
                      :url/foo nil})))

(defn url->params [s]
  (let [word-list (->> (clj-str/split s #"/")
                       (remove empty?)
                       (remove #(clj-str/includes? % "?")))
        word-set (set word-list)]
    (cond
      (empty? word-set) {:url/home true}
      (contains? word-set "cidades") {:url/city (nth word-list 1)}
      (contains? word-set "distritos") {:url/district (nth word-list 1)}
      (contains? word-set "municipios") {:url/municipality (nth word-list 1)}
      (contains? word-set "escolas") {:url/school (nth word-list 1)}
      :else {:url/page (first word-list)})))

(defn query-string->map [query-string]
  (when (not (empty? query-string))
      (->> (clj-str/split query-string #"&")
           (filter #(clj-str/includes? % "="))
           (map #(clj-str/split % #"="))
           (reduce (fn [acc [k v]]
                     (assoc acc (keyword "url" k) v)) {}))))

(defn url->map [url query-string]
  (merge (query-string->map query-string) (url->params url )))

(comment
  (= {:url/lang "pt", :url/city "porto"}
     (url->map "/cidades/porto/?lang=pt" "lang=pt"))

  (= {:url/lang "pt", :url/district "porto"}
     (url->map "/distritos/porto/?lang=pt" "lang=pt"))

  (= {:url/foo "bar" :url/lang "pt", :url/city "porto"}
     (url->map "/cidades/porto/?lang=pt&foo=bar" "lang=pt&foo=bar"))

  (= {:url/city "porto"}
     (url->map "/cidades/porto/" ""))

  (= {:url/page "foo"}
     (url->map "/foo" ""))

  (= {:url/home true}
     (url->map "/" "")))
