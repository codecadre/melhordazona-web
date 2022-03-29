#!/usr/bin/env /usr/local/bin/bb

(ns lib.template)

(defn header [{:keys [title subtitle] :as content}]
  [:head
   [:meta {:charset "UTF-8"}]
   [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1" :name "viewport"}]
   [:meta {:name "description" :content subtitle}]
   [:title title]
   [:script {:src "/target/shadow-builds/public/main/js/main.js"}]
   #_[:link {:href "/assets/css/main.css", :rel "stylesheet"}]
   #_[:script {:src "https://plausible.io/js/plausible.js"
             :async "defer" :data-domain "flaviosousa.co"}]])
