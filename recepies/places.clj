(ns recepies.places
  (:require [clojure.edn :as edn]
            [clojure.string :as clj-str]
            [clojure.pprint :as pprint]))

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

(defn string->keywordize [s]
  (apply str (interpose "-" (clean-strings s))))



#_(def type-k :municipality)


;;spit municipality, city and district list
#_(doseq [district (get-places-fn type-k)]
  (let [places (filter #(= (-> % :address type-k) district) d)
        file-name (str "./clean-data/"
                       (apply str
                              (interpose "-" (into [(name type-k)]
                                                   (clean-strings district)))) ".edn")]
    (doall (spit file-name (pr-str places)))))


#_(names-list)

(def db
  (->> "recepies/db.edn" slurp edn/read-string))

(def distritos
  (->> db
      (map (fn [[k s]]
             (-> s :imt-profile :distrito)))
      (remove nil?)
      set
      vec))


(def concelhos
  (->> db
      (map (fn [[k s]]
             (-> s :imt-profile :concelho)))
      (remove nil?)
      set
      vec))

(defn names-list []
  "builds bb-passrates.shared.places/places"
  (vec (flatten [(map #(hash-map
                        :k (keyword "concelho" (string->keywordize %))
                        :type :concelho
                        :name %
                        :search-field (apply str (interpose " " (clean-strings %)))
                        :href (str "/concelhos/" (string->keywordize %))) concelhos)
                 (map #(hash-map
                        :k (keyword "distrito" (string->keywordize %))
                        :type :distrito
                        :name %
                        :search-field (apply str (interpose " " (clean-strings %)))
                        :href (str "/distritos/" (string->keywordize %))) distritos)
                 (map (fn [[k s]]
                        (let [name-imt (-> s :imt-profile :name)
                              name-pass-rates (-> s :rates first :r/name-raw)
                              name (or name-imt name-pass-rates)]
                          (hash-map
                           :k (keyword k)
                           :type :school
                           :name name
                           :search-field (apply str (interpose " " (clean-strings name)))
                           :href (str "/escolas/" k)))) db)
                 ])))

(defn build-places-ns [l]
 (apply str ["(ns bb-passrates.shared.places)\n\n"

             "(def places\n'" l "\n)"]))

(let [f "src/main/bb_passrates/shared/places.cljc"
      d-as-string (->> (names-list)
                       (sort #(compare (:k %1) (:k %2)))
                       pprint/pprint
                       with-out-str)]
  (doall (spit f (build-places-ns d-as-string))))

#_(doseq [school d]
  (let [file-name (str "./clean-data/"
                       (apply str
                              (interpose "-" (into ["school"]
                                                   (clean-strings (:name school))))) ".edn")]
    (doall (spit file-name (pr-str school)))))

#_(comment
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
