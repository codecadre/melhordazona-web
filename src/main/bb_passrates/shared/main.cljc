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


(defn url->params [s]
  (let [word-list (->> (clj-str/split s #"/")
                       (remove empty?)
                       (remove #(clj-str/includes? % "?")))
        word-set (set word-list)]
    (cond
      (empty? word-set) {:url/type :home}
      (contains? word-set "cidades") {:url/resource (nth word-list 1)
                                      :url/type :city}
      (contains? word-set "distritos") {:url/resource (nth word-list 1)
                                        :url/type :district}
      (contains? word-set "municipios") {:url/resource (nth word-list 1)
                                         :url/type :municipality}
      (contains? word-set "escolas") {:url/resource (nth word-list 1)
                                      :url/type :school}
      ;; need to add an option for each page
      :else {:url/resource (first word-list)
             :url/type :page})))

(defn query-string->map [query-string]
  (when (not (empty? query-string))
      (->> (clj-str/split query-string #"&")
           (filter #(clj-str/includes? % "="))
           (map #(clj-str/split % #"="))
           (reduce (fn [acc [k v]]
                     (assoc acc (keyword "url" k) v)) {}))))

(defn url->req-map
  "parses query params and build a request map"
  [uri req-method query-string]
  (let [uri (-> uri (clj-str/split #"\?") first)
        req-method (keyword (clj-str/lower-case req-method))]
    (merge {:uri uri :request-method req-method}
           (query-string->map query-string))))

(defn get-place-list [type place]
  (-> (str "./clean-data/" (name type) "-" place ".edn")  slurp edn/read-string))
