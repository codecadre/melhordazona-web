(ns recepies.places
  (:require [clojure.edn :as edn]
            [clojure.string :as clj-str]
            [clojure.pprint :as pprint]
            [clojure.java.io :as io]))

;;TODO use the on in main
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
                 #_(map #(hash-map
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
                           :href (str "/escolas/" k)))) db)])))

;;
;; Populate places.cljc
;;
(defn build-places-ns [l]
 (apply str ["(ns bb-passrates.shared.places)\n\n"

             "(def places\n'" l "\n)"]))

(let [f "src/main/bb_passrates/shared/places.cljc"
      d-as-string (->> (names-list)
                       (sort #(compare (:k %1) (:k %2)))
                       pprint/pprint
                       with-out-str)]
  (doall (spit f (build-places-ns d-as-string))))

;;
;; Populate sitemap
;;

(def domain "https://passaprimeira.xyz")

(def sitemap
  (flatten
   [domain
    (map #(str domain %)
         '("/en/"
           "/paginas/acerca/"
           "/escola-sem-morada-imt/"))]))

(defn sitemap-gen [list]
  (let [school-template (str domain "/escolas/%s/")
        school-template-en (str domain "/en/schools/%s/")
        concelho-template (str domain "/concelhos/%s/")
        concelho-template-en (str domain "/en/municipalities/%s/")]
    (sort (reduce (fn [acc {:keys [k type]}]
                    (if (= :school type)
                      (conj acc
                            (format school-template (name k))
                            (format school-template-en (name k)))
                      (conj acc
                            (format concelho-template (name k))
                            (format concelho-template-en (name k))))) sitemap list))))

(spit "sitemap.txt" (apply str (interpose "\n"  (sitemap-gen (names-list)))))

;;
;; Populate /data/
;;

(defn string->file-sys-string [s]
  (->> s clean-strings (interpose "-") (apply str)))

(doseq [[concelho schools] (->> db
                                (group-by #(-> % last :imt-profile :concelho))
                                (remove #(-> % first nil?)))]
  (let [distrito (-> schools first last :imt-profile :distrito)
        concelho-key (string->file-sys-string concelho)
        distrito-key (string->file-sys-string distrito)
        f (format "./data/concelho-%s-%s.edn" distrito-key concelho-key)
        data-string (with-out-str (pprint/pprint schools))]
    (io/make-parents f)
    (spit f data-string)))

(let [d (->> db
             (filter #(-> % last :imt-profile nil?)))
      f "./data/concelho-nil.edn"
      data-string (with-out-str (pprint/pprint d))]
  (spit f data-string))

(doseq [[distrito schools] (->> db
                                (group-by #(-> % last :imt-profile :distrito))
                                (remove #(-> % first nil?)))]
  (let [f (format "./data/distrito-%s.edn" (string->file-sys-string distrito))
        data-string (with-out-str (pprint/pprint schools))]
    (spit f data-string)))

(doseq [[k s] db]
  (let [distrito-key (->> s :imt-profile :distrito)
        concelho-key (->> s :imt-profile :concelho)
        location-key (if (and distrito-key concelho-key)
                       (format "%s-%s"
                               (string->file-sys-string  distrito-key)
                               (string->file-sys-string  concelho-key))
                       "nil")
        f (format "./data/escola-%s-%s.edn" location-key k)
        data-string (with-out-str (pprint/pprint s))]
    (spit f data-string)))
