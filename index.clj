#!/usr/bin/env /usr/local/bin/bb

(ns index
  (:require [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [cheshire.core :as json]
            [clojure.string :as clj-str]
            [bb-passrates.shared.main :refer [URL->map]]))

(def content
  {:title "Avaliações Abertas - Open Pass Rates"
   :subtitle
   (str
    "Avaliações Abertas: Taxas de aprovação de condução. Dados do IMT."
    "- Open Pass Rates: Driving school pass rates in Portugal. - Government data.")})

#_(def d (-> "./data/imtt-2014-all-plus-address-data.json"
           slurp
           (json/parse-string true)))

(def autocomplete
  [:div.search-wrapper
   [:div.search-input
    [:input.u-full-width {:type "text" :placeholder "Pesquisa por cidade/distrito/municipio"}]
    [:div.autocomplete-box]]
   [:p.char-limit.hidden "Escreve duas letras no mínimo"]])

(def page
  [:html
   [:p (System/getenv "REQUEST_URI")]
   (tmp/header
    (merge content {:url (URL->map (System/getenv "QUERY_STRING"))})
    [:main
     [:div.container
      [:form
       autocomplete]]])])

(println "Content-type:text/html\r\n")
(println (str (html page)))
