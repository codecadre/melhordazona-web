(ns bb-passrates.backend.templates.template
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.main :refer [build-href]]
            [bb-passrates.shared.copy :refer [copy]]
            [bb-passrates.backend.logo :refer [logo]]))

(def env (System/getenv "ENV"))

#_(def env "prod")

(def local-dev?  (= env "DEV_LOCAL"))

(defn home? [{:keys [uri]}]
  (= uri "/"))

(defn footer [{:keys [url/lang] :as req}]
  [:footer
   [:div.container
    [:div.row
     [:div.column.two-thirds
      [:h2.title
       [:strong
        [:a {:href (build-href "/" req)} "Passa à Primeira"]]]
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
     [:div.columns.two [:p.top-level-item "Contactos"]
      [:p.item "mail@codecadre.ai"]]
     [:div.columns.six.logo-column
      [:div.logo-div
       [:p.built-by "Built by"]
       [:div.logo logo]]]]

    #_[:div.items
     [:div.item [:a {:href "/privacidade/"} [:strong "Privacidade"]]]
     [:div.item [:a {:href "/sobre/"} [:strong "sobre"]]]
     [:div.item [:a {:href "/termos/"} [:strong "T&S"]]]
     [:div.item [:a {:href "/faq"} [:strong "FAQ"]]]
     [:div.item [:a {:href "/dpa"} [:strong "DPA"]]]
     [:strong [:span "made by " [:a {:href "https://www.codecadre.ai"} "Codecadre"]]]
     ]]])

(defn header-c [{:keys [url/lang] :as req}]
  (let [lang (keyword lang)]
    [:header
     [:div.container
      [:div.row
       [:div.column.one-half
        [:h2.title
         [:strong
          [:a {:href (build-href "/" req)} "Passa à Primeira"]]]
        [:p.subtitle (copy [:header/subtitle lang])
         ]]
       [:div.column.one-half
        [:div.menu
         [:span " ["]
         [(keyword (str "a#en" (when (= lang :en) ".selected")) ) {:href (build-href "" (assoc req :url/lang "en"))} "EN"]
         [:span "/"]
         [(keyword (str "a#en" (when (or (nil? lang) (= lang :pt)) ".selected")) ) {:href (build-href "" (assoc req :url/lang "pt"))} "PT"]
         [:span "]"]
         [(keyword (str "div.menu-item" (when (-> req :uri (= "/")) ".selected")) ) [:a {:href (build-href "/pesquisa/" req)} (copy [:nav/search lang])]]
         [:div.menu-item [:a {:href (build-href "/acerca/" req)} (copy [:nav/about lang])]]
         [:div.menu-item [:a {:href (build-href "/faq/" req)} (copy [:nav/faq lang])]]
         [:div.menu-item [:a {:href (build-href "/privacidade/" req)} (copy [:nav/privacy lang])]]]]]]]))

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
