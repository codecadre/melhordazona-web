(ns bb-passrates.backend.pages.directory
  (:require [bb-passrates.backend.templates.template :as tmp]
            [clojure.edn :as edn]
            [bb-passrates.shared.svg :as svg]
            [bb-passrates.shared.main :refer [string->keywordize]]
            [bb-passrates.shared.copy :refer [copy]]))

(defn content [lang]
  {:title (copy [:directory/meta-title lang])
   :subtitle (copy [:directory/subtitle lang])})

(def districts
  [["Setúbal" 72]
   ["Évora" 20]
   ["Portalegre" 12]
   ["Braga" 104]
   ["Coimbra" 48]
   ["Viana do Castelo" 31]
   ["Porto" 203]
   ["Leiria" 66]
   ["Faro" 54]
   ["Bragança" 12]
   ["Castelo Branco" 26]
   ["Santarém" 49]
   ["Beja" 18]
   ["Lisboa" 177]
   ["Vila Real" 33]
   ["Guarda" 22]
   ["Aveiro" 73]
   ["Viseu" 54]])

(defn index [{:keys [lang] :as req}]
  [:html
   (tmp/header
    (merge (content lang) req)
    [:main
     (into [:div.container
            [:h2 (format (copy [:dir/title lang]))]
            [:p [:a {:href (if (= lang :pt) "/" "/en/")} "Home"] (str " > " (format (copy [:distrito lang]))) "s"]]
           (map #(let [district-human (first %)
                       district-key (string->keywordize district-human)
                       href (format (copy [:district-href lang]) district-key)
                       n-school (last %)]
                   [:h5 [:a {:href href} district-human] [:span.opacity35 (str " (" n-school " " (copy [:school lang]) "s)")]]) (sort #(compare (first %1) (first %2)) districts)))])])
