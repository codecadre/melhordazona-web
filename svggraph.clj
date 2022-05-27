#!/usr/bin/env /usr/home/codecan/bin/bb

(ns svggraph
  (:require
   [clojure.edn :as edn]
   [bb-passrates.backend.templates.template :as tmp]
   [hiccup2.core :refer [html]]
   [bb-passrates.shared.svg :as svg]))

(def d (-> "data/concelho-loule.edn" slurp edn/read-string))

;;(parse-d (:rates (last (first d))))

(def html-header "Content-type:text/html\r\n")

(def page
  {:page [:html (tmp/header {} [:div
                                (into [:div.full-svg
                                       [:p "full svg"]] (svg/svg (svg/parse-d (:rates (last (first d))))))
                                [:div.pop-up-svg
                                 [:p "pop up svg"]
                                 (svg/pop-up-svg :en (svg/parse-d-min (:rates (last (first d)))))]])]
   :header html-header})

(let [{:keys [page header]} page]
  (println header)
  (println (str (html page))))


(comment (svg/svg (svg/parse-d (:rates (last (first d)))))

 (svg/parse-d (:rates (last (first d))))

 (svg/svg (svg/parse-d (:rates (last (first d)))))
 )
