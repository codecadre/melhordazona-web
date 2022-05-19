(ns bb-passrates.backend.pages.school
  (:require [bb-passrates.shared.main :refer [lang url->canonical]]
            [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]
            [bb-passrates.shared.main :refer [get-place-list]]))

(def content
  {:title "COPY"
   :subtitle
   (str
    "COPY")})

(defn school-data [k]
  (try
    (-> (str "./data/escola-" k ".edn") slurp edn/read-string)
    (catch Exception e '())))

(def year-selector
  #{"2015" "2016" "2017" "2018" "2019" "2020"})

(defn page [url-map {:keys [nec rates geocode imt-profile] :as school}]
  (let [lat (:y geocode)
        long (:x geocode)]
    [:html
     (tmp/header
      (merge content url-map)
      [:main
       [:div.solo-school
        [:div.container
         [:div.row
          [:h4.name (:name imt-profile)]
          [:a {:href (:concelho-href imt-profile)}
           (format "Mais escolas no concelho de %s." (:concelho imt-profile))]
          [:div.row
           [:div.six.columns
            [:p.address-label "Morada"]
            [:p.address (:address imt-profile)]
            [:p.license-label "Licensa IMT"]
            [:p.lices (:nec imt-profile)]
            [:p "Fonte dos Dados:" [:a {:href (:imt-href imt-profile)} "IMT"]]]
           [:div.six.columns
            [:div#map-solo {:lat lat :long long}]]]
          [:div.row
           [:div.six.columns
            [:div.driving
             (svg/pop-up-svg (svg/parse-d-smart rates :d year-selector) (count year-selector))]]
           [:div.six.columns
            [:div.theory
             (svg/pop-up-svg (svg/parse-d-smart rates nil year-selector) (count year-selector))]]]
          [:div.row.description
           [:p.label "This is a label that explain the charts above. " [:span.driving "This is for driving"] " While, " [:span.theory "This other is for theory" " Everything looks amazing."] ]]]]]])]))
