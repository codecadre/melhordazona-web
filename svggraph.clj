#!/usr/bin/env /usr/home/codecan/bin/bb

(ns svggraph
  (:require
   [clojure.edn :as edn]
   [bb-passrates.backend.templates.template :as tmp]
   [hiccup2.core :refer [html]]
   [bb-passrates.shared.svg :as svg]))

(def d (-> "data/concelho-loule.edn" slurp edn/read-string))



;;(parse-d (:rates (last (first d))))

(def html-header "Content-type:text/html\r\n")


(def page
  {:page [:html (tmp/header {} (svg/svg (svg/parse-d (:rates (last (first d))))))]
   :header html-header})

(let [{:keys [page header]} page]
  (println header)
  (println (str (html page))))



(svg/svg (svg/parse-d (:rates (last (first d)))))

(svg/parse-d (:rates (last (first d))))

(svg/svg (svg/parse-d (:rates (last (first d)))))
