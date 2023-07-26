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
        (println "retrying request in 5 sec....")
        (Thread/sleep 5000)
        (single-non-stored a)))))

(comment
  (single-non-stored {:postal "4200-163"})

  (let [a "Estrada Exterior da Circunvalação, 8154 4200-163 PORTO"]
    (single-non-stored {:address a})))

;;TODO check local first, then pull from api if necessary
(defn non-stored-postal
  [cp7s]
  (->>
   (loop [cp7-set cp7s
          results []]
     (let [cp7 (first cp7-set)
           {:keys [candidates]} (single-non-stored {:postal cp7})
           postal-c  (-> candidates first :attributes :Postal)
           {:keys [x y]} (-> candidates first :location)
           score (-> candidates first :score)
           results (conj results
                         {:cp7 cp7
                          :postal-c postal-c
                          :x x
                          :y y
                          :score score
                          :c (count candidates)})]
       (if (empty? (rest cp7-set))
         results
         (recur (rest cp7-set) results))))
   (sort-by :cp7)))

(defn -main [& _args]
  (let [[n & _] _args
        n  (when n (edn/read-string n))
        d (doall (non-stored-postal (if n (take n cp7)
                                        cp7)))
        f "resources/data/cp7"]
    (spit (str f ".txt") (with-out-str (pprint/print-table '(:cp7 :postal-c :c :score :x :y) d)))
    (spit (str f ".edn") (with-out-str (pprint/pprint d)))))
