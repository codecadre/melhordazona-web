(ns cp7
  (:require [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [clojure.string :as str]
            [babashka.curl :as curl]
            [cheshire.core :as json]
            [util :as util]))

(def esri-token
  (:esri (edn/read-string (slurp "./public/config_files/secrets.edn"))))

(def d (util/imt-profiles))

(def old-batch
  (-> "resources/data/cp7.edn"
      slurp
      edn/read-string))

;; Non nil post codes in the format xxxx-xxx
(def
  cp7
  (->> d
       (map :cp7)
       (filter #(not (nil? %)))
       (filter #(= 8 (count %)))
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
  (println (format "Coding address %s ..." (or postal address)))
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

(comment
  (single-non-stored {:postal "4200-163"})

  (let [a "Estrada Exterior da Circunvalação, 8154 4200-163 PORTO"]
    (single-non-stored {:address a})))

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

(defn update-all
  "geocodes cp7 that come from all imt addresses. Tries to be smart about few things:

  Looks up old cp7 mapping, if theres a geocode and the score is lower than 100, fetches from ESRI
  API, otherwise just leaves old value in place."
  [cp7s old-batch-map previous-results]
  (->>
   (loop [cp7-set cp7s
          results previous-results]
     (let [cp7 (first cp7-set)
           old-geocode (get old-batch-map cp7)
           result (if (and old-geocode (= 100 (:score old-geocode)))
                    old-geocode
                    (geocode-cp7 cp7))
           results (conj results result)]
       (if (empty? (rest cp7-set))
         results
         (recur (rest cp7-set) results))))
   (group-by :cp7)
   (reduce (fn [acc [cp7 geocode-list]]
             (conj acc (last (sort-by :score geocode-list)))) [])
   (sort-by :cp7)))

(defn -main [& _args]
  (let [[n & _] _args
        n  (when n (edn/read-string n))
        old-batch-map (reduce #(assoc %1 (:cp7 %2) %2) {} old-batch)
        full-data-set (doall (update-all (if n (take n cp7)
                                             cp7)
                                         old-batch-map
                                         old-batch))
        f "resources/data/cp7"]
    (spit (str f ".txt") (with-out-str (pprint/print-table '(:cp7 :postal-c :c :score :x :y) full-data-set)))
    (spit (str f ".edn") (with-out-str (pprint/pprint full-data-set)))))
