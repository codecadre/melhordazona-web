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


(defn hiccup-school [{:keys [name address contacts]}]
  [:div.school {:lat (:latitude address) :long (:longitude address)}
   [:div.name [:h4 name]]
   [:div.address (:raw address)]
   [:div.coordinates [:p "coordinates: " {:lat (:latitude address) :long (:longitude address)}]]])

(def page
  (let [[lat long]
        (let [n (count list)]
          (->> list
               (reduce (fn [acc {:keys [address]}]
                         (let [{:keys [latitude longitude]} address]
                           (-> acc
                               (update-in [0] + latitude)
                               (update-in [1] + longitude))))
                       [0 0])
               (map #(/ % n))))]
    [:html
     (tmp/header
      content
      [:main
       [:div.container
        [:div.map-wrapper
         [:div#map {:lat lat :long long}]]
        [:div.list (map hiccup-school list)]]])]))

(println "Content-type:text/html\r\n")
(println (str (html page)))
