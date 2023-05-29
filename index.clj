#!/usr/bin/env /usr/home/codecan/bin/bb

(ns index
  (:require [bb-passrates.shared.places :as places]
            [bb-passrates.backend.pages.home :as home]
            [bb-passrates.backend.pages.contact :as contact]
            [bb-passrates.backend.pages.404 :as not-found]
            [bb-passrates.backend.pages.lists :as lists]
            [bb-passrates.backend.pages.school :as school]
            [bb-passrates.backend.pages.directory :as directory]
            [hiccup2.core :refer [html]]
            [bb-passrates.shared.main :as main :refer [req-fn]]
            [clojure.core.match :refer [match]]
            [clojure.string :as str]
            [bb-passrates.backend.util :refer [log]]
            [bb-passrates.backend.email :as email]
            [bb-passrates.backend.components :as components]))

(def req (req-fn))

(def html-header "Content-type:text/html\r\n")

(def header-404 "Status: 404 Not Found\nContent-type: text/html\n")

(defn header-301
  [new-url]
  (format "Status: 301 Moved Permanently\nLocation: %s\n" new-url))

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

(defn contact-handler [req]
  {:page (contact/page req)
   :header html-header})

(defn post-contact [{:keys [in] :as req}]
  (let [request-data (main/parse-qs-like-string in)
        from (java.net.URLDecoder/decode (:email-input request-data))
        send-copy (= "on" (:send-copy request-data))
        body (java.net.URLDecoder/decode (:message request-data))
        #_#_ (log from send-copy body)
        success? (email/send-me-the-message from body send-copy)]
    (components/form (assoc req :data request-data) success?)))

(defn post-contact-handler [req]
  {:page (post-contact req)
   :header html-header})

(defn no-info-redirect [{:keys [lang uri]}]
  (let [new-url (str uri (if (= lang :pt) "escolas/" "schools/"))]
    {:header (header-301 new-url)}))

(defn district-redirect [{:keys [lang uri]}]
  (let [new-url (str uri (if (= lang :pt) "concelhos/" "municipalities/"))]
    {:header (header-301 new-url)}))

(defn concelho-redirect [{:keys [lang uri]}]
  (let [new-url (str uri
                     (if (= lang :pt) "escolas/" "schools/"))]
      {:header (header-301 new-url)}))

(def page
  (let [paths (vec (rest (str/split (:uri req) #"/")))]
    (match [(:request-method req) paths]
           [:get ["echo" id]] (echo-handler (assoc req :id id))

           [:get []] (home-handler req)
           [:get ["en"]] (home-handler req)

           [:get ["contato"]] (contact-handler req)
           ;;[:get ["en" "contact"]] (contact-handler req)

           [:post ["post-contact"]] (post-contact-handler req)
           [:post ["en" "post-contact"]] (post-contact-handler req)

           [:get ["distritos-regioes" "sem-info"]] (no-info-redirect req)
           [:get ["distritos-regioes" "sem-info" "escolas"]] (no-imt-profile-handler req)

           [:get ["en" "districts-regions" "no-info"]] (no-info-redirect req)
           [:get ["en" "districts-regions" "no-info" "schools"]] (no-imt-profile-handler req)

           [:get ["distritos-regioes" "sem-info" "escolas" school]] (escola-handler (assoc req :school school))
           [:get ["en" "districts-regions" "no-info" "schools" school]] (escola-handler (assoc req :school school))

           [:get ["distritos-regioes"]] (district-index-handler req)
           [:get ["en" "districts-regions"]] (district-index-handler req)

           [:get ["distritos-regioes" district]] (district-redirect req)
           [:get ["distritos-regioes" district "concelhos"]] (district-list-handler (assoc req :district district))

           [:get ["en" "districts-regions" district]] (district-redirect req)
           [:get ["en" "districts-regions" district "municipalities"]] (district-list-handler (assoc req :district district))

           [:get ["distritos-regioes" district "concelhos" concelho]] (concelho-redirect (assoc req :concelho concelho :district district))
           [:get ["distritos-regioes" district "concelhos" concelho "escolas"]] (concelho-handler (assoc req :concelho concelho :district district))

           [:get ["en" "districts-regions" district "municipalities" concelho]] (concelho-redirect req)
           [:get ["en" "districts-regions" district "municipalities" concelho "schools"]] (concelho-handler (assoc req :concelho concelho :district district))

           [:get ["distritos-regioes" district "concelhos" concelho "escolas" escola]] (escola-handler (assoc req :school escola :concelho concelho :district district))
           [:get ["en" "districts-regions" district "municipalities" concelho "schools" escola]] (escola-handler (assoc req :school escola :concelho concelho :district district))

           :else {:page (not-found/page)
                  :header header-404})))

(let [{:keys [page header]} page]
  (println header)
  (println (str "<!DOCTYPE html>\n" (html page))))
