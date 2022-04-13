#!/usr/bin/env /usr/local/bin/bb

(ns index
  (:require [bb-passrates.backend.pages.home :as home]
            [hiccup2.core :refer [html]]
            [bb-passrates.shared.main :refer [url->map]]))

(def request-uri (System/getenv "REQUEST_URI"))
(def query-string (System/getenv "QUERY_STRING"))

(def url-map (url->map request-uri query-string))

(def page (condp apply [url-map]
            :url/city "city"
            :url/district "district"
            :url/municipality "municipality"
            :url/school "school"
            :url/home (home/page url-map)
            "some page"))


(println "Content-type:text/html\r\n")
(println (str (html page)))
