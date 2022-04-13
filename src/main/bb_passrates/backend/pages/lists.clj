#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.pages.lists
  (:require [bb-passrates.shared.main :refer [lang url->canonical]]
            [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [clojure.edn :as edn]))

(defn school-list [{:keys [url/type] :as url-map}]
  (let [place (condp = type
                :city (:url/city url-map)
                :district (:url/district url-map)
                :municipality (:url/municipality url-map))]
    (-> (str "./clean-data/" (name type) "-" place ".edn")  slurp edn/read-string)))

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

(defn page [url-map]
  (let [place-list (school-list url-map)
        [lat long] (let [n (count place-list)]
                     (->> place-list
                          (reduce (fn [acc {:keys [address]}]
                                    (let [{:keys [latitude longitude]} address]
                                      (-> acc
                                          (update-in [0] + latitude)
                                          (update-in [1] + longitude))))
                                  [0 0])
                          (map #(/ % n))))]
    [:html
     (tmp/header
      (merge content url-map)
      [:main
       [:div.container
        [:div.map-wrapper
         [:div#map {:lat lat :long long}]]
        [:div.list (map hiccup-school place-list)]]])]))
