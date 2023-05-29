(ns bb-passrates.shared.main
  (:require [clojure.string :as clj-str]
            [clojure.set :refer [map-invert]]
            [clojure.edn :as edn]))

(defn remove-accents
  [text]
  (clj-str/escape text {\á "a", \Á "A", \à "a", \À "A", \â "a", \Â "A", \ã "a", \Ã "A", \ä "a", \Ä "A",
                        \ç "c", \Ç "C",
                        \ñ "n", \Ñ "N",
                        \é "e", \É "E", \ê "e", \Ê "E",
                        \í "i", \Í "I", \ï "i", \Ï "I",
                        \ó "o", \Ó "O", \ô "o", \Ô "O", \õ "o", \Õ "O", \ö "o", \Ö "O",
                        \ú "u", \Ú "U", \ü "u", \Ü "U"}))

(defn clean-q
  "Allow:
  - alphanumeric
  - spaces
  - comma: ','
  "
  [q]
  (let [words (-> q
                  clj-str/lower-case
                  remove-accents
                  (clj-str/replace #"[^0-9a-z_ ]" "")
                  (clj-str/split #" "))]
    (remove empty? words)))



(defn clean-strings
  "returns collection of string"
  [s]
  (vec (clean-q s)))

(defn string->keywordize [s]
  (apply str (interpose "-" (clean-strings s))))

(defn string->keywordize-opt
  "with char is usually a dash or space"
  [s with-char]
  (apply str (interpose with-char (clean-strings s))))

(defn query-place-list [list q]
  (let [q (clean-q q)]
    (when (not (empty? q))
      (filter #(clj-str/includes? (:search-field %) (apply str (interpose " " q))) list))))

(defn path->href
  "given a path and a lang, appends /en/ if necessary"
  [path {:keys [lang] :as req}]
  (let [l (if (= lang :en) "/en" "")]
    (str l path)))

(defn ->add-trailing-slash
  "add trailing slash if not present"
  [uri]
  (if (= (last uri) \/)
    uri
    (str uri "/")))

(defn parse-qs-like-string [string]
  (->> (clj-str/split string #"&|=")
      (partition 2)
      (reduce #(assoc %1 (keyword (first %2)) (last %2)) {})))

(defn url->req [uri req-method query-string in]
  (let [en? (clj-str/includes? uri "/en/")
        lang (if en? :en :pt)]
    {:request-method (-> req-method clj-str/lower-case keyword)
     :lang lang
     :uri (-> uri (clj-str/split #"\?")
              first
              #_->add-trailing-slash)
     :q (parse-qs-like-string query-string)
     :in in}))

#?(:clj
   (defn remove-accents
     [text]
     (clj-str/escape text {\á "a", \Á "A", \à "a", \À "A", \â "a", \Â "A", \ã "a", \Ã "A", \ä "a", \Ä "A",
                           \ç "c", \Ç "C",
                           \ñ "n", \Ñ "N",
                           \é "e", \É "E", \ê "e", \Ê "E",
                           \í "i", \Í "I", \ï "i", \Ï "I",
                           \ó "o", \Ó "O", \ô "o", \Ô "O", \õ "o", \Õ "O", \ö "o", \Ö "O",
                           \ú "u", \Ú "U", \ü "u", \Ü "U"})))

#?(:clj
   (defn clean-strings
     "returns collection of string"
     [s]
     (let [words (-> s
                     clj-str/lower-case
                     remove-accents
                     (clj-str/replace #"[^0-9a-z_ ]" "")
                     (clj-str/split #" "))]
       (vec (remove empty? words)))))

#?(:clj
   (defn string->keywordize [s]
     (apply str (interpose "-" (clean-strings s)))))

#?(:clj
   (defn req-fn []
     (let [request-uri (System/getenv "REQUEST_URI")
           query-string (System/getenv "QUERY_STRING")
           request-method (System/getenv "REQUEST_METHOD")
           in (try (str (edn/read *in*))
                   (catch Exception e nil))]
       (url->req request-uri request-method query-string in))))

#?(:clj
   (defn get-place-list [type place]
     (-> (str "./data/" (name type) "-" place ".edn")  slurp edn/read-string)))

#?(:clj
  (defn k->human [k]
    (->>
     (clj-str/split k #"-" )
     (map clj-str/capitalize)
     (interpose " " )
     clj-str/join)))

#?(:clj
  (defn address->human [k]
    (->>
     (clj-str/split k #" " )
     (map clj-str/capitalize)
     (interpose " " )
     clj-str/join)))

#_(address->human "Avª Bombeiros Voluntários loja 8 J D 1675 PONTINHA")
