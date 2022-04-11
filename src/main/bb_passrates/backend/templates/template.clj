#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.templates.template)

(def footer
  [:footer
   [:div.container
    [:div.items
     [:div.item [:a {:href "/privacidade/"} [:strong "Privacidade"]]]
     [:div.item [:a {:href "/termos/"} [:strong "Termos e serviços"]]]
     [:div.item [:a {:href "/faq"} [:strong "FAQ"]]]
     [:div.item [:a {:href "/privacidade/"} [:strong "Privacidade"]]]
     [:strong [:span "made by " [:a {:href "/codecadre.ai"} "Codecadre"]]]]]]  )

(def header-c
  [:header
   [:div.container
    [:div.row
     [:div.column.one-half
      [:h2.title
       [:strong
        [:a {:href "/"} "Passa à Primeira"]]]
      [:h5 "O teu guia (não) oficial para as taxas de aprovação do IMT"]]
     [:div.column.one-half
      [:div.menu
       [:div.lang [:span "["] [:span#en "EN"] [:span "/"] [:span#pt.selected "PT"] [:span "]"]]
       [:div.menu-item [:a {:href "/pesquisa/"} [:strong "Pesquisa"]]]
       [:div.menu-item [:a {:href "/acerca/"} [:strong "Acerca"]]]
       [:div.menu-item [:a {:href "/faq"} [:strong "FAQ"]]]
       [:div.menu-item [:a {:href "/privacidade/"} [:strong "Privacidade"]]]]]]]])

(defn header [{:keys [title subtitle] :as content} main]
  [:head
   [:meta {:charset "UTF-8"}]
   [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1" :name "viewport"}]
   [:meta {:name "description" :content subtitle}]
   [:link {:href "/target/css/main.css", :rel "stylesheet"}]
   [:link {:rel "stylesheet" :href "/node_modules/leaflet/dist/leaflet.css" :crossorigin ""}]
   [:script {:src "https://livejs.com/live.js"}]
   [:title title]
   [:body
    header-c
    main
    footer]
   [:script {:src "/target/shadow-builds/public/main/js/main.js"}]
   #_[:script {:src "https://plausible.io/js/plausible.js"
             :async "defer" :data-domain "flaviosousa.co"}]])
