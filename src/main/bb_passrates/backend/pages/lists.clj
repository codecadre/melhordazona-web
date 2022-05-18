#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.pages.lists
  (:require [bb-passrates.shared.main :refer [lang url->canonical]]
            [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]))

;;graph width


(defn get-place-list [type place]
  (-> (str "./data/" (name type) "-" place ".edn")  slurp edn/read-string))

(defn school-list [type city]
  (try
    (get-place-list type city)
    (catch Exception e '())))

(def content
  {:title "Avaliações Abertas - Open Pass Rates"
   :subtitle
   (str
    "Avaliações Abertas: Taxas de aprovação de condução. Dados do IMT."
    "- Open Pass Rates: Driving school pass rates in Portugal. - Government data.")})


#_(defn pop-up []
  [:table
   [:thead
    [:tr
     [:th "2015"]
     [:th "Age"]
     [:th "Sex"]
     [:th "Location"]]]
   [:tbody
    [:tr
     [:td "Dave Gamache"]
     [:td "26"]
     [:td "Male"]
     [:td "San Francisco"]]
    [:tr
     [:td "Dwayne Johnson"]
     [:td "42"]
     [:td "Male"]
     [:td "Hayward"]]]])

(defn hiccup-school [[k {:keys [rates geocode imt-profile]}]]
  (let [lat (:y geocode)
        long (:x geocode)
        name (:name imt-profile)
        nec (:nec imt-profile)
        address (:address imt-profile)
        concelho (:concelho imt-profile)
        cp7 (:cp7 imt-profile)]
    [:div.school {:lat lat :long long}
     #_[:div.pop-up (pop-up)]
     [:div.name [:h4 name]]
     [:div.nec [:p (str "Licensa n# " nec)]]
     [:div.address [:p address]]
     [:div.concelho [:p (str "ver mais escolas no concelho" concelho)]]
     [:div.cp7 [:p cp7]]
     [:div.address #_(:raw address)]
     [:div.coordinates [:p "coordinates: " {:lat lat :long long}]]
     (let [[label r1 r2] (svg/svg (svg/parse-d rates))]
         [:div.ratings
          [:div.label label]
          [:div.driving r1]
          [:div.label label]
          [:div.theory r2]])]))

(let [l (-> "data/concelho-loule.edn" slurp edn/read-string)]
(hiccup-school (first l)))

(defn centroid- [d]
  (let [xx (->> d;;long
                (map (fn [[k {:keys [geocode]}]]
                       (:x geocode)))
                (remove nil?))
        yy (->> d;;lat
                (map (fn [[k {:keys [geocode]}]]
                       (:y geocode)))
                (remove nil?))
        n (count xx)]
    [(/ (reduce + 0 yy) n)
     (/ (reduce + 0 xx) n)]))

(defn page [url-map place-list]
  (let [[lat long] (centroid- place-list)]
      [:html
       (tmp/header
       (merge content url-map)
        [:main
         [:div.container
          [:div.map-wrapper
           [:div#map {:lat lat :long long}]]
          [:div.list (map hiccup-school place-list)]]])]))

(comment
 (centroid- (-> "data/distrito-lisboa.edn" slurp edn/read-string))

 (let [d (-> "data/concelho-loule.edn" slurp edn/read-string)
       url-map {:uri "/concelhos/loule", :request-method :get, :concelho "loule"}]
   (page url-map d))

 (let [d (-> "data/concelho-loule.edn" slurp edn/read-string)
       url-map {:uri "/concelhos/loule", :request-method :get, :concelho "loule"}]
   (centroid- d)))
