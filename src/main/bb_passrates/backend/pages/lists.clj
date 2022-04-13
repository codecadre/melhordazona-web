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
   [:div.coordinates [:p "coordinates: " {:lat (:latitude address) :long (:longitude address)}]]
   [:div.ratings
    [:svg {:width "960", :height "500"}
     [:g {:transform "translate(40,20)"}

      [:g {:class "x axis", :transform "translate(0,450)"}

       (map
        (fn [n]
          [:g {:class "tick", :transform (str "translate(" (* 20 n) ", 0)"), :style "opacity: 1;"}
           [:line {:y2 "6", :x2 (str (* 20 n))}]
           [:text {:dy ".71em", :y "9", :x "0", :style "text-anchor: middle;"} "A"]" "])
        [0 10 20])

       [:path {:class "domain", :d "M0,6V0H900V6"}]" "]

      ;;y axis ticks
      [:g {:class "y axis"}
       (map
        (fn [n]
          (let [y-coord (int (- 450 (* 450 (/ n 100))))]
              [:g {:class "tick", :transform (str "translate(0," y-coord ")"), :style "opacity: 1;"}
               [:line {:x2 "-6", :y2 "0"}]
               [:text {:dy ".32em", :x "-9", :y "0", :style "text-anchor: end;"} (str n "%")]" "]))
        (range 0 110 10))
       [:path {:class "domain", :d "M-6,0H0V450H-6"}]
       ;;text
       [:text {:transform "rotate(-90)", :y "6", :dy ".71em", :style "text-anchor: end;"} "Frequency"]" "]

      [:rect {:class "bar", :x "10", :width "31", :y "160.66367501180912", :height "289.3363249881909"}] " "]" "]]])

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
