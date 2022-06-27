(ns recepies.places
  (:require [clojure.edn :as edn]
            [clojure.string :as clj-str]
            [clojure.pprint :as pprint]
            [clojure.java.io :as io]
            [bb-passrates.shared.main :refer [string->keywordize]]))

(def db
  (->> "recepies/db.edn" slurp edn/read-string))

(def concelhos
  (->> db
      (map (fn [[k s]]
             (-> s :imt-profile (select-keys [:distrito :concelho]))))
      (remove empty?)
      set))

(defn names-list []
  "builds bb-passrates.shared.places/places"
  (into (mapv #(vector :c (string->keywordize (:distrito %)) (:concelho %)) concelhos)
        (map (fn [[k s]]
               (let [imt-profile? (-> s :imt-profile boolean)
                     concelho (when imt-profile?
                                (-> s :imt-profile :concelho string->keywordize))
                     district (when imt-profile?
                                (-> s :imt-profile :distrito string->keywordize))
                     name-imt (-> s :imt-profile :name)
                     name-pass-rates (-> s :rates first :r/name-raw)
                     name (or name-imt name-pass-rates)]
                 (vector :s name (into (if imt-profile? [district concelho] [nil]) [k] )))) db)))

;;
;; Populate places.cljc
;;
(defn build-places-ns [l]
 (apply str ["(ns bb-passrates.shared.places)\n\n"

             "(def places\n" l "\n)"]))

(let [f "src/main/bb_passrates/shared/places.cljc"
      d-as-string (->> (names-list)
                       #_(sort #(compare (first %1) (first %2)))
                       pprint/pprint
                       with-out-str)]
  (doall (spit f (build-places-ns d-as-string))))

;;
;; Populate sitemap
;;

(def domain "https://passaprimeira.xyz")

(def sitemap
  (flatten
   [domain
    (map #(str domain %)
         '("/en/"
           "/paginas/acerca/"
           "/escola-sem-morada-imt/"))]))

(defn sitemap-gen [list]
  (let [school-template (str domain "/escolas/%s/")
        school-template-en (str domain "/en/schools/%s/")
        concelho-template (str domain "/concelhos/%s/")
        concelho-template-en (str domain "/en/municipalities/%s/")]
    (sort (reduce (fn [acc {:keys [k type]}]
                    (if (= :school type)
                      (conj acc
                            (format school-template (name k))
                            (format school-template-en (name k)))
                      (conj acc
                            (format concelho-template (name k))
                            (format concelho-template-en (name k))))) sitemap list))))

(spit "sitemap.txt" (apply str (interpose "\n"  (sitemap-gen (names-list)))))

;;
;; Populate /data/
;;

(defn string->file-sys-string [s]
  (->> s clean-strings (interpose "-") (apply str)))

(doseq [[concelho schools] (->> db
                                (group-by #(-> % last :imt-profile :concelho))
                                (remove #(-> % first nil?)))]
  (let [distrito (-> schools first last :imt-profile :distrito)
        concelho-key (string->file-sys-string concelho)
        distrito-key (string->file-sys-string distrito)
        f (format "./data/concelho-%s-%s.edn" distrito-key concelho-key)
        data-string (with-out-str (pprint/pprint schools))]
    (io/make-parents f)
    (spit f data-string)))

(let [d (->> db
             (filter #(-> % last :imt-profile nil?)))
      f "./data/concelho-nil.edn"
      data-string (with-out-str (pprint/pprint d))]
  (spit f data-string))

(doseq [[distrito schools] (->> db
                                (group-by #(-> % last :imt-profile :distrito))
                                (remove #(-> % first nil?)))]
  (let [f (format "./data/distrito-%s.edn" (string->file-sys-string distrito))
        data-string (with-out-str (pprint/pprint schools))]
    (spit f data-string)))

(doseq [[k s] db]
  (let [distrito-key (->> s :imt-profile :distrito)
        concelho-key (->> s :imt-profile :concelho)
        location-key (if (and distrito-key concelho-key)
                       (format "%s-%s"
                               (string->file-sys-string  distrito-key)
                               (string->file-sys-string  concelho-key))
                       "nil")
        f (format "./data/escola-%s-%s.edn" location-key k)
        data-string (with-out-str (pprint/pprint s))]
    (spit f data-string)))
