#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.pages.lists
  (:require [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]
            [bb-passrates.shared.main :refer [get-place-list k->human address->human string->keywordize]]
            [bb-passrates.shared.copy :refer [copy]]
            [bb-passrates.backend.pages.breadcrumbs :refer [no-info-breadcrumbs breadcrumbs]]))

;;TODO after copy
;;link this to methodology instead
(def taxa-aprovacao-href
  "https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx")

;;TODO after copy
;;link this to methodology instead
(def esri-href
  "https://www.esri.com/en-us/arcgis/products/arcgis-platform/services/geocoding-search")

(defn school-list [{:keys [district concelho]}]
  (try
    (if district
      (get-place-list :concelho (format "%s-%s" district concelho))
      (get-place-list :concelho "nil"))
    (catch Exception e '())))

(defn content [lang place n]
  {:title (format (copy [:list/meta-title lang]) n place)
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
        href-school (:imt-href imt-profile)
        district (:distrito imt-profile)
        district-key (if district (string->keywordize district) "no-info")
        municipality-key (if concelho (string->keywordize concelho) "no-info")]
    [(keyword (str "div#" k)) {:class "school-card" :lat lat :long long}
     (pop-up k svg imt-profile lang)
     [:h4.name name]
     [:p.label (copy [:list/scard-license lang])]
     [:p.field nec]
     [:p.label  [:span (copy [:list/scard-address lang])] (when (nil? geocode) [:span.no-coord [:sup.strong "†"]])]
     [:p.field (address->human address)]
     [:div.source [:span (copy [:list/pop-up-source lang])] [:a {:href href-school} "IMT"]]
     [:div.ratings
      svg]
     [:div.source [:span (copy [:list/pop-up-source lang])] [:a {:href taxa-aprovacao-href} "IMT"]]
     [:a.ver-mais {:href (format (copy [:href/school lang]) district-key municipality-key k)} (copy [:list/pop-up-more lang])]
     (when (nil? geocode)
       [:div.row
        [:div.column.one-half [:p.no-coord.label "†" #_[:sup ] (copy [:no-coord lang])]]])]))

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
    (when (not (zero? n))
      [(/ (reduce + 0 yy) n)
       (/ (reduce + 0 xx) n)])))

#_(defn centroid- [d]
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

(defn page [{:keys [concelho lang district] :as req} place-list]
  (let [concelho-human (-> place-list first last :imt-profile :concelho)
        district-human (-> place-list first last :imt-profile :distrito)
        [lat long] (centroid- place-list)
        school-cards (->> place-list
                          (map (partial hiccup-school lang))
                          (partition 2 2 nil)
                          (reduce (fn [acc [s1 s2]]
                                    (conj acc [:div.row
                                               [:div.columns.six s1]
                                               [:div.columns.six s2]]))
                                  [:div.list]))]
    (into
     [:html {:lang (name lang)}]
     (tmp/header
      (merge (content lang concelho (count place-list)) req)
      [:main
       [:div.container
        [:h2 (format (copy [:list/h1 lang]) concelho-human)]
        (breadcrumbs {:district district-human
                      :district-key district
                      :concelho concelho-human
                      :concelho-key concelho} lang)
        (let [[one two three] (copy [:list/header-copy lang])]
          [:div
           [:p (format one (count place-list) concelho-human)]
           [:p two]
           (when (and long lat)
             [:p.strong three])])
        (when (and long lat)
          [:div.map-wrapper
           [:div#map {:lat lat :long long}]])
        school-cards]]))))


(defn no-imt-profile [{:keys [lang] :as req}]
  (let [meta {:title (copy [:no-imt-data/title lang])
              :subtitle (copy [:no-imt-data/subtitle lang]) }]
    (into
     [:html {:lang (name lang)}]
     (tmp/header
      (merge meta req)
      [:main
       [:div.container
        [:p "Lista de escolas com taxas de aprovação, mas sem informação sobre morada ou licensa no site do IMT."]
        (no-info-breadcrumbs {} lang)
        [:div
         (->>
          (school-list {})
          (sort #(compare (-> %1 last :rates first :r/name-raw) (-> %2 last :rates first :r/name-raw)))
          (map-indexed
           #(vector :p.no [:a {:href (format (copy [:href/school-nil-concelho lang]) (first %2)) } (str (inc %1) " - " (-> %2 last :rates first :r/name-raw address->human))])))]]]))))


(comment
 (centroid- (-> "data/distrito-lisboa.edn" slurp edn/read-string))

 (let [d (-> "data/concelho-loule.edn" slurp edn/read-string)
       url-map {:uri "/concelhos/loule", :request-method :get, :concelho "loule"}]
   (page url-map d))

 (let [d (-> "data/concelho-loule.edn" slurp edn/read-string)
       url-map {:uri "/concelhos/loule", :request-method :get, :concelho "loule"}]
   (centroid- d)))
