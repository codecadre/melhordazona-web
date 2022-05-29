#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.pages.lists
  (:require [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]
            [bb-passrates.shared.main :refer [get-place-list k->human address->human]]
            [bb-passrates.shared.copy :refer [copy]]))

;;TODO after copy
;;link this to methodology instead
(def taxa-aprovacao-href
  "https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx")

;;TODO after copy
;;link this to methodology instead
(def esri-href
  "https://www.esri.com/en-us/arcgis/products/arcgis-platform/services/geocoding-search")

(defn school-list [type city]
  (try
    (get-place-list type city)
    (catch Exception e '())))

(defn content [lang place]
  {:title (copy [:meta/title lang])
   :subtitle (format (copy [:meta/subtitle-list lang]) (k->human place))})


(defn pop-up [k svg {:keys [name] :as imt-profile} lang]
  [:div.pop-up-wrapper
   [:h5.name name]
   [:div svg]
   [:div.source [:span (copy [:list/pop-up-source lang])]
    [:a {:href taxa-aprovacao-href} "IMT"]
    [:a {:href esri-href} "ESRI"]]
   [:a.ver-mais {:href (str "#" k)} (copy [:list/pop-up-more lang])]])

(def year-selector
  #{"2018" "2019" "2020"})

(defn hiccup-school [lang [k {:keys [rates geocode imt-profile]}]]
  (let [svg (svg/pop-up-svg lang (svg/parse-d-smart rates :d year-selector) (count year-selector))
        lat (:y geocode)
        long (:x geocode)
        name (:name imt-profile)
        nec (:nec imt-profile)
        address (:address imt-profile)
        concelho (:concelho imt-profile)
        cp7 (:cp7 imt-profile)
        href-school (:imt-href imt-profile)]
    [(keyword (str "div#" k)) {:class "school-card" :lat lat :long long}
     (pop-up k svg imt-profile lang)
     [:h4.name name]
     [:p.label (copy [:list/scard-license lang])]
     [:p.field nec]
     [:p.label (copy [:list/scard-address lang])]
     [:p.field (address->human address)]
     [:div.source [:span (copy [:list/pop-up-source lang])] [:a {:href href-school} "IMT"]]
     [:div.ratings
      svg]
     [:div.source [:span (copy [:list/pop-up-source lang])] [:a {:href taxa-aprovacao-href} "IMT"]]
     [:a.ver-mais {:href (format (copy [:autocomplete/li-href :school lang]) k)} (copy [:list/pop-up-more lang])]]))

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
                (remove nil?))]
    [(/ (+ (apply min yy ) (apply max yy ))  2)
     (/ (+ (apply min xx ) (apply max xx ))  2)]))

(defn page [{:keys [concelho lang] :as req} place-list]
  (let [human (k->human concelho)
        [lat long] (centroid- place-list)
        school-cards (->> place-list
                          (map (partial hiccup-school lang))
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
        [:h2 (format (copy [:list/h1 lang]) human)]
        (let [[one two three] (copy [:list/header-copy lang])]
          [:div
           [:p (format one (count place-list) human)]
           [:p two]
           [:p.strong three]])
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
