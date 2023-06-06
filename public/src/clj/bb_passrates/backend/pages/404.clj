(ns bb-passrates.backend.pages.404
  (:require [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [cheshire.core :as json]))



(defn page []
  [:html
   [:h1 "404"]
   [:h2 "NOT FOUND"]
   [:div [:img {:src "/public/img/404.jpeg"}]]])
