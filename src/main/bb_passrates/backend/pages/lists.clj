#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.pages.lists
  (:require [bb-passrates.shared.main :refer [lang url->canonical]]
            [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]
            [bb-passrates.shared.main :refer [get-place-list]]))

;;graph width

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


(defn pop-up [k svg {:keys [name] :as imt-profile}]
  [:div.pop-up-wrapper
   [:h5.name name]
   [:p "Provas práticas:"]
   [:div svg]
   [:a {:href (format "escolas/%s" k)} "ver mais >"]])

(defn hiccup-school [[k {:keys [rates geocode imt-profile]}]]
  (let [svg 123 #_(svg/pop-up-svg (svg/parse-d-min rates))
        lat (:y geocode)
        long (:x geocode)
        name (:name imt-profile)
        nec (:nec imt-profile)
        address (:address imt-profile)
        concelho (:concelho imt-profile)
        cp7 (:cp7 imt-profile)]
    [:div.school-card {:lat lat :long long}
     (pop-up k svg imt-profile)
     [:h4.name name]
     [:div.nec [:p (str "Licensa IMT N. " nec)]]
     [:div.address [:p (str "Morada:" address)]]
     [:div.ratings
      svg]
     [:a {:href (format "escolas/%s" k)} "ver mais >"]]))

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
