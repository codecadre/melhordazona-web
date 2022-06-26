(ns bb-passrates.backend.pages.breadcrumbs
  (:require [bb-passrates.shared.copy :refer [copy]]))

(defn breadcrumbs [{:keys [district district-key concelho concelho-key school-name] :as opt} lang]
  (let [lvl (cond (empty? opt) 1
                  (and (nil? concelho) (nil? school-name)) 2
                  (nil? school-name) 3
                  :else 4)]
    [:p
     [:a {:href (if (= lang :pt) "/" "/en/")} "Home"]
     [:span " > "]
     (if (= 1 lvl)
       [:span (format (copy [:dir/breadcrumb-district-region lang]))]
       [:a {:href (format (copy [:href/district-index lang]))} (format (copy [:dir/breadcrumb-district-region lang]))])
     (when district
       [:span " > "])
     (when district
       (if (= 2 lvl)
         [:span district]
         [:a {:href (format (copy [:href/district lang]) district-key)} district]))
     (when concelho
       [:span " > "])
     (when concelho
       (if (= 3 lvl)
         [:span concelho]
         [:a {:href (format (copy [:href/municipality lang]) district-key concelho-key)} concelho]))
     (when school-name
       [:span " > "])
     (when school-name
       [:span school-name])]))
