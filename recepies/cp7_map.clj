(ns recepies.cp7-map
  (:require [clojure.edn :as edn]
            [clojure.pprint :as pprint]
            [clojure.string :as str]
            [babashka.curl :as curl]
            [cheshire.core :as json]))

;;TODO needs to be updated to reflect new directory structure
(def d (-> "./address-scraping-submodule/enrich-clean.edn" slurp edn/read-string))

(def cp7
  (->> d
       (map :cp7)
       (filter #(not (nil? %)))
       (filter #(= 8 (count %)))
       set
       vec
       (map-indexed (fn [idx v]
                      {:attributes {:objectid idx
                                    :address v}}))))


(def s (json/generate-string {:records cp7}))

#_(def r (:body (curl/post "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/geocodeAddresses"
                         {:query-params [["countryCode" "PRT"]
                                         ["sourceCountry" "PRT"]
                                   ["token" "AAPK068313a8e1504eac8aa9a3df8fa72ea2kKG6rEbl7aJRmgKmGu7ab68sPCNkEq_u-YKtmVskJAjUBztOlXJZQdR9x5B5fBSP"]]
                    :form-params [["f" "json"]
                                  ["addresses" s]]})))

(defn single [s]
  (-> (:body (curl/post "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/geocodeAddresses"
                        {:query-params [["countryCode" "PRT"]
                                        ["sourceCountry" "PRT"]
                                        ["token" "AAPK068313a8e1504eac8aa9a3df8fa72ea2kKG6rEbl7aJRmgKmGu7ab68sPCNkEq_u-YKtmVskJAjUBztOlXJZQdR9x5B5fBSP"]]
                         :form-params [["f" "json"]
                                       ["addresses" (json/generate-string {:records [{:attributes {:objectid 0
                                                                                                   :address s}}]}) ]]}))
      json/parse-string
      (get "locations")))

#_(single "1950-283")

(def parsed-results
  (->> (get (json/parse-string r) "locations")
       (map #(select-keys % ["address" "location" "score"]))
       (map #(assoc % "x" (get-in % ["location" "x"])
                    "y" (get-in % ["location" "y"] )))
       (map #(dissoc % "location"))
       (sort #(compare (get %1 "address") (get %2 "address")))))

(spit "./recepies/table.txt" (with-out-str (pprint/print-table parsed-results)))


(def map-r (->>  parsed-results
                 (group-by #(get % "address"))
                 (map (fn [[k v]] [k (select-keys (first v) ["score" "x" "y"])]))
                 (into {})))

(spit "recepies/cp7-map.edn" (with-out-str (pprint/pprint map-r)))

(->> (-> "./recepies/cp7-map.json" slurp json/parse-string (get "locations"))
     (map #(get-in % ["attributes" "City"]))
     set)
