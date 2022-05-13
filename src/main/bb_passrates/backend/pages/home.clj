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
    [:input.u-full-width {:onfocus "window.scrollTo(0, 0);"  :type "text" :placeholder (copy [:autocomplete/placeholder lang])}]
    [:div.autocomplete-box]]
   [:p.char-limit.hidden (copy [:autocomplete/char-limit lang])]])

(defn page [req]
  [:html
   (tmp/header
    (merge content req)
    [:main
     [:div.container
      [:h3.cta (copy [:autocomplete/cta (:url/lang req)])]
      [:h5.sub-cta (copy [:autocomplete/sub-cta (:url/lang req)])]
      [:form
       autocomplete]]])])
