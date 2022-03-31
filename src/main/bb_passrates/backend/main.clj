#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.shared.main
  (:require [clojure.edn :as edn]
            [clojure.string :as clj-str]
            [babashka.curl :as curl]
            [cheshire.core :as json]
            [bb-passrates.backend.places :refer [places]]))

(defn nominatim-url []
  (-> "config.edn" slurp edn/read-string :nominatim))

(defn clean-q
  "Allow:
  - alphanumeric
  - spaces
  - comma: ','
  "
  [q]
  (let [words (-> q
                  clj-str/lower-case
                  (clj-str/replace #"[^0-9a-z_ ]" "")
                  (clj-str/split #" "))]
    (remove empty? words)))

#_(= "rua++vale+58,+lisboa"
   (clean-q "RuA <> ?Vale 58, LISBOA"))

#_(clean-q "RuA <> ?Vale 58, LISBOA")

;;TODO: needs to throw on status != 200
;;should be enough
(defn query-nominatim [q]
  (prn (str (nominatim-url) "?q=" (clean-q q)))
  (let [{:keys [body]} (curl/get (str (nominatim-url) "?search=" (apply str (interpose "+" (clean-q q))) ))]
    (map #(select-keys % ["lat" "lon" "display_name"]) (json/parse-string body))))

#_(query-nominatim "rua vale formoso lisboa")

(defn query-place-list [q]
  (let [q (apply str (interpose " " (clean-q q)))]
    (filter #(clj-str/includes? (:search-field %) q) places)))

(time (query-place-list "con"))
