(ns bb-passrates.backend.pages.home
  (:require [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [cheshire.core :as json]))

(def content
  {:title "Avaliações Abertas - Open Pass Rates"
   :subtitle
   (str
    "Avaliações Abertas: Taxas de aprovação de condução. Dados do IMT."
    "- Open Pass Rates: Driving school pass rates in Portugal. - Government data.")})

(def autocomplete
  [:div.search-wrapper
   [:div.search-input
    [:input.u-full-width {:type "text" :placeholder "Pesquisa por cidade/distrito/municipio"}]
    [:div.autocomplete-box]]
   [:p.char-limit.hidden "Escreve duas letras no mínimo"]])

(defn page [url-map]
  [:html
   (tmp/header
    (merge content url-map)
    [:main
     [:div.container
      [:form
       autocomplete]]])])
