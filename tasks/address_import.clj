#!/usr/bin/env /usr/local/bin/bb

(ns tasks.address-import
  (:require [clojure.string :as clj-str]
            [cheshire.core :as json]))

(def d (-> "./data/imtt-2014-all-plus-address-data.json"
           slurp
           (json/parse-string true)))

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

(doseq [school d]
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
