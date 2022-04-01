(ns user
  (:require [bb-passrates.backend.templates.template :as tmp]
            [clojure.string :as clj-str]))


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


(defn string->keyword [s]
  (keyword (apply str (interpose "-" (clean-strings s)))))

(defn names-list []
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

(names-list)

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


(require '[bb-passrates.backend.places :refer [places]])

(defn match-places
  "given a string, finds matches in places list"
  [s]
  (let [s (string->keyword s)]
    s))

(name (match-places "Lisbo"))

(time (filter #(clj-str/includes? (name %) "lis") places))
(time (+ 1 1))

(re-matches #"Lis" "Lisboa")

(re-matches #)

(require '[clojure.core.match :as m])

(clj-str/includes? :hello :h)

(require '[babashka.pods :as pods])
(pods/load-pod 'org.babashka/fswatcher "0.0.2")

(require '[pod.babashka.fswatcher :as fw])

(require '[babashka.process :refer [process check]])

#_(def watcher (fw/watch "less" (fn [event]
                                (let [{:keys [err out]} (-> (process '[sh -c "lessc less/main.less css/main.css"]))
                                      err (slurp err)
                                      out (slurp out)]
                                  (when (not (empty? err)) (prn (slurp err)))
                                  (when (not (empty? out)) (prn (slurp out)))))))
(fw/unwatch watcher)

(-> (process ["lessc less/main.less css/main.css"] {:out :string}) check :out str/split-lines first)

(-> (process '[echo $PWD] {:out :string}) check :out slurp)

(-> (process '[sh -c "echo $PWD"]) check :out slurp)
