(ns bb-passrates.backend.templates.template
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.main :refer [build-href path->href]]
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
      [:p.top-level-item "Project"]
      [:p.item "FAQ"]
      [:p.item [:a {:href "/"} "Home"]]
      [:p.item "About"]]
     [:div.columns.two
      [:p.top-level-item "Legal"]
      [:p.item "Privacy Policy"]
      [:p.item "Terms of Service"]
      [:p.item "DPA"]]
     [:div.columns.three [:p.top-level-item "Contactos"]
      [:p.item "Direct enquiries to " [:a {:href "mailto:mail@codecadre.ai?subject='Pass a Primeira'" :target "_blank"} "Codecadre email."]]
      [:p.item ""]]
     [:div.columns.five.logo-column
      [:div.logo-div
       [:p.built-by "Passa à Primeira is a project by:"]
       [:div.logo logo]
       [:p.limited "CODECADRE LTD is a " [:a {:target "_blank" :href "https://find-and-update.company-information.service.gov.uk/company/12134880"} "UK registered company."] ]]]]]])


(def pt->en-map
  {"/" "/en/"
   "/sobre/" "/en/about/"})

(def en->pt-map
  (map-invert pt->en-map))

(defn pt->en [path]
  (let [res (get pt->en-map path)]
    (cond
      res res
      (clj-str/includes? path "escola") (str "/en" (clj-str/replace path "escola" "school"))
      (clj-str/includes? path "concelho") (str "/en" (clj-str/replace path "concelho" "municipality")))))

(defn en->pt [path]
  (let [res (get en->pt-map path)]
    (cond
      res res
      (clj-str/includes? path "school") (-> path
                                            (clj-str/replace "/en" "")
                                            (clj-str/replace "school" "escola"))
      (clj-str/includes? path "municipality") (-> path
                                                  (clj-str/replace "/en" "")
                                                  (clj-str/replace "municipality" "concelho")))))

#_(en->pt "/en/school/abc")

(defn header-c [{:keys [lang] :as req}]
  [:header
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
       [(keyword (str "div.menu-item" (when (-> req :uri (= "/")) ".selected")) ) [:a {:href (build-href "/pesquisa/" req)} (copy [:nav/search lang])]]
       [:div.menu-item [:a {:href (build-href "/acerca/" req)} (copy [:nav/about lang])]]
       [:div.menu-item [:a {:href (build-href "/faq/" req)} (copy [:nav/faq lang])]]
       [:div.menu-item [:a {:href (build-href "/privacidade/" req)} (copy [:nav/privacy lang])]]]]]]])

(defn header [{:keys [title subtitle url] :as req} main]
  [:head
   [:meta {:charset "UTF-8"}]
   [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1" :name "viewport"}]
   [:meta {:name "description" :content subtitle}]
   [:link {:href "/public/css/main.css", :rel "stylesheet"}]
   [:link {:rel "stylesheet" :href "/public/vendor/leaflet/leaflet.css" :crossorigin ""}]
   (when local-dev? [:script {:src "https://livejs.com/live.js"}])
   [:title title]
   [:body
    (header-c req)
    main
    (footer req)]
   (if local-dev?
     [:script {:src "/target/shadow-builds/public/main/js/main.js"}]
     [:script {:src "/public/js/main.js"}])

   #_[:script {:src "https://plausible.io/js/plausible.js"
             :async "defer" :data-domain "flaviosousa.co"}]])
