(ns bb-passrates.backend.templates.template
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.main :refer [build-href]]
            [bb-passrates.shared.copy :refer [copy]]))

(def env (System/getenv "ENV"))

#_(def env "prod")

(def local-dev?  (= env "DEV_LOCAL"))

(def footer
  [:footer
   [:div.container
    [:div.items
     [:div.item [:a {:href "/privacidade/"} [:strong "Privacidade"]]]
     [:div.item [:a {:href "/termos/"} [:strong "Termos e serviços"]]]
     [:div.item [:a {:href "/faq"} [:strong "FAQ"]]]
     [:div.item [:a {:href "/privacidade/"} [:strong "Privacidade"]]]
     [:strong [:span "made by " [:a {:href "/codecadre.ai"} "Codecadre"]]]]]]  )

(defn header-c [{:keys [url/lang] :as req}]
  (let [lang (keyword lang)]
    [:header
     [:div.container
      [:div.row
       [:div.column.one-half
        [:h2.title
         [:strong
          [:a {:href "/"#_(build-href "/" url)} "Passa à Primeira"]]]
        [:h5 (copy [:header/subtitle lang])
         ]]
       [:div.column.one-half
        [:div.menu
         [:div.lang
          [:span "["]
          [(keyword (str "a#en" (when (= lang :en) ".selected")) ) {:href (build-href "" (assoc req :url/lang "en"))} "EN"]
          [:span "/"]
          [(keyword (str "a#en" (when (or (nil? lang)(= lang :pt)) ".selected")) ) {:href (build-href "" (assoc req :url/lang "pt"))} "PT"] [:span "]"]]
         [:div.menu-item [:a {:href (build-href "/pesquisa/" req)} [:strong "Pesquisa"]]]
         [:div.menu-item [:a {:href (build-href "/acerca/" req)} [:strong "Acerca"]]]
         [:div.menu-item [:a {:href (build-href "/faq/" req)} [:strong "FAQ"]]]
         [:div.menu-item [:a {:href (build-href "/privacidade/" req)} [:strong "Privacidade"]]]]]]]]))

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
    footer]
   (if local-dev?
     [:script {:src "/target/shadow-builds/public/main/js/main.js"}]
     [:script {:src "/public/js/main.js"}])

   #_[:script {:src "https://plausible.io/js/plausible.js"
             :async "defer" :data-domain "flaviosousa.co"}]])
