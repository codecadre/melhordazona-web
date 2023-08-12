(ns cp7
  (:require [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [clojure.string :as str]
            [babashka.curl :as curl]
            [cheshire.core :as json]
            [util :as util]))

(def esri-token
  (:esri (util/open-edn "./public/config_files/secrets.edn")))

(def full-imt-profiles-dataset (util/imt-profiles))

(def old-batch-cp7
  (util/open-edn "aggregate-transform-load/data/cp7.edn"))

(def address-geocode-filepath "aggregate-transform-load/data/address-geocode")

(def cp7-geocode-filepath "aggregate-transform-load/data/cp7")

(def old-batch-addresses
  (util/open-edn (str address-geocode-filepath ".edn")))
#_{:id #uuid "0f7182e1-9ade-3a01-95c8-f5e495a01bc4",
   :address "Avª do Sabor 5200-289 MOGADOURO",
   :address-c "Avenida do Sabor, 5200-289, Mogadouro, Bragança",
   :postal-c "5200-289",
   :x -6.704744832048174,
   :y 41.346540157911015,
   :score 100,
   :c 2}

;; Non nil post codes in the format xxxx-xxx
(def cp7-full-imt-profiles-dataset
  (->> full-imt-profiles-dataset
       (map :cp7)
       (filter #(not (nil? %)))
       (filter #(= 8 (count %)))
       set
       vec))

(def addresses-full-imt-profiles-dataset
  (->> full-imt-profiles-dataset
       (map :address)
       (filter #(not (nil? %)))
       set
       vec))

;;BATCH API - not used atm
(defn single-batch
  "single request to batch api - testing purposes"
  [s]
  (-> (:body (curl/post "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/geocodeAddresses"
                        {:query-params [["countryCode" "PRT"]
                                        ["sourceCountry" "PRT"]
                                        ["token" esri-token]]
                         :form-params [["f" "json"]
                                       ["addresses" (json/generate-string {:records [{:attributes {:objectid 0
                                                                                                   :address s}}]}) ]]}))
      json/parse-string
      (get "locations")))

#_(single-batch "1950-283")

(defn single-non-stored
  [{:keys [postal address] :as a}]
  (println (format "Coding address or cp7 %s ..." (or postal address)))
  (try
    (-> (:body (curl/get "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates"
                         {:query-params (conj [["countryCode" "PRT"]
                                               ["sourceCountry" "PRT"]
                                               ["outFields" "*"]
                                               ["f" "json"]
                                               ["token" esri-token]]
                                              (if postal
                                                ["postal" postal]
                                                ["address" address]))}))
       (json/parse-string true)
       #_(get "locations"))
    (catch Exception e
      (do
        ;; optimistic retry, shit code
        (println "retrying request in 5 sec....")
        (Thread/sleep 5000)
        (single-non-stored a)))))

(defn geocode-cp7 [cp7]
  (let [{:keys [candidates]} (single-non-stored {:postal cp7})
        postal-c  (-> candidates first :attributes :Postal)
        {:keys [x y]} (-> candidates first :location)
        score (-> candidates first :score)]
    {:cp7 cp7
     :postal-c postal-c
     :x x
     :y y
     :score score
     :c (count candidates)}))

(defn geocode-address [address]
  (let [{:keys [candidates]} (single-non-stored {:address address})
        postal-c  (-> candidates first :attributes :Postal)
        address-c  (-> candidates first :attributes :Match_addr)
        {:keys [x y]} (-> candidates first :location)
        score (-> candidates first :score)]
    {:address address
     :address-c address-c
     :postal-c postal-c
     :x x
     :y y
     :score score
     :c (count candidates)}))

(defmulti geocode
  (fn [cp7-or-address-map]
    (first (keys cp7-or-address-map))))

(defmethod geocode :cp7 [{:keys [cp7]}]
  (let [new-code (geocode-cp7 cp7)]
    (println ">>>> new geocode: " new-code)
    new-code))

(defmethod geocode :address [{:keys [address]}]
  (let [new-code (geocode-address address)]
    (println ">>>> new geocode: " new-code)
    new-code))

(defn fetch-if-lower-than-threshold
  " Looks up old cp7 or address mapping, if theres a geocode and the score is lower than threshold (0-100), fetches from ESRI
  API, otherwise just leaves old value in place. "
  [collection-of-items-to-encode old-batch-map previous-results type threshold]
  (->>
   (loop [remaining-items-to-encode collection-of-items-to-encode
          results previous-results]
     (let [item (first remaining-items-to-encode)
           old-geocode (get old-batch-map item)
           _ (println "\n>>>> Old geocode" old-geocode)
           result (cond (nil? (:score old-geocode)) (geocode (hash-map type item))
                        (and old-geocode (< (:score old-geocode) threshold)) (geocode (hash-map type item))
                        :else old-geocode)
           results (conj results result)]
       (if (empty? (rest remaining-items-to-encode))
         results
         (recur (rest remaining-items-to-encode) results))))))

(defn update-all
  "geocodes cp7 or address that come from all imt addresses.

  :type can be :cp7 or :address"
  [collection-of-items-to-encode old-batch-map previous-results type threshold]
  (->>
   (fetch-if-lower-than-threshold collection-of-items-to-encode old-batch-map previous-results type threshold)
   (group-by type) ;;:cp7 or :address
   (reduce (fn [acc [cp7 geocode-list]]
             (conj acc (last (sort-by :score geocode-list)))) [])
   (sort-by type)))

(defn -main [& _args]
  (let [[n & _] _args
        n  (when n (edn/read-string n))
        old-batch-map-cp7 (reduce #(assoc %1 (:cp7 %2) %2) {} old-batch-cp7)
        old-batch-map-addresses (reduce #(assoc %1 (:address %2) %2) {} old-batch-addresses)
        full-data-set-cp7 (doall (update-all (if n (take n cp7-full-imt-profiles-dataset)
                                                 cp7-full-imt-profiles-dataset)
                                             old-batch-map-cp7
                                             old-batch-cp7
                                             :cp7
                                             100))
        full-data-set-address (doall (update-all (if n (take n addresses-full-imt-profiles-dataset)
                                                     addresses-full-imt-profiles-dataset)
                                                 old-batch-map-addresses
                                                 old-batch-addresses
                                                 :address
                                                 95))]
    (spit (str cp7-geocode-filepath ".txt") (with-out-str (pprint/print-table '(:cp7 :postal-c :c :score :x :y) full-data-set-cp7)))
    (spit (str cp7-geocode-filepath ".edn") (with-out-str (pprint/pprint full-data-set-cp7)))
    (spit (str address-geocode-filepath ".txt") (with-out-str (pprint/print-table '(:address :address-c :postal-c :c :score :x :y :id) full-data-set-address)))
    (spit (str address-geocode-filepath ".edn") (with-out-str (pprint/pprint full-data-set-address)))))


(comment
  (single-non-stored {:postal "4200-163"})

  (let [a "Estrada Exterior da Circunvalação, 8154 4200-163 PORTO"]
    (single-non-stored {:address a}))

  (geocode-cp7 "4200-163")
  (geocode-address "Estrada Exterior da Circunvalação, 8154 4200-163 PORTO")

  (geocode {:cp7 "4200-163"})
  (geocode {:address "Estrada Exterior da Circunvalação, 8154 4200-163 PORTO"})

  (sort (frequencies (map int (remove nil? (map :score old-batch-addresses))) ))


  (geocode-address "Rua Dr. José Marques – Edifício Arrábida 2000 r/c Esqº 2530-565 TORRES NOVAS")
  )
