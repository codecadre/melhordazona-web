(ns produce-full-dataset
  (:require [clojure.string :as clj-str]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]))

(def imt-profiles
  (-> "imt-school-addresses-submodule/parsed-data/db.edn"
      slurp
      edn/read-string));;TODO add name to keyword

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

#_(filter #(= 1007 (:nec %)) imt-profiles)
#_(filter #(= 1001 (:nec %)) db)

(def pass-rates
  (->> (->
        "imt-pass-rates-submodule/parsed-data/db.json"
        slurp
        (json/parse-string (fn [k] (keyword "r" (clj-str/replace (name k) "_" "-") )))
        :r/data)
       (group-by :r/k)
       (map (fn [[k v]]
              (let [n (-> v first :r/nec)]
                [k
                 {:nec n
                  :rates v}])))
       (into {})))

(def db
  (mapv (fn [[k {:keys [nec] :as d}]]
         [k (assoc d :imt-profile (get nec->imt-profiles nec))]) pass-rates))


(def overwrites
  "k->imt-profile id"
  (-> "recepies/overwrites.edn"
   slurp
   edn/read-string))

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
  (->> (->
        "imt-pass-rates-submodule/parsed-data/db.json"
        slurp
        (json/parse-string (fn [k] (keyword "r" (name k))))
        :r/data)
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

(defn print-missing-imt-profile [db]
  (let [f "./recepies/no-imt-profile.txt"
        d (->> (no-imt-profile db)
               (map (fn [[k {:keys [rates obs]}]]
                      (into {:k k} (map #(hash-map (keyword (:r/level-0 %)) true) rates))))
               (sort #(compare (-> %2 :2020) (-> %1 :2020))))]
    (spit f
          (with-out-str
            (pprint/print-table [:k :2015 :2016 :2017 :2018 :2019 :2020] d)))))

(print-missing-imt-profile (db-massaged db))

(spit "./recepies/simple-db.txt" (with-out-str (pprint/print-table (db-print (db-massaged db)))))

(spit "./recepies/db.edn" (with-out-str (pprint/pprint (sort #(compare (:nec (last %1)) (:nec (last %2))) (db-massaged db)))))
