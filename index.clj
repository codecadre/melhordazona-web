#!/usr/bin/env /usr/local/bin/bb

(ns index
  (:require [babashka.classpath :as cp]
            [hiccup2.core :refer [html]]))

(cp/add-classpath "lib:.")

(require '[lib.template :as tmp])


(def content
  {:title "Avaliações Abertas - Open Pass Rates"
   :subtitle
   (str
    "Avaliações Abertas: Taxas de aprovação de condução. Dados do IMT."
    "- Open Pass Rates: Driving school pass rates in Portugal. - Government data.")})

(require '[cheshire.core :as json])

(def d (-> "./data/imtt-2014-all-plus-address-data.json"
           slurp
           (json/parse-string true)))

(def page
  [:html (tmp/header content)
   [:div
    [:h1 "You have " (count d) " schools"]
    [:h2 "Components:"]
    [:a {:href "/searchbox.clj"} "searchbox" ]]])

(println "Content-type:text/html\r\n")
(println (str (html page)))
