(ns bb-passrates.shared.main
  (:require [clojure.string :as clj-str]
            [clojure.set :refer [map-invert]]
            [clojure.edn :as edn]))

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

(defn path->href
  "given a path and a lang, appends /en/ if necessary"
  [path {:keys [lang] :as req}]
  (let [l (if (= lang :en) "/en" "")]
    (str l path)))






;;TODO deprecated
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

;;deprecated
(defn query-string->map [query-string]
  (when (not (empty? query-string))
    (update (->> (clj-str/split query-string #"&")
                 (filter #(clj-str/includes? % "="))
                 (map #(clj-str/split % #"="))
                 (reduce (fn [acc [k v]]
                           (assoc acc (keyword "url" k) v)) {}))
            :url/lang #(when % (keyword %)))))


(defn url->req [uri req-method query-string]
  (let [en? (clj-str/includes? uri "/en/")
        lang (if en? :en :pt)]
    {:request-method (-> req-method clj-str/lower-case keyword)
     :lang lang
     :uri (-> uri (clj-str/split #"\?") first)}))

;;TODO DEPRECATED
(defn url->req-map
  "parses query params and build a request map"
  [uri req-method query-string]
  (let [uri (-> uri (clj-str/split #"\?") first)
        req-method (keyword (clj-str/lower-case req-method))]
    (merge {:uri uri :request-method req-method}
           (query-string->map query-string))))

#?(:clj
   (defn req-fn []
     (let [request-uri (System/getenv "REQUEST_URI")
           query-string (System/getenv "QUERY_STRING")
           request-method (System/getenv "REQUEST_METHOD")]
       (url->req request-uri request-method query-string))))

#?(:clj
   (defn get-place-list [type place]
     (-> (str "./data/" (name type) "-" place ".edn")  slurp edn/read-string)))

#?(:clj
  (defn k->human [k]
    (->>
     (clj-str/split k #"-" )
     (map clj-str/capitalize)
     (interpose " " )
     clj-str/join)))

#?(:clj
  (defn address->human [k]
    (->>
     (clj-str/split k #" " )
     (map clj-str/capitalize)
     (interpose " " )
     clj-str/join)))

#_(address->human "Avª Bombeiros Voluntários loja 8 J D 1675 PONTINHA")
