(ns bb-passrates.backend.pages.directory
  (:require [bb-passrates.backend.templates.template :as tmp]
            [bb-passrates.shared.main :refer [get-place-list string->keywordize]]
            [bb-passrates.shared.copy :refer [copy]]
            [clojure.edn :as edn]
            [bb-passrates.backend.pages.breadcrumbs :refer [breadcrumbs]]))

(defn content [lang]
  {:title (copy [:directory/meta-title lang])
   :subtitle (copy [:directory/subtitle lang])})

(defn content-list [lang district-human]
  {:title (format (copy [:directory-list/meta-title lang]) district-human)
   :subtitle (format (copy [:directory-list/subtitle lang]) district-human)})

(def districts
  {"Setúbal" 72,
   "Évora" 20,
   "Portalegre" 12,
   "Braga" 104,
   "Coimbra" 48,
   "Viana do Castelo" 31,
   "Porto" 203,
   "Leiria" 66,
   "Faro" 54,
   "Bragança" 12,
   "Castelo Branco" 26,
   "Santarém" 49,
   "Beja" 18,
   "Lisboa" 177,
   "Vila Real" 33,
   "Guarda" 22,
   "Aveiro" 73,
   "Viseu" 54
   nil 151})

(defn index [{:keys [lang] :as req}]
  (let [h (->> districts
               (remove #(-> % first nil?))
               (sort (fn [[one _] [two _]]
                       (compare one two)))
               (map (fn [[district-human n-school]]
                      (let [district-key (string->keywordize district-human)
                            href (format (copy [:href/district lang]) district-key)
                            district-label (str " (" n-school " " (copy [:school lang]) "s)")]
                        [:h5 [:a {:href href} district-human] [:span.opacity35 district-label]])))
               (into [:div.container
                      [:h2 (format (copy [:dir/title lang]))]
                      (breadcrumbs {} lang)]))]
    (into
     [:html {:lang (name lang)}]
     (tmp/header
      (merge (content lang) req)
      [:main
       (into h [[:h5 [:a {:href (copy [:href/nil-concelho lang])} (copy [:no-district lang])]
                 [:span.opacity35 (str " (" (get districts nil) " " (copy [:school lang]) "s)")]]])]))))

(defn district-data [k]
  (try
    (get-place-list :distrito k)
    (catch Exception e '())))

(defn list [data {:keys [lang district] :as req}]
  (let [district-name (-> data first last :imt-profile :distrito)
        lists (->> data
                   (group-by #(-> % last :imt-profile :concelho))
                   (map #(vector (first %) (count (last %))))
                   (into [])
                   (sort #(compare (first %1) (first %2))))
        title (format (copy [:dir/list-title lang]) district-name)]
    (into
     [:html {:lang (name lang)}]
     (tmp/header
      (merge (content-list lang district-name) req)
      [:main
       (->> lists
            (map #(let [municipality-human (first %)
                        municipality-key (string->keywordize municipality-human)
                        href (format (copy [:href/municipality lang]) district municipality-key)
                        n-school (last %)
                        label (str " (" n-school " " (copy [:school lang]) "s)")]
                    [:h5 [:a {:href href} municipality-human] [:span.opacity35 label]]))
            (into
             [:div.container
              [:h2 title]
              (breadcrumbs {:district district-name :district-key district} lang)]))]))))
