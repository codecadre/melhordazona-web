#!/usr/bin/env /usr/local/bin/bb

(ns lists
  (:require [bb-passrates.shared.main :refer [lang url->canonical]]
            [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [clojure.edn :as edn]))

#_(System/getenv "REQUEST_URI")

(def type "cidades")

(def place "lisboa")

(def list (-> (str "./data/" (get url->canonical type) "-" place ".edn")  slurp edn/read-string))

(def content
  {:title "Avaliações Abertas - Open Pass Rates"
   :subtitle
   (str
    "Avaliações Abertas: Taxas de aprovação de condução. Dados do IMT."
    "- Open Pass Rates: Driving school pass rates in Portugal. - Government data.")})

(def page
  [:html
   (tmp/header
    content
    [:body
     [:p (str list)]])])

(println "Content-type:text/html\r\n")
(println (str (html page)))
