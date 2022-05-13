(ns bb-passrates.backend.pages.home
  (:require [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [cheshire.core :as json]
            [bb-passrates.shared.main :refer [req]]
            [bb-passrates.shared.copy :refer [copy]]))

(def lang (:url/lang req))

(def content
  {:title (copy [:meta/title lang])
   :subtitle (copy [:meta/subtitle lang])})

(def autocomplete
  [:div.search-wrapper
   [:div.search-input
    [:input.u-full-width {:type "text" :placeholder (copy [:autocomplete/placeholder lang])}]
    [:div.autocomplete-box]]
   [:p.char-limit.hidden (copy [:autocomplete/char-limit lang])]])

(defn page [req]
  [:html
   (tmp/header
    (merge content req)
    [:main
     [:div.container
      [:h3.cta "Pesquisa por concelho ou nome da escola"]
      [:h5.sub-cta "Mostramos-te as taxas de aprovação publicadas pelo IMT, num mapa, gratuitamente."]
      [:form
       autocomplete]]])])
