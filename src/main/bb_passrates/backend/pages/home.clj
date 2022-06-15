(ns bb-passrates.backend.pages.home
  (:require [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [cheshire.core :as json]
            [bb-passrates.shared.copy :refer [copy]]))

(defn content [lang]
  {:title (copy [:home/meta-title lang])
   :subtitle (copy [:home/meta-subtitle lang])})

(defn autocomplete [lang]
  [:div.search-wrapper
   [:div.search-input
    [:button.back "<"]
    [:input.u-full-width {:disabled true :type "text" :placeholder (copy [:autocomplete/placeholder lang])}]
    [:div.mobile-separator]
    [:div.autocomplete-box]]
   [:p.char-limit.hidden (copy [:autocomplete/char-limit lang])]])

(defn page [{:keys [lang] :as req}]
  [:html
   (tmp/header
    (merge (content lang) req)
    [:main
     [:div.container
      [:h3.cta (copy [:autocomplete/cta lang])]
      [:h5.sub-cta (copy [:autocomplete/sub-cta lang])]
      [:form
       (autocomplete lang)]]])])
