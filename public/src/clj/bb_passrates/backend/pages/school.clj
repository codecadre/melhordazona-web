(ns bb-passrates.backend.pages.school
  (:require [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]
            [bb-passrates.shared.main :refer [get-place-list string->keywordize
                                              address->human]]
            [bb-passrates.shared.copy :refer [copy copy-m]]
            [bb-passrates.backend.pages.breadcrumbs :refer [breadcrumbs no-info-breadcrumbs]]
            [bb-passrates.backend.util :as util]))

(def config
  (merge
   (-> "config_files/config.edn" slurp edn/read-string)
   (-> "config_files/secrets.edn" slurp edn/read-string)))


;;TODO after copy
;;link this to methodology instead
(def taxa-aprovacao-href
  "https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx")

(def esri-href
  "https://www.esri.com/en-us/arcgis/products/arcgis-platform/services/geocoding-search")

(defn content [lang {:keys [name concelho] :as imt-profile}]
  {:title (format (copy [:school/meta-title lang]) name)
   :subtitle (format (copy [:meta/subtitle-school lang]) name (or concelho "sem morada no IMT"))})

(defn school-data [{:keys [district concelho school] :as req}]
  (try
    (if district
      (-> (format "./data/escola-%s-%s-%s.edn" district  concelho school) slurp edn/read-string)
      (-> (format "./data/escola-nil-%s.edn" #_"autopropostos-apec-03004" school) slurp edn/read-string))
    (catch Exception e '())))

(def year-selector
  #{"2015" "2016" "2017" "2018" "2019" "2020"})

(defn page [url-map {:keys [nec rates geocode imt-profile] :as school}]
  (let [lang (:lang url-map)
        lat (:y geocode)
        long (:x geocode)
        concelho (:concelho imt-profile)
        concelho-key (if concelho (string->keywordize concelho) "no-info")
        district (:distrito imt-profile)
        district-key (if district (string->keywordize district) "no-info")
        name (:name imt-profile)
        archived? (boolean (and imt-profile (:archived-last-seen-at imt-profile)))
        last-seen-at (when archived? (:archived-last-seen-at imt-profile))]
    (into
     [:html {:lang (clojure.core/name lang)}]
     (tmp/header
      (merge (content lang imt-profile) url-map)
      [:main
       [:div.solo-school
        [:div.container
         [:div.row
          [:p.label (copy [:school/title lang])]
          (cond archived?

                [:h4.name.archived-school (str (:name imt-profile) " " (copy-m :archived))]
                imt-profile [:h4.name (:name imt-profile)]
                :else [:h4.name (-> rates first :r/name-raw address->human)])

          (if imt-profile
            (breadcrumbs {:district district
                          :district-key district-key
                          :concelho concelho
                          :concelho-key concelho-key
                          :school-name name} lang)
            (no-info-breadcrumbs {:school-name (-> rates first :r/name-raw address->human)} lang))
          [:div.row
           (when imt-profile
             [:div.six.columns
              [:p.label (copy [:list/scard-license lang])]
              [:p.field (:nec imt-profile)]
              [:p.label (copy [:list/scard-address lang])]
              [:p.field (:address imt-profile)]
              [:p.label (copy [:concelho lang])]
              [:p.field (:concelho imt-profile)]
              [:p.label (copy [:cp7 lang])]
              [:p.field (:cp7 imt-profile)]
              (if archived?
                [:p.source (format (copy-m :archived-long) (util/->dd-yy-year last-seen-at))]
                [:p.source (copy [:list/pop-up-source lang]) [:a {:href (:imt-href imt-profile)} "IMT"]])
              [:p.label (copy [:school/coords lang])]
              (if lat
                [:p.field lat " " long]
                [:p.field.no-coord (copy [:no-data lang])])
              [:p.source (copy [:list/pop-up-source lang]) [:a {:href esri-href} "ESRI"]]])
           (when geocode
             [:div.six.columns
              [:div#map-solo {:lat lat :long long :archived (str archived?)}]])]
          [:div.row
           [:div.six.columns
            [:div.driving
             (svg/pop-up-svg lang (svg/parse-d-smart rates :d year-selector) (count year-selector))]]
           [:div.six.columns
            [:div.theory
             (svg/pop-up-svg lang (svg/parse-d-smart rates nil year-selector) (count year-selector))]
            [:p.source (copy [:list/pop-up-source lang]) [:a {:href taxa-aprovacao-href} "IMT"]]]]
          [:div.row.description
           (let [[one two three four five] (copy [:school/explainer lang])]
             [:p one
              [:span.driving two] three
              [:span.theory four] five])]]]]]
      config))))
