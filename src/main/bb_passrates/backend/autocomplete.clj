#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.autocomplete
  (:require [clojure.edn :as edn]
            [clojure.string :as clj-str]
            [babashka.curl :as curl]
            [cheshire.core :as json]))

(def nominatim-url
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
                  (clj-str/split #" "))
        words (remove empty? words)]
    (apply str (interpose "+" words))))

#_(= "rua++vale+58,+lisboa"
   (clean-q "RuA <> ?Vale 58, LISBOA"))

#_(clean-q "RuA <> ?Vale 58, LISBOA")

(defn query-nominatim [q]
  (let [{:keys [body]} (curl/get (str nominatim-url "?q=" (clean-q q)))]
    (map #(select-keys % ["lat" "lon" "display_name"] )(json/parse-string body))))

#_(query-nominatim "rua vale formoso lisboa")
