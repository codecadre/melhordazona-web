(ns src.clj.sitemap
  (:require [clojure.edn :as edn]
            [clojure.string :as clj-str]
            [clojure.pprint :as pprint]
            [clojure.java.io :as io]
            [bb-passrates.shared.main :refer [string->keywordize clean-strings]]
            [bb-passrates.shared.copy :refer [copy]]))

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
;; Populate sitemap
;;

(def domain "https://passaprimeira.xyz")


(def sitemap
  (let [distritos (map string->keywordize (set (map :distrito concelhos)))]
    (flatten
     [domain
      (mapv #(format (str domain (copy [:href/district :pt]))  %)  distritos)
      (mapv #(format (str domain (copy [:href/district :en]))  %)  distritos)
      (map #(str domain %)
           ["/en/"
            "/static/acerca/"
            "/static/en/about/"
            (copy [:href/district-index :pt])
            (copy [:href/district-index :en])
            (copy [:href/nil-concelho :pt])
            (copy [:href/nil-concelho :en])]
           )])))

(defn sitemap-gen [list]
  (let [school-template (str domain (copy [:href/school :pt]))
        school-template-en (str domain (copy [:href/school :en]))
        concelho-template (str domain (copy [:href/municipality :pt]))
        concelho-template-en (str domain (copy [:href/municipality :en]))
        no-imt-profile-template (str domain (copy [:href/school-nil-concelho :pt]))
        no-imt-profile-template-en (str domain (copy [:href/school-nil-concelho :en]))]
    (sort (reduce (fn [acc item]
                    (let [concelho? (-> item first (= :c))
                          school? (-> item first (= :s))
                          no-imt-profile? (-> item last first nil?)]

                      (cond
                        concelho? (conj acc
                                        (format concelho-template (nth item 1) (-> item last string->keywordize))
                                        (format concelho-template-en (nth item 1) (-> item last string->keywordize)))
                        (and school? no-imt-profile?)
                        (conj acc
                              (format no-imt-profile-template (-> item last last))
                              (format no-imt-profile-template-en (-> item last last)))
                        school?
                        (conj acc
                              (format school-template (-> item last first) (-> item last (nth 1)) (-> item last last))
                              (format school-template-en (-> item last first) (-> item last (nth 1)) (-> item last last)))))) sitemap list))))



(spit "public/sitemap.txt" (apply str (interpose "\n"  (sitemap-gen (names-list)))))
