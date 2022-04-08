#!/usr/bin/env /usr/local/bin/bb

(ns styling
  (:require [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [cheshire.core :as json]))

(def content
  {:title "Styling page"
   :subtitle
   (str
    "Page that lists all styles")})

(def svg-code-cadre
  [:svg.logo
  {:viewbox "0 0 114.86 41.92"}
  [:defs [:style ".cls-1{fill:#fff;}"]]
  [:title "Asset 2"]
  [:g#Layer_2
   {:data-name "Layer 2"}
   [:g#Layer_2-2
    {:data-name "Layer 2"}
    [:path.cls-1
     {:d
      "M35.24,0c-7.91,0-11.3,3.26-11.3,9.22s3.39,9.28,11.3,9.28,11.31-3.32,11.31-9.28S43.13,0,35.24,0Zm0,14.62c-4.8,0-6.68-1.7-6.68-5.4s1.85-5.34,6.68-5.34,6.68,1.69,6.68,5.34S40.05,14.62,35.24,14.62Z"}]
    [:path.cls-1
     {:d
      "M61.8.26h-13v18h13c4.65,0,8.73-2.88,8.73-9S66.45.26,61.8.26Zm-1.75,14.1H53.37V4.14h6.68c3.5,0,5.86.74,5.86,5.11S63.55,14.36,60.05,14.36Z"}]
    [:polygon.cls-1
     {:points
      "91.75 14.57 77.36 14.57 77.36 10.92 91.75 10.92 91.75 7.58 77.36 7.58 77.36 3.93 91.75 3.93 91.75 0.26 72.74 0.26 72.74 18.24 91.75 18.24 91.75 14.57"}]
    [:path.cls-1
     {:d
      "M31,23.68l-9.27,18h5.08l1.93-3.83H39.46l1.93,3.83H46.5l-9.3-18Zm-.54,10.71L34.1,27.1l3.64,7.29Z"}]
    [:path.cls-1
     {:d
      "M61.7,23.68H48.65v18H61.7c4.65,0,8.73-2.88,8.73-9S66.35,23.68,61.7,23.68ZM60,37.78H53.27V27.56H60c3.49,0,5.86.74,5.86,5.11S63.44,37.78,60,37.78Z"}]
    [:path.cls-1
     {:d
      "M93.65,30.28c0-4-2.8-6.6-6.89-6.6H72.63v18h4.63v-4.8h7.45l2.9,4.8h5.45l-3.32-5.34A6.13,6.13,0,0,0,93.65,30.28ZM85.48,33H77.26V27.56h8.22c1.39,0,3.54,0,3.54,2.72S86.87,33,85.48,33Z"}]
    [:polygon.cls-1
     {:points
      "114.86 27.35 114.86 23.68 95.85 23.68 95.85 41.66 114.86 41.66 114.86 37.99 100.47 37.99 100.47 34.34 114.86 34.34 114.86 31 100.47 31 100.47 27.35 114.86 27.35"}]
    [:path.cls-1
     {:d
      "M11.3,18.5c5.69,0,9.12-1.74,10.53-5.07l-4.35-1.64c-.85,2-3,2.83-6.18,2.83-4.67,0-6.68-1.7-6.68-5.4s2-5.34,6.68-5.34c3.35,0,5.48.85,6.26,3L21.9,5.18C20.54,1.77,17.08,0,11.3,0,3.39,0,0,3.26,0,9.22S3.39,18.5,11.3,18.5Z"}]
    [:path.cls-1
     {:d
      "M17.48,35.21c-.85,2-3,2.83-6.18,2.83-4.67,0-6.68-1.7-6.68-5.4s2-5.34,6.68-5.34c3.35,0,5.48.86,6.26,3L21.9,28.6c-1.36-3.41-4.82-5.18-10.6-5.18C3.39,23.42,0,26.68,0,32.64s3.39,9.28,11.3,9.28c5.69,0,9.12-1.74,10.53-5.06Z"}]]]])



(def page
  [:html
   (tmp/header
    content
    [:body
     [:h1 "This is a header."]
     [:button#background-color "Purple background"]
     [:p (str "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
              "sed do eiusmod tempor incididunt ut labore et dolore magna"
              "aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
              "ullamco laboris nisi ut aliquip ex ea commodo consequat."
              "Duis aute irure dolor in reprehenderit in voluptate velit esse"
              "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat"
              "cupidatat non proident, sunt in culpa qui officia deserunt mollit"
              "anim id est laborum.")]
     svg-code-cadre
     [:img {:src "/public/img/code-cadre-logo.png"}]]
    )])

(println "Content-type:text/html\r\n")
(println (str (html page)))
