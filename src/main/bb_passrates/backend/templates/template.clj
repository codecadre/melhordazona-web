(ns bb-passrates.backend.templates.template
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.main :refer [path->href]]
            [bb-passrates.shared.copy :refer [copy]]
            [bb-passrates.backend.logo :refer [logo]]
            [clojure.set :refer [map-invert]]))

(def env (System/getenv "ENV"))

#_(def env "prod")

(def local-dev?  (= env "DEV_LOCAL"))

(defn footer [{:keys [lang] :as req}]
  [:footer
   [:div.container
    [:div.row
     [:div.column.two-thirds
      [:h2.title
       [:strong
        [:a {:href "/"} "Passa à Primeira"]]]
      (let [[sub-1 sub-2 sub-3] (copy [:footer/subtitle lang])]
        [:p.subtitle
         [:span sub-1]
         [:a {:href "https://www.flaviosousa.co/" } "Flávio Sousa"]
         [:span sub-2]
         [:a {:href "https://www.codecadre.ai/" } "Codecadre"]
         [:span sub-3]])]]
    [:div.row.footer-bottom-row
     [:div.columns.two
      [:p.top-level-item (copy [:project lang])]
      [:p.item [:a {:href "https://github.com/codecadre"} "Open Source"]]
      #_[:p.item "About"]]
     #_[:div.columns.two
      [:p.top-level-item "Legal"]
      [:p.item "Privacy Policy"]
      [:p.item "Terms of Service"]
      [:p.item "DPA"]]
     [:div.columns.three [:p.top-level-item (copy [:footer/contact-title lang])]
      [:p.item (copy [:footer/enquiries lang]) [:a {:href "mailto:passaprimeira@codecadre.ai?subject='Pass a Primeira'" :target "_blank"} "passaprimeira [at] codecadre [.] ai"]]
      [:p.item ""]]
     [:div.columns.five.logo-column
      [:div.logo-div
       [:p.built-by (copy [:footer/by lang])]
       [:div.logo logo]
       [:p.limited "CODECADRE LTD " [:a {:target "_blank" :href "https://find-and-update.company-information.service.gov.uk/company/12134880"} (copy [:footer/is-a lang])]]]]]]])


(def pt->en-map
  {"/" "/en/"
   #_#_"/paginas/acerca/" ""
   #_#_"/paginas/faq-pt/" "/en/pages/faq/"})

(def en->pt-map
  (map-invert pt->en-map))

(defn pt->en [path]
  (let [res (get pt->en-map path)]
    (if res
      res
      (str "/en"
           (cond-> path
             (clj-str/includes? path "escolas") (clj-str/replace "escolas" "schools")
             (clj-str/includes? path "concelhos") (clj-str/replace "concelhos" "municipalities")
             (clj-str/includes? path "distritos-regioes") (clj-str/replace "distritos-regioes" "districts-regions")
             (clj-str/includes? path "sem-info") (clj-str/replace "sem-info" "no-info"))))))

(defn en->pt [path]
  (let [res (get en->pt-map path)]
    (if res
      res
      (->
       (cond-> path
         (clj-str/includes? path "schools") (clj-str/replace "schools" "escolas")
         (clj-str/includes? path "municipalities") (clj-str/replace "municipalities" "concelhos")
         (clj-str/includes? path "districts-regions") (clj-str/replace "districts-regions" "distritos-regioes")
         (clj-str/includes? path "no-info") (clj-str/replace "no-info" "sem-info"))
       (clj-str/replace "/en" "")))))

#_(en->pt "/en/school/abc")

(defn en? [lang] (= :en lang))

(defn header-c [{:keys [lang uri] :as req}]
  (let [pt? (= :pt lang)]
    [:header
     [:div.ribbon (copy [:ribbon lang])]
     [:div.container
      [:div.row
       [:div.column.one-half
        [:h2.title
         [:strong
          [:a {:href (path->href "/" req)} "Passa à Primeira"]]]
        [:p.subtitle (copy [:header/subtitle lang])
         ]]
       [:div.column.one-half
        [:div.menu
         [:span " ["]
         [(if (= lang :en) "a#en.selected" "a#en") {:href (pt->en (:uri req))} "EN"]
         [:span "/"]
         [(if (= lang :pt) "a#en.selected" "a#en") {:href (en->pt (:uri req)) } "PT"]
         [:span "]"]
         [(if  (or (= uri "/en/") (= uri "/")) :div.menu-item.selected :div.menu-item)
          [:a {:href (path->href "/" req)} (copy [:nav/search lang])]]
         [(if  (or (= uri "/en/districts-regions/") (= uri "/distritos-regioes/"))
            :div.menu-item.selected :div.menu-item)
          [:a {:href (copy [:href/district-index lang])} (copy [:nav/dir lang])]]
         [:div.menu-item [:a {:href "/paginas/acerca/"} (copy [:nav/about lang])]]
         #_[:div.menu-item [:a {:href (if pt? "/paginas/faq-pt/" "/en/pages/faq/")} (copy [:nav/faq lang])]]
         #_[:div.menu-item [:a {:href "#"} (copy [:nav/privacy lang])]]]]]]]))

(def domain "https://passaprimeira.xyz")

(defn alternate-hreflang-en [lang uri]
  (let [en-lang? (en? lang)
        en-alternate (pt->en uri)
        alternate? (boolean en-alternate)
        href (if en-lang? (str domain uri) (str domain en-alternate))]
    (when (or alternate? en-lang?)
      [:link {:rel "alternate" :hreflang "en" :href href }])))

(defn alternate-hreflang-pt [lang uri]
  (let [pt-lang? (not (en? lang))
        pt-alternate (en->pt uri)
        alternate? (boolean pt-alternate)
        href (if pt-lang? (str domain uri) (str domain pt-alternate))]
    (when (or alternate? pt-lang?)
      [:link {:rel "alternate" :hreflang "pt" :href href}])))

(defn header [{:keys [title subtitle lang uri] :as req} main]
  [[:head
    [:meta {:charset "UTF-8"}]
    [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1" :name "viewport"}]
    [:meta {:name "description" :content subtitle}]
    [:link {:href "/public/css/main.css", :rel "stylesheet"}]
    [:link {:rel "stylesheet" :href "/public/vendor/leaflet/leaflet.css" :crossorigin ""}]
    (alternate-hreflang-pt lang uri)
    (alternate-hreflang-en lang uri)
    (when local-dev? [:script {:src "https://livejs.com/live.js"}])
    [:title title]]
   [:body
    (header-c req)
    main
    (footer req)]
   (if local-dev?
     [:script {:src "/target/shadow-builds/public/main/js/main.js"}]
     [:script {:src "/public/js/main.js"}])
   (when (not local-dev?)
     [:script {:src "https://plausible.io/js/plausible.js"
               :async "defer" :data-domain "passaprimeira.xyz"}])])
