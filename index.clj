#!/usr/bin/env /usr/home/codecan/bin/bb

(ns index
  (:require [bb-passrates.shared.places :as places]
            [bb-passrates.backend.pages.home :as home]
            [bb-passrates.backend.pages.404 :as not-found]
            [bb-passrates.backend.pages.lists :as lists]
            [bb-passrates.backend.pages.school :as school]
            [bb-passrates.backend.pages.directory :as directory]
            [hiccup2.core :refer [html]]
            [bb-passrates.shared.main :refer [req-fn]]
            [clojure.core.match :refer [match]]
            [clojure.string :as str]))
(def req (req-fn))

(def html-header "Content-type:text/html\r\n")

(def header-404 "Status: 404 Not Found\nContent-type: text/html\n")

(def resp-404
  {:header header-404
   :page (not-found/page)})


(defn no-imt-profile-handler [req]
  {:page (lists/no-imt-profile req)
   :header html-header})

(defn concelho-handler [{:keys [concelho district] :as req}]
  (let [schools (lists/school-list {:district district :concelho concelho})]
    (if (empty? schools)
      resp-404
      {:page (lists/page req schools)
       :header html-header})))

(defn escola-handler [req]
  (let [school (school/school-data req)]
    (if (empty? school)
      resp-404
      {:page (school/page req school)
       :header html-header})))

(defn echo-handler [req]
  {:page [:html
          [:h1 "echo!"]
          [:p (str req)]]
   :header html-header})

(defn home-handler [req]
  {:page (home/page req)
   :header html-header})

(defn district-index-handler [req]
  {:page (directory/index req)
   :header html-header})

(defn district-list-handler [req]
  (let [district (directory/district-data (:district req))]
    (if (empty? district)
      resp-404
      {:page (directory/list district req)
       :header html-header})))

(def page
  (let [paths (vec (rest (str/split (:uri req) #"/")))]
    (match [(:request-method req) paths]
           [:get ["echo" id]] (echo-handler (assoc req :id id))
           [:get []] (home-handler req)
           [:get ["en"]] (home-handler req)
           ;;TODO deprecate from here
           [:get ["concelhos" concelho]] (concelho-handler (assoc req :concelho concelho))
           [:get ["en" "municipalities" concelho]] (concelho-handler (assoc req :concelho concelho))
           [:get ["escolas" escola]] (escola-handler (assoc req :school escola))
           [:get ["en" "schools" escola]] (escola-handler (assoc req :school escola))
           ;;TODO deprecate till here
           [:get ["escola-sem-morada-imt"]] (no-imt-profile-handler req)

           [:get ["distritos-regioes"]] (district-index-handler req)
           [:get ["en" "districts-regions"]] (district-index-handler req)

           [:get ["distritos-regioes" district]] (district-list-handler (assoc req :district district))
           [:get ["en" "districts-regions" district]] (district-list-handler (assoc req :district district))

           [:get ["distritos-regioes" district "concelhos" concelho]] (concelho-handler (assoc req :concelho concelho :district district))
           [:get ["en" "districts" district "municipalities" concelho]] (concelho-handler (assoc req :concelho concelho :district district))

           [:get ["distritos-regioes" district "concelhos" concelho "escolas" escola]] (escola-handler (assoc req :school escola :concelho concelho :district district))
           [:get ["en" "districts-regions" district "municipalities" concelho "school" escola]] (escola-handler (assoc req :school escola :concelho concelho :district district))


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
