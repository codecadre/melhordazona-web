#!/usr/bin/env /usr/local/bin/bb

(ns index
  (:require [bb-passrates.backend.pages.home :as home]
            [bb-passrates.backend.pages.404 :as not-found]
            [bb-passrates.backend.pages.lists :as lists]
            [hiccup2.core :refer [html]]
            [bb-passrates.shared.main :refer [url->map]]))

(def request-uri (System/getenv "REQUEST_URI"))
(def query-string (System/getenv "QUERY_STRING"))

(def url-map (url->map request-uri query-string))

(def page (condp apply [url-map]
            :url/city (lists/page url-map)
            :url/district (lists/page url-map)
            :url/municipality (lists/page url-map)
            :url/school "school"
            :url/home (home/page url-map)
            "some page"))

(println "Content-type:text/html\r\n")
(println (str (html page)))

(comment
  (println "Status: 404 Not Found\nContent-type: text/html\n")
  (println (str (html (not-found/page)))))
