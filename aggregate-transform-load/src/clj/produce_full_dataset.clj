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
(defn imt-profiles []
  (util/imt-profiles))

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

;;TODO add name to keyword

;;unique imt-profile ids?
(assert (= (count (imt-profiles)) (count (set (map :id (imt-profiles))))))

(def nec->imt-profiles
  "uses first, drops the rest. relies on there being a manual overwrite if data
  doesn't look good"
  (->> (imt-profiles)
       (group-by :nec)
       (map (fn [[k v]]
              [k (first v)]))
       (into {})))

(def id->imt-profiles
  (reduce (fn [id-lookup-table {:keys [id] :as imt-profile}]
          (assoc id-lookup-table id imt-profile)) {} (imt-profiles)))

(def pass-rates
  "parses pass-rates JSON file and discards r/schema object"
  (->
   pass-rates-db-json
   slurp
   (json/parse-string (fn [k] (keyword "r" (clj-str/replace (name k) "_" "-") )))
   :r/data))

(def k->pass-rates
  (->> pass-rates
       (group-by :r/k)
       (reduce (fn [lookup-table [school-name-nec-key rates]]
                 (assoc lookup-table school-name-nec-key
                        {:nec (-> rates first :r/nec)
                         :rates rates})) {})))

(println (format "%s School entries from pass rates pdf." (count k->pass-rates)))

;;TODO maybe passs it down call it something else...
(def db
  "Merges imt-profile data with pass rates:
  - uses pass rate as starting point
  - get imt-profile for nec and assocs :imt-profile key"

  (mapv (fn [[k {:keys [nec] :as d}]]
          [k (assoc d :imt-profile (get nec->imt-profiles nec))]) k->pass-rates))

(def overwrites
  "k->imt-profile id"
  (util/open-edn overwrites-file))

(println (format "%s Manual imt-profile overwrites" (count overwrites)))

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
(defn db-massaged [db]
  (reduce (fn [db [school-name-nec-key {:keys [address-id overwrite/obs overwrite/notes]}]]
            (let [[idx _]
                  (->> db
                       (map-indexed vector)
                       (filter #(= (-> % last first) school-name-nec-key))
                       first)]
              (-> db
                  (assoc-in [idx 1 :imt-profile] (get id->imt-profiles address-id))
                  (assoc-in [idx 1 :obs] obs)
                  (assoc-in [idx 1 :overwrite/notes] notes)))) db overwrites))

;; :pr/k | :nec | :imt/name | :imt/nec | :obs |



((defn produce-simple-db
   [[key-string {:keys [nec rates imt-profile obs]}]]
   {:pr/k key-string
    :nec nec
    :imt/name (:name imt-profile)
    :imt/nec (:nec imt-profile)
    :obs obs})

 (->> db db-massaged first))

(let [d (->> db
             db-massaged
             (sort #(compare (:nec (last %1)) (:nec (last %2)))))]
  (spit simple-db-txt-file (with-out-str (pprint/print-table [:pr/k :nec :imt/name :imt/nec :obs] d))))

(defn -main
  [& _args]
  (let [[mode & _] _args
        (case mode
          "simple-db" )
        #_#_d (->> db
                   db-massaged
                   db-geocoded
                   (remove #(nil? (:imt-profile (last %))))
                   geocoding-db-print
                   (remove #(:overwrite %))
                   (filter #(nil? (:score %))))]
    #_(println (format "%s imt profiles with no geocoding." (count d)))
    #_(spit no-geocode-found-file (with-out-str (pprint/print-table '(:id :address :concelho :k) d)))
    #_(spit (str f ".edn") (with-out-str (pprint/pprint  d)))))
