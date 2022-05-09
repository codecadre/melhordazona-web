(ns produce-data
  (:require [clojure.string :as clj-str]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [clojure.pprint :as pprint]))

(def addresses
  (-> "imt-school-addresses-submodule/parsed-data/db.edn"
      slurp
      edn/read-string));;TODO add name to keyword

(def nec->addresses
  "uses first, drops the rest. relies on there being a manual overwrite if data
  doesn't look good"
  (->> addresses
       (group-by :nec)
       (map (fn [[k v]]
              [k (first v)]))
       (into {})))

(filter #(= 1417 (:nec %)) addresses)
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
  (map (fn [[k {:keys [nec] :as d}]]
         [k (assoc d :imt-profile (get nec->addresses nec))]) pass-rates))



(defn simple-db [db]
  (map (fn [[k {:keys [nec rates imt-profile]}]]
         {:nec nec
          :imt/name (:name imt-profile)
          :pr/name (-> rates first :r/name-raw)
          :pr/k k}
         ) db))

(count (remove (fn [[k {:keys [imt-profile]}]]
           (when imt-profile true)) db))


(def no-imt-profile
  (remove (fn [[k {:keys [imt-profile]}]]
            (when imt-profile true)) db))
;;92

(def print-no-imt-profile
  (->> no-imt-profile
       (map (fn [[k {:keys [rates]}]]
              (into {:k k } (map #(hash-map (keyword (:r/level-0 %)) true) rates))))
       (sort #(compare (-> %2 :s count) (-> %1 :s count)))))

(spit "./recepies/no-imt-profile.txt"
      (with-out-str
        (pprint/print-table [:k :2015 :2016 :2017 :2018 :2019 :2020] print-no-imt-profile)))

(spit "./recepies/simple-db.txt"
      (with-out-str
        (pprint/print-table (simple-db db))))



(->> pass-rates
     (map (fn [[k v]]
            (let [s (set (map :r/nec v))]
              {:k k
               :necs (apply str (interpose ", " s))
               :nec-count (count s)})))
     #_(filter #(> (:nec-count %) 1)))

(def pass-rates-by-nec
  (->> (->
        "imt-pass-rates-submodule/parsed-data/db.json"
        slurp
        (json/parse-string (fn [k] (keyword "r" (name k))))
        :r/data)
       (group-by :r/nec)))

(spit "./recepies/rates-by-nec.txt"
      (with-out-str
        (pprint/print-table (->> pass-rates-by-nec
                                 (map (fn [[k v]]
                                        (let [s (set (map :r/k v))]
                                          {:nec k
                                           :ks (apply str (interpose " -- " s))
                                           :names (apply str (interpose " -- " (set (map :r/name_raw v))))
                                           :k-count (count s)})))
                                 (filter #(> (:k-count %) 1))
                                 (map #(select-keys % [:nec :ks]))))))

(every? true? (map (fn k [[k v]]
                     (apply = (map :k v)))  (take-last 100 (take 900 pass-rates))))

(nth (take-last 10 (take 100 pass-rates)) 1)


(def pass-rates-nec (set (map :n_ec pass-rates)))

(def addresses-nec
  (set (map
    :nec-raw
    (-> "imt-school-addresses-submodule/parsed-data/db.edn"
        slurp
        edn/read-string))))


(defn full-outer-join
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

(def db
  (into (vec addresses-nil) (full-outer-join :nec pass-rates (-> addresses-not-nil set vec))))

(def db-print
  (->> db
       (map #(dissoc % :concelho-href :school-href))
       (sort #(compare (:nec %1) (:nec %2)))))


(def ks-print
  #{:nec :k :title-clean}
  #_(set (flatten (map keys db-print))))

(spit "./recepies/db.txt" (with-out-str (pprint/print-table ks-print db-print)))

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
