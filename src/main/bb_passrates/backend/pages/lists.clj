#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.pages.lists
  (:require [bb-passrates.shared.main :refer [get-place-list lang url->canonical]]
            [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]))

;;graph width
(def W 960)

(defn school-list [type city]
  (try
    (get-place-list type city)
    (catch Exception e (list))))

(def content
  {:title "Avaliações Abertas - Open Pass Rates"
   :subtitle
   (str
    "Avaliações Abertas: Taxas de aprovação de condução. Dados do IMT."
    "- Open Pass Rates: Driving school pass rates in Portugal. - Government data.")})

(defn y-axis-ticks
  "takes in tick step in %, returns ticks and labels from 0 to 100%"
  [n]
  ;;these could be parameters eventualy
  (let [tick-length 6]
    (map
     (fn [percentage-value]
       (let [y-coord (int (- 450 (* 450 (/ percentage-value 100))))]
         [:g {:class "tick", :transform (str "translate(0," y-coord ")"), :style "opacity: 1;"}
          [:line {:x2 (-> tick-length (* -1) str), :y2 "0"}]
          [:text {:dy ".32em", :x "-9", :y "0", :style "text-anchor: end;"}
           (str percentage-value "%")]" "]))
     (range 0 (+ 100 n) n))))

(defn x-ticks [ticks]
  (let [spacing (int (/ W (+ 1 (count ticks))))]
    (map
     (fn [n]
       [:g {:class "tick",
            :transform (str "translate(" (* spacing n) ", 0)"),
            :style "opacity: 1;"}
        [:line {:y2 "6", :x2 "0"}]
        [:text {:dy ".71em", :y "9", :x "0",
                :style "text-anchor: middle;"} (nth ticks (dec n))]" "])
     (range 1 (inc (count ticks)) 1))))

;;(x-ticks ["1 semetre 2018" "1 semenstre 2019" "2 semenstre 2019"])

(defn hiccup-school [{:keys [name address contacts]}]
  [:div.school {:lat (:latitude address) :long (:longitude address)}
   [:div.name [:h4 name]]
   [:div.address (:raw address)]
   [:div.coordinates [:p "coordinates: " {:lat (:latitude address) :long (:longitude address)}]]
   [:div.ratings
    [:svg {:width "960", :height "500"}
     [:g {:transform "translate(40,20)"}

      [:g {:class "x axis", :transform "translate(0,450)"}

       (x-ticks ["1 semetre 2018" "1 semenstre 2019" "2 semenstre 2019"])

       [:path {:class "domain", :d "M0,6V0H900V6"}]" "]

      ;;y axis ticks
      [:g {:class "y axis"}
       (y-axis-ticks 10)
       [:path {:class "domain", :d "M-6,0H0V450H-6"}]
       ;;text
       [:text {:transform "rotate(-90)", :y "6", :dy ".71em", :style "text-anchor: end;"} "Frequency"]" "]

      [:rect {:class "bar", :x "10", :width "31", :y "160.66367501180912", :height "289.3363249881909"}] " "]" "]]])

(defn page [url-map place-list]
  (let [[lat long] (let [n (count place-list)]
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
