(ns produce-data
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
  (->> addresses
       (group-by :nec)
       (map (fn [[k v]]
              [k (first v)]))
       (into {})))

(def id->imt-profiles
  (->> addresses
       (group-by :id)
       (map (fn [[k v]]
              [k (first v)]))
       (into {})))

(filter #(= 1007 (:nec %)) imt-profiles)
(filter #(= 1001 (:nec %)) db)

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


(defn simple-db [db]
  (map (fn [[k {:keys [nec rates imt-profile]}]]
         {:nec nec
          :imt/name (:name imt-profile)
          :pr/name (-> rates first :r/name-raw)
          :pr/k k}
         ) db))


(defn no-imt-profile [db]
  (remove (fn [[k {:keys [imt-profile]}]]
            (when imt-profile true)) db))
;;(count (no-imt-profile db));;92

(defn print-missing-imt-profile [db]
  (let [f "./recepies/no-imt-profile.txt"
        d (->> (no-imt-profile db)
               (map (fn [[k {:keys [rates obs]}]]
                      (into {:k k} (map #(hash-map (keyword (:r/level-0 %)) true) rates))))
               (sort #(compare (-> %2 :2020) (-> %1 :2020))))]
    (spit f
          (with-out-str
            (pprint/print-table [:k :2015 :2016 :2017 :2018 :2019 :2020] d)))))

(spit "./recepies/simple-db.txt"
      (with-out-str
        (pprint/print-table (simple-db db))))


(def overwrites
  "k->imt-profile id"
  {"royal-01417" {:address-id #uuid "85b9c656-e409-38cc-a8fa-9d1a39713ae0"
                  :overwrite/reason "missing nec in imt.pt"
                  :overwrite/notes ["https://g.page/escoladeconducaoroyal?share"]}
   "campanha-00297" {:address-id #uuid "7f7d57ec-c53d-3011-b080-285687e47e98"
                     :overwrite/obs "missing nec in imt.pt"
                     :overwrite/notes ["https://www.google.pt/maps?hl=en&q=escola+conducao+campanha"]}
   "autoflor-00652" {:address-id #uuid "42020dad-2dd1-3624-a1eb-43c7ae455cd3"
                     :overwrite/obs "nec is 1007 in imt.pt"
                     :overwrite/notes ["https://goo.gl/maps/SqzySt7WvJsw6VYp8"]}
   "medieval-01319" {:address-id #uuid "7e57acad-4b71-3006-a0bb-dc2c8d594ac0"
                     :overwrite/obs "nec is 1318 in imt.pt"}
   "mogadourense-00494" {:address-id #uuid "0f7182e1-9ade-3a01-95c8-f5e495a01bc4"
                         :overwrite/obs "nec is 1201 in imt.pt"}
   "douro-sul-00830" {:address-id #uuid "3b79a161-8af9-3b64-83c3-66aec5238418"
                      :overwrite/obs "duplicate nec in passrates"}})

(def db-massaged
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

(print-missing-imt-profile db-massaged)

(filter (fn [[k m]] (= k "douro-sul-00830")) db-massaged )

(def nec->pass-rates
  (->> (->
        "imt-pass-rates-submodule/parsed-data/db.json"
        slurp
        (json/parse-string (fn [k] (keyword "r" (name k))))
        :r/data)
       (group-by :r/nec)))

;;TODO change file name - duplite ks in pass-rates
(spit "./recepies/rates-by-nec.txt"
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

#_(defn full-outer-join
  "merge two collections on key. Equivalent to SQL full outer join.
  assumes keys are unique"
  [k A B]
  (let [A' (->> A
                (group-by k)
                (map (fn [[k v]] [k (first v)]))
                (into {}))
        B' (->> B
                (group-by k)
                (map (fn [[k v]] [k (first v)]))
                (into {}))]
    (map (fn [[k v]] v)
         (merge-with merge A' B'))))

(def addresses-nil
  (filter #(nil? (:nec %)) addresses))

(def addresses-not-nil
  (remove #(nil? (:nec %)) addresses))

#_(def db
  (into (vec addresses-nil) (full-outer-join :nec pass-rates (-> addresses-not-nil set vec))))

(defn db-print [db]
  (->> db
       (map (fn [[k {:keys [rates imt-profile nec obs]}]]
              {:pr/k k :nec nec :imt/name (-> imt-profile :name) :imt/nec (-> imt-profile :nec) :obs obs}))
       (sort #(compare (:nec %1) (:nec %2)))))



(spit "./recepies/simple-db.txt" (with-out-str (pprint/print-table (db-print db-massaged))))

(comment
  (def A [{:k 1 :foo "bar"}
          {:k 2 :foo "bla"}])

  (def B [{:k 2 :wtv 123}
          {:k 3 :wtv 456}])
  (full-outer-join :k A B)
  ({:k 1, :foo "bar"}
   {:k 2, :foo "bla", :wtv 123}
   {:k 3, :wtv 456}))




(defn get-places-fn
  [k] (set (remove empty? (map #(-> % :address k) d))))


(defn remove-accents
  [text]
  (clj-str/escape text {\á "a", \Á "A", \à "a", \À "A", \â "a", \Â "A", \ã "a", \Ã "A", \ä "a", \Ä "A",
                        \ç "c", \Ç "C",
                        \ñ "n", \Ñ "N",
                        \é "e", \É "E", \ê "e", \Ê "E",
                        \í "i", \Í "I", \ï "i", \Ï "I",
                        \ó "o", \Ó "O", \ô "o", \Ô "O", \õ "o", \Õ "O", \ö "o", \Ö "O",
                        \ú "u", \Ú "U", \ü "u", \Ü "U"}))

(defn clean-strings
  "returns collection of string"
  [s]
  (let [words (-> s
                  clj-str/lower-case
                  remove-accents
                  (clj-str/replace #"[^0-9a-z_ ]" "")
                  (clj-str/split #" "))]
    (vec (remove empty? words))))

(comment
  (= ["amadora" "bla" "e"]
     (clean-strings "Amadora bla é")))

(defn string->keyword [s]
  (keyword (apply str (interpose "-" (clean-strings s)))))

(defn names-list []
  "builds bb-passrates.shared.places/places"
  (let [municipalities (get-places-fn :municipality)
        cities (get-places-fn :city)
        districts (get-places-fn :district)]
    (vec (flatten [(map #(hash-map
                           :k (keyword "municipality" (name (string->keyword %)))
                           :name %
                           :search-field (apply str (interpose " " (clean-strings %)))) municipalities)
                   (map #(hash-map
                           :k (keyword "city" (name (string->keyword %)))
                           :name %
                           :search-field (apply str (interpose " " (clean-strings %)))) cities)
                   (map #(hash-map
                           :k (keyword "district" (name (string->keyword %)))
                           :name %
                           :search-field (apply str (interpose " " (clean-strings %)))) districts)]))))

(def type-k :municipality)


;;spit municipality, city and district list
#_(doseq [district (get-places-fn type-k)]
  (let [places (filter #(= (-> % :address type-k) district) d)
        file-name (str "./clean-data/"
                       (apply str
                              (interpose "-" (into [(name type-k)]
                                                   (clean-strings district)))) ".edn")]
    (doall (spit file-name (pr-str places)))))


#_(names-list)

#_(doseq [school d]
  (let [file-name (str "./clean-data/"
                       (apply str
                              (interpose "-" (into ["school"]
                                                   (clean-strings (:name school))))) ".edn")]
    (doall (spit file-name (pr-str school)))))

(comment
  ;; 261 municipality
  (count (set (map #(-> % :address :municipality) d)))

  (set (map #(-> % :address :municipality) d))
  ;;515 city
  (count (set (map #(-> % :address :city) d)))

  ;;district 18
  (count (set (map #(-> % :address :district) d)))


  (= (string->keyword "S. Pedro do Sul Tábua")
     :s-pedro-do-sul-tabua)
  ;;available address keys
  #{:streetName
    :observations
    :raw
    :city
    :municipality
    :longitude
    :state
    :zipcode
    :streetNumber
    :googlePlaceId
    :stateCode
    :noEntriesAtGMaps
    :latitude
    :formattedAddress
    :duplicatedAtGMaps
    :district})
