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

(def URL->map
  (let [query-string (System/getenv "QUERY_STRING")]
    (when (not (empty? query-string))
      (->> (clj-str/split query-string #"&")
           (filter #(clj-str/includes? % "="))
           (map #(clj-str/split % #"="))
           (reduce (fn [acc [k v]]
                     (assoc acc (keyword "url" k) v)) {})))))

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
