#!/usr/bin/env /usr/local/bin/bb

(ns place-match
  (:require [cheshire.core :as json]
            [clojure.string :as clj-str]
            [bb-passrates.backend.autocomplete :refer [query-nominatim]]))

(def query-string (System/getenv "QUERY_STRING"))

(def q (last (clj-str/split query-string #"=")))

(println "Content-type:application/json\n")
(println (qduery-nominatim q))
