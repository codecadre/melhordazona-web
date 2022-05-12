(ns produce-full-dataset
  (:require [clojure.string :as clj-str]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]))

(def imt-profiles
  (-> "imt-school-addresses-submodule/parsed-data/db.edn"
      slurp
      edn/read-string));;TODO add name to keyword

;;unique ids?
(assert (= (count imt-profiles) (count (set (map :id imt-profiles)))))

(def nec->imt-profiles
  "uses first, drops the rest. relies on there being a manual overwrite if data
  doesn't look good"
  (->> imt-profiles
       (group-by :nec)
       (map (fn [[k v]]
              [k (first v)]))
       (into {})))

(def id->imt-profiles
  (->> imt-profiles
       (group-by :id)
       (map (fn [[k v]]
              [k (first v)]))
       (into {})))

(def pass-rates
  (->
   "imt-pass-rates-submodule/parsed-data/db.json"
   slurp
   (json/parse-string (fn [k] (keyword "r" (clj-str/replace (name k) "_" "-") )))
   :r/data))

(def k->pass-rates
  (->> pass-rates
       (group-by :r/k)
       (map (fn [[k v]]
              (let [n (-> v first :r/nec)]
                [k
                 {:nec n
                  :rates v}])))
       (into {})))

(println (format "%s School entries from pass rates pdf." (count k->pass-rates)))


(def db
  (mapv (fn [[k {:keys [nec] :as d}]]
         [k (assoc d :imt-profile (get nec->imt-profiles nec))]) k->pass-rates))


(def overwrites
  "k->imt-profile id"
  (-> "recepies/overwrites.edn"
   slurp
   edn/read-string))

(println (format "%s Manual imt-profile overwrites" (count overwrites)))

(defn db-massaged [db]
  (reduce (fn [db [k {:keys [address-id overwrite/obs overwrite/notes]}]]
            (let [[idx item]
                  (->> db
                       (map-indexed vector)
                       (filter #(= (-> % last first) k))
                       first)]
              (-> db
                  (assoc-in [idx 1 :imt-profile] (get id->imt-profiles address-id))
                  (assoc-in [idx 1 :obs] obs)
                  (assoc-in [idx 1 :overwrite/notes] notes)))) db overwrites))

(def nec->pass-rates
  (->> pass-rates
       (group-by :r/nec)))

(spit "./recepies/rates-duplicate-nec.txt"
      (with-out-str
        (pprint/print-table (->> nec->pass-rates
                                 (map (fn [[k v]]
                                        (let [s (set (map :r/k v))]
                                          {:nec k
                                           :ks (apply str (interpose " -- " s))
                                           :names (apply str (interpose " -- " (set (map :r/name_raw v))))
                                           :k-count (count s)})))
                                 (filter #(> (:k-count %) 1))
                                 (map #(select-keys % [:nec :ks]))))))

(defn db-print [db]
  (->> db
       (map (fn [[k {:keys [rates imt-profile nec obs]}]]
              {:pr/k k :nec nec :imt/name (-> imt-profile :name) :imt/nec (-> imt-profile :nec) :obs obs}))
       (sort #(compare (:nec %1) (:nec %2)))))

(defn no-imt-profile [db]
  (remove (fn [[k {:keys [imt-profile]}]]
            (when imt-profile true)) db))


(println (format "%s Schools WITH imt profile" (->> db db-massaged (remove #(-> % last :imt-profile nil?)) count)))

(def cp7-geocoded (-> "recepies/cp7.edn" slurp edn/read-string))
(def address-geocoded (-> "recepies/address-geocode.edn" slurp edn/read-string))
(def overwrite-geocodes (-> "recepies/geocode-overwrite.edn" slurp edn/read-string))

(defn imt-id->geocode [id]
  (->> address-geocoded
       (filter (fn [a]
                 (= id (:id a))))
       first))

(defn imt-id->overwrite-geocode [id]
  (get overwrite-geocodes id))

#_(imt-id->overwrite-geocode #uuid "4e24e93e-8297-3401-bff0-6cd16928b7fe")

;;(keys (imt-id->geocode #uuid "0f7182e1-9ade-3a01-95c8-f5e495a01bc4"))(:id :address :address-c :postal-c :x :y :score :c)

(defn cp7->geocode [cp7]
  (->> cp7-geocoded
       (filter (fn [a]
                 (= cp7 (:cp7 a))))
       first))

#_(cp7->geocode "5300-254");;{:cp7 "2710-583", :postal-c "2710-583", :x -9.37957001355457, :y 38.80322501473279, :score 100, :c 1}

(defn db-geocoded [db]
  (reduce (fn [acc [k {:keys [imt-profile] :as s}]]
            (if imt-profile
              (let [address-code (imt-id->geocode (:id imt-profile))
                    cp7-code (cp7->geocode (:cp7 imt-profile))
                    overwrite-code (imt-id->overwrite-geocode (:id imt-profile))]
                (cond
                  overwrite-code (conj acc [k (assoc s :geocode overwrite-code)])
                  (and (:score address-code) (> (:score address-code) 95)) (conj acc [k (assoc s :geocode address-code)])
                  (and (:score cp7-code) (> (:score cp7-code) 99)) (conj acc [k (assoc s :geocode cp7-code)])
                  :else (conj acc [k s])))
              (conj acc [k s]))) '() db))

(let [f "./recepies/db.edn"
      d (->> db
             db-massaged
             db-geocoded
             (sort #(compare (:nec (last %1)) (:nec (last %2)))))]
  (spit f (with-out-str (pprint/pprint  d))))

(defn print-missing-imt-profile [db]
  (let [f "./recepies/no-imt-profile.txt"
        d (->> (no-imt-profile db)
               (map (fn [[k {:keys [rates obs]}]]
                      (into {:k k} (map #(hash-map (keyword (:r/level-0 %)) true) rates))))
               (sort #(compare (-> %2 :2020) (-> %1 :2020))))]
    (spit f
          (with-out-str
            (pprint/print-table [:k :2015 :2016 :2017 :2018 :2019 :2020] d)))))

(-> db
    db-massaged
    print-missing-imt-profile)

(defn geocoding-db-print [db]
  (->> db
       (map (fn [[k {:keys [geocode imt-profile]}]]
              {:id (:id imt-profile)
               :k k
               :concelho (:concelho imt-profile)
               :score (:score geocode)
               :cp7 (:cp7 geocode)
               :address (:address imt-profile)
               :address-c (:address-c geocode)
               :overwrite (:overwrite geocode)}))
       (sort #(compare (:score %2) (:score %1)))))


(let [f "./recepies/no-geocode.txt"
      d (->> db
             db-massaged
             db-geocoded
             (remove #(nil? (:imt-profile (last %))))
             geocoding-db-print
             (remove #(:overwrite %))
             (filter #(nil? (:score %))))]
  (println (format "%s imt profiles with no geocoding." (count d)))
  (spit f (with-out-str (pprint/print-table '(:id :address :concelho :k) d))))
