(ns bb-passrates.backend.pages.contact
  (:require [bb-passrates.backend.templates.template :as tmp]
            [bb-passrates.shared.copy :refer [copy-m]]
            [clojure.edn :as edn]
            [bb-passrates.backend.email :as email]
            [bb-passrates.shared.main :as main :refer [path->href]]
            [bb-passrates.backend.components :refer [form]]))

(defn content [lang]
  {:title (copy-m :home/meta-title)
   :subtitle (copy-m :home/meta-subtitle)})

(defn page [{:keys [lang] :as req}]
  (into
   [:html {:lang (name lang)}]
   (tmp/header
    (merge (content lang) req)
    [:main
     [:div.container
      [:h2 (copy-m :contact/title)]
      (form req)]])))
