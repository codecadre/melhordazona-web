#!/usr/bin/env /usr/home/codecan/bin/bb

(ns index
  (:require [bb-passrates.shared.places :as places]
            [bb-passrates.backend.pages.home :as home]
            [bb-passrates.backend.pages.404 :as not-found]
            [bb-passrates.backend.pages.lists :as lists]
            [hiccup2.core :refer [html]]
            [bb-passrates.shared.main :refer [req]]
            [clojure.core.match :refer [match]]
            [clojure.string :as str]))

(def html-header "Content-type:text/html\r\n")

(def header-404 "Status: 404 Not Found\nContent-type: text/html\n")

(def resp-404
  {:header header-404
   :page (not-found/page)})


(defn cities-handler [req]
  (let [schools (lists/school-list "city" (:city req))]
    (if (empty? schools)
      resp-404
      {:page (lists/page req schools)
       :header html-header})))

(defn concelho-handler [req]
  (let [schools (lists/school-list :concelho (:concelho req))]
    (if (empty? schools)
      resp-404
      {:page (lists/page req schools)
       :header html-header})))

(defn district-handler [req]
  (let [schools (lists/school-list "district" (:district req))]
    (if (empty? schools)
      resp-404
      {:page (lists/page req schools)
       :header html-header})))

(defn echo-handler [req]
  {:page [:html
          [:h1 "echo!"]
          [:p (str req)]]
   :header html-header})

(defn home-handler [req]
  {:page (home/page req)
   :header html-header})

(def page
  (let [paths (vec (rest (str/split (:uri req) #"/")))]
    (match [(:request-method req) paths]
           [:get ["echo" id]] (echo-handler (assoc req :id id))
           [:get []] (home-handler req)
           [:get ["concelhos" concelho]] (concelho-handler (assoc req :concelho concelho))
           ;;district has data issues
           #_#_[:get ["distritos" distrito]] (district-handler (assoc req :district distrito))
           :else {:page (not-found/page)
                  :header header-404})))

#_(def page
  (condp apply [(:url/type url-map)]
    #{:city :district :municipality}
    (let [place-list (lists/school-list url-map)]
      (if (empty? place-list)
        {:header header-404
         :page (not-found/page)}
        {:header html-header
         :page (lists/page url-map place-list)}))
    #_#_:school {:header html-header
                 :page (home/page url-map)}
    #{:home} {:header html-header
              :page (home/page url-map)}
    {:header header-404
     :page (not-found/page)}))

(let [{:keys [page header]} page]
  (println header)
  (println (str (html page))))
