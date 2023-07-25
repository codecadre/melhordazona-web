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

(def cp7
  (->> d
       (map :cp7)
       (filter #(not (nil? %)))
       (filter #(= 8 (count %)))
       set
       vec))


(def id->address
  (reduce (fn [acc {:keys [id address]}]
            (assoc acc id address)) {} d))


;; (defn cp7->request-obj []
;;   (->> cp7
;;        (map-indexed (fn [idx v]
;;                       {:attributes {:objectid idx
;;                                     :address v}}))))


;; (defn s [] (json/generate-string {:records cp7->request-obj}))

#_(def r (:body (curl/post "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/geocodeAddresses"
                         {:query-params [["countryCode" "PRT"]
                                         ["sourceCountry" "PRT"]
                                   ["token" esri-token]]
                    :form-params [["f" "json"]
                                  ["addresses" s]]})))

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
       json/parse-string
       #_(get "locations"))
    (catch Exception e
      (do
        (println "retrying request in 5 sec....")
        (Thread/sleep 5000)
        (single-non-stored a)))))

#_(comment
  (let [current (last foo)
        id (:id current)
        address (:address current)
        r (single-non-stored {:address address}
                             #_{:postal "4615-301"})
        candidates (get r "candidates")
        address-c (-> candidates first (get "address"))
        postal-c  (-> candidates first (get "attributes") (get "Postal"))
        x (-> candidates first (get "location") (get "x"))
        y (-> candidates first (get "location") (get "y"))
        score (-> candidates first (get "score"))]
    {:id id
     :address address
     :address-c address-c
     :postal-c postal-c
     :x x
     :y y
     :score score
     :c (count candidates)}))


(comment
  (single-non-stored {:postal "4200-163"})

  (let [a "Estrada Exterior da Circunvalação, 8154 4200-163 PORTO"]
    (single-non-stored {:address a})))

;;TODO use recur ..
(defn non-stored-address [k address-map]
  (let [a (atom [])]
    (doseq [[id address] address-map]
      (let [r (single-non-stored (hash-map k address))
            candidates (get r "candidates")
            address-c (-> candidates first (get "address"))
            postal-c  (-> candidates first (get "attributes") (get "Postal"))
            x (-> candidates first (get "location") (get "x"))
            y (-> candidates first (get "location") (get "y"))
            score (-> candidates first (get "score"))]
        (swap! a conj  {:id id
                        :address address
                        :address-c address-c
                        :postal-c postal-c
                        :x x
                        :y y
                        :score score
                        :c (count candidates)})))
    (sort #(compare (:score %2) (:score %1)) @a)))

#_(non-stored-address :address (into {} (take 2 id->address)))

#_(let [d (doall (non-stored-address :address id->address))
      f "recepies/address-geocode"
      ks '(:address :address-c :postal-c :c :score :x :y :id)]
  (spit (str f ".txt") (with-out-str (pprint/print-table ks d)))
  (spit (str f ".edn") (with-out-str (pprint/pprint d))))

;;TODO use recur ..
(defn non-stored-postal [cp7s]
  (let [a (atom [])]
    (doseq [cp7 cp7s]
      (let [r (single-non-stored {:postal cp7})
            candidates (get r "candidates")
            postal-c  (-> candidates first (get "attributes") (get "Postal"))
            x (-> candidates first (get "location") (get "x"))
            y (-> candidates first (get "location") (get "y"))
            score (-> candidates first (get "score"))]
        (swap! a conj  {:cp7 cp7
                        :postal-c postal-c
                        :x x
                        :y y
                        :score score
                        :c (count candidates)})))
    (sort #(compare (:score %2) (:score %1)) @a)))


(defn -main []
  (let [d (doall (non-stored-postal (take 3 cp7)))
        f "resources/data/cp7"]
    (spit (str f ".txt") (with-out-str (pprint/print-table '(:cp7 :postal-c :c :score :x :y) d)))
    (spit (str f ".edn") (with-out-str (pprint/pprint d)))))



(let [d (->>
         (edn/read-string (slurp "resources/data/cp7.edn"))
         (sort-by :cp7))
      f "resources/data/cp7"]
    (spit (str f ".txt") (with-out-str (pprint/print-table '(:cp7 :postal-c :c :score :x :y) d)))
    (spit (str f ".edn") (with-out-str (pprint/pprint d))))
