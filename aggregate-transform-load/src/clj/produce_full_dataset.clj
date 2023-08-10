(ns produce-full-dataset
  (:require [clojure.string :as clj-str]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [babashka.fs :as fs]
            [util :as util]
            ))

(def base-dir "aggregate-transform-load")

;;;;;;;;;;;;;;;;;;;;;;
;; Data Sources
;;;;;;;;;;;;;;;;;;;;;;
(def pass-rates-db-json (str base-dir "/imt-pass-rates-submodule/parsed-data/db.json"))
(def geocoded-cp7-file (str base-dir "/data/cp7.edn"))
(def geocoded-address-file (str base-dir "/data/address-geocode.edn"))

;;TODO add file name to keyword maybe
(defn load-imt-profiles []
  (let [data (util/imt-profiles)]
    (assert (= (count data) (count (set (map :id data)))))
    data))

;;overwrites
(def overwrites-file (str base-dir "/overwrites.edn"))
(def geocode-overwrites (str base-dir "/geocode-overwrite.edn"))
;;;;;;;;;;;;;;;;;;;;;;
;; Data Sources
;;;;;;;;;;;;;;;;;;;;;;

;; full-data-set-output
(def enriched-dataset-file (str base-dir "/data/db.edn"))

;; Data quality logs
(def duplicates-file (str base-dir "/rates-duplicate-nec.txt"))
(def no-imt-profile-file (str base-dir "/no-imt-profile.txt"))
(def no-geocode-found-file (str base-dir "/no-geocode.txt"))
(def simple-db-txt-file (str base-dir "/simple-db.txt"))

(defn nec->imt-profiles
  "uses first, drops the rest. relies on there being a manual overwrite if data
  doesn't look good"
  [imt-profiles]
  (->> imt-profiles
       (group-by :nec)
       (map (fn [[k v]]
              [k (first v)]))
       (into {})))

(defn id->imt-profiles [imt-profiles]
  (reduce (fn [id-lookup-table {:keys [id] :as imt-profile}]
          (assoc id-lookup-table id imt-profile)) {} imt-profiles))

(defn load-pass-rates
  "parses pass-rates JSON file and discards r/schema object"
  []
  (->
   pass-rates-db-json
   slurp
   (json/parse-string (fn [k] (keyword "r" (clj-str/replace (name k) "_" "-") )))
   :r/data))

(defn k->pass-rates [pass-rates]
  (let [result (->> pass-rates
                    (group-by :r/k)
                    (reduce (fn [lookup-table [school-name-nec-key rates]]
                              (assoc lookup-table school-name-nec-key
                                     {:nec (-> rates first :r/nec)
                                      :rates rates})) {}))]
    (println (format "%s School entries from pass rates pdf." (count result)))
    result))

;;TODO maybe passs it down call it something else...
(defn db [k->pass-rates-map nec->imt-profiles-map]
  "Merges imt-profile data with pass rates:
  - uses pass rate as starting point
  - get imt-profile for nec and assocs :imt-profile key"

  (mapv (fn [[k {:keys [nec] :as d}]]
          [k (assoc d :imt-profile (get nec->imt-profiles-map nec))]) k->pass-rates-map))

(defn load-overwrites
  "k->imt-profile id"
  []
  (let [result (util/open-edn overwrites-file)]
    (println (format "%s Manual imt-profile overwrites" (count result)))
    result))

;; db
;; [["via-segura-01244"
;;   {:nec 1244,
;;    :rates
;;    [{:r/nec 1244,
;;      :r/level-0 "2015",
;;      :r/d-scheduled 231,
;;      :r/t-rate 0.8121,
;;      :r/total-rate 0.8401,
;;      :r/d-done 220,
;;      :r/total-scheduled 382,
;;      :r/name-raw "Escola De Condução Via Segura",
;;      :r/total-done 369,
;;      :r/d-rate 0.8591,
;;      :r/t-scheduled 151.0,
;;      :r/k "via-segura-01244",
;;      :r/total-passed 310.0,
;;      :r/t-done 149.0}
;;     ;;more years
;;     ],
;;    :imt-profile ;;
;;    }]
;;  ;;others
;;  ]

;;TODO just applied overwrites maybe rename
(defn db-massaged [id->imt-profiles-map db]
  (reduce (fn [db [school-name-nec-key {:keys [address-id overwrite/obs overwrite/notes]}]]
            (let [[idx _]
                  (->> db
                       (map-indexed vector)
                       (filter #(= (-> % last first) school-name-nec-key))
                       first)]
              (-> db
                  (assoc-in [idx 1 :imt-profile] (get id->imt-profiles-map address-id))
                  (assoc-in [idx 1 :obs] obs)
                  (assoc-in [idx 1 :overwrite/notes] notes)))) db (load-overwrites)))

(defn produce-simple-db
  "maps db entry so that it can be outputed into simple-db format"
  [pass-rates-imt-profiles-merged-dataset]
  (let [produce-simple-db-fn (fn
                               [[key-string {:keys [nec imt-profile obs]}]]
                               {:pr/k key-string :nec nec :imt/name (:name imt-profile) :imt/nec (:nec imt-profile) :obs obs})
        d (->> pass-rates-imt-profiles-merged-dataset
               ;;comes already sorted like this
               #_(sort #(compare (:nec (last %1)) (:nec (last %2))))
               (map produce-simple-db-fn))]
    (spit simple-db-txt-file (with-out-str (pprint/print-table [:pr/k :nec :imt/name :imt/nec :obs] d)))
    (println (str "wrote " simple-db-txt-file))))

(defn merge-pass-rates-imt-profiles
  [pass-rates imt-profiles]
  (let [k->pass-rates-map (k->pass-rates pass-rates)
        nec->imt-profiles-map (nec->imt-profiles imt-profiles)
        id->imt-profiles-map (id->imt-profiles imt-profiles)]
    (->> (db k->pass-rates-map nec->imt-profiles-map)
         (db-massaged id->imt-profiles-map)
         (sort #(compare (:nec (last %1)) (:nec (last %2)))))))

(defn full-run [pass-rates-imt-profiles-merged-dataset]
  (println "Full Run...")
  (produce-simple-db pass-rates-imt-profiles-merged-dataset))

(defn output-pass-rates-duplicates!
  "outputs a file listing all entries with the same nec and different name in the pass-rates dataset."
  [pass-rates]
  (spit duplicates-file
        (with-out-str
          (pprint/print-table (->> pass-rates
                                   (group-by :r/nec)
                                   (map (fn [[k v]]
                                          (let [s (set (map :r/k v))]
                                            {:nec k
                                             :ks (apply str (interpose " -- " s))
                                             :names (apply str (interpose " -- " (set (map :r/name_raw v))))
                                             :k-count (count s)})))
                                   (filter #(> (:k-count %) 1))
                                   (map #(select-keys % [:nec :ks]))))))
  (println (str "Wrote " duplicates-file)))


(defn print-missing-imt-profile! [pass-rates-imt-profiles-merged-dataset]
  (let [d (->> pass-rates-imt-profiles-merged-dataset
               (remove (fn [[k {:keys [imt-profile]}]]
                         (when imt-profile true)) )
               (map (fn [[k {:keys [rates obs]}]]
                      (into {:k k} (map #(hash-map (keyword (:r/level-0 %)) true) rates))))
               (sort #(compare (-> %2 :2020) (-> %1 :2020))))]
    (spit no-imt-profile-file
          (with-out-str
            (pprint/print-table [:k :2015 :2016 :2017 :2018 :2019 :2020] d)))
    (println (str "Wrote " no-imt-profile-file))))

(defn -main
  [& _args]
  (let [[mode & _] _args
        pass-rates (load-pass-rates)
        imt-profiles (load-imt-profiles)
        pass-rates-imt-profiles-merged-dataset (merge-pass-rates-imt-profiles pass-rates imt-profiles)]
    (println (format "%s Schools WITH imt profile" (->> pass-rates-imt-profiles-merged-dataset
                                                        (remove #(-> % last :imt-profile nil?))
                                                        count)))
    (output-pass-rates-duplicates! pass-rates)
    (print-missing-imt-profile! pass-rates-imt-profiles-merged-dataset)
    (case mode
      "simple-db" (produce-simple-db pass-rates-imt-profiles-merged-dataset)
      (full-run pass-rates-imt-profiles-merged-dataset))
    #_#_d (->> db
               db-massaged
               db-geocoded
               (remove #(nil? (:imt-profile (last %))))
               geocoding-db-print
               (remove #(:overwrite %))
               (filter #(nil? (:score %))))
    #_(println (format "%s imt profiles with no geocoding." (count d)))
    #_(spit no-geocode-found-file (with-out-str (pprint/print-table '(:id :address :concelho :k) d)))
    #_(spit (str f ".edn") (with-out-str (pprint/pprint  d)))))
