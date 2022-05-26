#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.pages.lists
  (:require [bb-passrates.shared.main :refer [lang url->canonical]]
            [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]
            [bb-passrates.shared.main :refer [get-place-list k->concelho]]
            [bb-passrates.shared.copy :refer [copy]]))

;;graph width

(defn school-list [type city]
  (try
    (get-place-list type city)
    (catch Exception e '())))

(defn content [lang place]
  {:title (copy [:meta/title lang])
   :subtitle (format (copy [:meta/subtitle-list lang]) (k->concelho place))})


(defn pop-up [k svg {:keys [name] :as imt-profile}]
  [:div.pop-up-wrapper
   [:h5.name name]
   [:div svg]
   [:div.source [:span "Source: "] [:a {:href "IMT"} "IMT"] [:a {:href "ESRI"} "ESRI"]]
   [:a.ver-mais {:href (format "/escolas/%s" k)} "ver mais >"]])

(def year-selector
  #{"2018" "2019" "2020"})

(defn hiccup-school [[k {:keys [rates geocode imt-profile]}]]
  (let [svg (svg/pop-up-svg (svg/parse-d-smart rates :d year-selector) (count year-selector))
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
     [:p.label "IMT licence"]
     [:p.field nec]
     [:p.label "Morada"]
     [:p.field address]
     [:div.source [:span "Source: "] [:a {:href "IMT"} "IMT"]]
     [:div.ratings
      svg]
          [:div.source [:span "Source: "] [:a {:href "IMT"} "IMT"]]
     [:a.ver-mais {:href (format "/escolas/%s" k)} "ver mais >"]]))

(comment (let [l (-> "data/concelho-loule.edn" slurp edn/read-string)]
   (hiccup-school (first l))))

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

(defn page [{:keys [concelho lang] :as req} place-list]
  (let [[lat long] (centroid- place-list)
        school-cards (->> place-list
                          (map hiccup-school)
                          (partition 2 2 nil)
                          (reduce (fn [acc [s1 s2]]
                                    (conj acc [:div.row
                                               [:div.columns.six s1]
                                               [:div.columns.six s2]]))
                                  [:div.list]))]
    [:html
     (tmp/header
      (merge (content lang concelho) req)
      [:main
       [:div.container
        [:h2 "List of Schools in Concelho de Lisboa"]
        [:p "The data represented in the graph below represents Driving pass rates and number of exams done in an examination centre of each year. Link to about page explaining how the 3 data sources got created."]
        [:div.map-wrapper
         [:div#map {:lat lat :long long}]]
        school-cards]])]))

(comment
 (centroid- (-> "data/distrito-lisboa.edn" slurp edn/read-string))

 (let [d (-> "data/concelho-loule.edn" slurp edn/read-string)
       url-map {:uri "/concelhos/loule", :request-method :get, :concelho "loule"}]
   (page url-map d))

 (let [d (-> "data/concelho-loule.edn" slurp edn/read-string)
       url-map {:uri "/concelhos/loule", :request-method :get, :concelho "loule"}]
   (centroid- d)))
