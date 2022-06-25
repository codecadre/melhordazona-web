(ns bb-passrates.backend.pages.directory
  (:require [bb-passrates.backend.templates.template :as tmp]
            [bb-passrates.shared.main :refer [string->keywordize]]
            [bb-passrates.shared.copy :refer [copy]]
            [clojure.edn :as edn]))

(defn content [lang]
  {:title (copy [:directory/meta-title lang])
   :subtitle (copy [:directory/subtitle lang])})

(defn content-list [lang]
  {:title "..." #_(copy [:directory/meta-title lang])
   :subtitle (copy [:directory/subtitle lang])})

(def districts
  {nil 151,
   "Setúbal" 72,
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
   "Viseu" 54}

  )

(def key->district-human
  {"setubal" "Setúbal",
   "viana-do-castelo" "Viana do Castelo",
   "leiria" "Leiria",
   "santarem" "Santarém",
   "aveiro" "Aveiro",
   "braga" "Braga",
   "evora" "Évora",
   "castelo-branco" "Castelo Branco",
   "porto" "Porto",
   "braganca" "Bragança",
   "faro" "Faro",
   "vila-real" "Vila Real",
   "portalegre" "Portalegre",
   "beja" "Beja",
   "guarda" "Guarda",
   "lisboa" "Lisboa",
   "coimbra" "Coimbra",
   "viseu" "Viseu"})

(defn index [{:keys [lang] :as req}]
  [:html
   (tmp/header
    (merge (content lang) req)
    [:main
       (into [:div.container
              [:h2 (format (copy [:dir/title lang]))]
              [:p [:a {:href (if (= lang :pt) "/" "/en/")} "Home"] (str " > " (format (copy [:dir/breadcrumb-district-region lang])))]]
             (map #(let [district-human (first %)
                         district-key (string->keywordize district-human)
                         href (format (copy [:district-href lang]) district-key)
                         n-school (last %)]
                     [:h5 [:a {:href href} district-human] [:span.opacity35 (str " (" n-school " " (copy [:school lang]) "s)")]])
                  (->> districts
                       (remove #(-> % first nil?))
                       (sort #(compare (first %1) (first %2))))))])])

(defn district-data [k]
  (try
    (-> (str "./data/distrito-" k ".edn") slurp edn/read-string)
    (catch Exception e '())))

(defn list [data {:keys [lang district] :as req}]
  (let [district-name (-> data first last :imt-profile :distrito)
        lists (->> data
                   (group-by #(-> % last :imt-profile :concelho))
                   (map #(vector (first %) (count (last %))))
                   (into [])
                   (sort #(compare (first %1) (first %2))))]
    [:html
     (tmp/header
      (merge (content-list lang) req)
      [:main
       (into [:div.container
              [:h2 (format (copy [:dir/list-title lang]) district-name)]
              [:p
               [:a {:href (if (= lang :pt) "/" "/en/")} "Home"]
               [:span " > "]
               [:a {:href (if (= lang :pt) "/distritos-regions/" "/en/districts-regions/")} (str (format (copy [:dir/breadcrumb-district-region lang])))]
               [:span " > "]
               [:span district-name]
               ]]
             (map #(let [municipality-human (first %)
                         municipality-key (string->keywordize municipality-human)
                         href (format (copy [:municipality-href lang]) district municipality-key)
                         n-school (last %)]
                     [:h5 [:a {:href href} municipality-human] [:span.opacity35 (str " (" n-school " " (copy [:school lang]) "s)")]])
                  lists))])]))
