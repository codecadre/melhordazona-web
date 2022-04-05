#!/usr/bin/env /usr/local/bin/bb

(ns bb-passrates.backend.templates.template)

(defn header [{:keys [title subtitle] :as content} body]
  [:head
   [:meta {:charset "UTF-8"}]
   [:meta {:content "width=device-width, initial-scale=1, maximum-scale=1" :name "viewport"}]
   [:meta {:name "description" :content subtitle}]
   [:link {:href "/target/css/main.css", :rel "stylesheet"}]
   [:script {:src "https://livejs.com/live.js"}]
   [:title title]
   body
   [:script {:src "/target/shadow-builds/public/main/js/main.js"}]
   #_[:script {:src "https://plausible.io/js/plausible.js"
             :async "defer" :data-domain "flaviosousa.co"}]])
