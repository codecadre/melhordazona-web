;; Not too happy with how this script is done. Needs to be refactored into functions so that if can be loaded in a REPL
;; safely

;;outputs `public/data/*`, `places.cljc` and `sitemap.txt`
;; don't forget to `rm public/data/*` first

(ns recepies.web-data
  (:require [clojure.edn :as edn]
            [clojure.string :as clj-str]
            [clojure.pprint :as pprint]
            [clojure.java.io :as io]
            [bb-passrates.shared.main :refer [string->keywordize clean-strings]]
            [bb-passrates.shared.copy :refer [copy]]))

(def db
  (->> "aggregate-transform-load/data/db.edn" slurp edn/read-string))

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


(let [f "public/src/clj/bb_passrates/shared/places.cljc"
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
  (let [distritos (map string->keywordize (set (map :distrito concelhos)))]
    (flatten
     [domain
      (mapv #(format (str domain (copy [:href/district :pt]))  %)  distritos)
      (mapv #(format (str domain (copy [:href/district :en]))  %)  distritos)
      (map #(str domain %)
           ["/en/"
            "/static/acerca/"
            "/static/en/about/"
            "/static/origem-dos-dados/"
            "/static/en/data-sources/"
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


#_(let [list (->> (names-list)
                sitemap-gen
                )
      template-fn (fn [url]
                    (element :url {}
                             (element :loc {} url)
                             (element :lastmod {} "2022-07-01")))
      sitemap (element :urlset {:xmlns "http://www.sitemaps.org/schemas/sitemap/0.9"})]
  (spit "sitemap.xml"
        (indent-str
    (update (element :urlset {:xmlns "http://www.sitemaps.org/schemas/sitemap/0.9"}
                     (map #(template-fn %) list))
            :content (fn [el] (first el)))))
  )

#_(print (indent-str (element :urlset {:xmlns "http://www.sitemaps.org/schemas/sitemap/0.9"}
                            (element :url {}
                                     (element :loc {} "The baz value1")
                                     ))))



;; <urlset xmlns=>
;;   <url>
;;     <loc>http://hashobject.com/about</loc>
;;     <lastmod>2013-05-31</lastmod>
;;     <changefreq>monthly</changefreq>
;;     <priority>0.8</priority>
;;   </url>
;;   <url>
;;     <loc>http://hashobject.com/team</loc>
;;     <lastmod>2013-06-01</lastmod>
;;     <changefreq>monthly</changefreq>
;;     <priority>0.9</priority>
;;   </url>
;; </urlset>
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
        f (format "./public/data/concelho-%s-%s.edn" distrito-key concelho-key)
        data-string (binding [*print-namespace-maps* false]
                      (with-out-str (pprint/pprint schools)))]
    (io/make-parents f)
    (spit f data-string)))

(let [d (->> db
             (filter #(-> % last :imt-profile nil?)))
      f "./public/data/concelho-nil.edn"
      data-string (binding [*print-namespace-maps* false]
                    (with-out-str (pprint/pprint d)))]
  (spit f data-string))

(doseq [[distrito schools] (->> db
                                (group-by #(-> % last :imt-profile :distrito))
                                (remove #(-> % first nil?)))]
  (let [f (format "./public/data/distrito-%s.edn" (string->file-sys-string distrito))
        data-string (binding [*print-namespace-maps* false]
                      (with-out-str (pprint/pprint schools)))]
    (spit f data-string)))

(doseq [[k s] db]
  (let [distrito-key (->> s :imt-profile :distrito)
        concelho-key (->> s :imt-profile :concelho)
        location-key (if (and distrito-key concelho-key)
                       (format "%s-%s"
                               (string->file-sys-string  distrito-key)
                               (string->file-sys-string  concelho-key))
                       "nil")
        f (format "./public/data/escola-%s-%s.edn" location-key k)
        data-string (binding [*print-namespace-maps* false]
                      (with-out-str (pprint/pprint s)))]
    (spit f data-string)))
