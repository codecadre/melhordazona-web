(ns bb-passrates.frontend.index
  (:require [bb-passrates.shared.places :refer [places]]
            [bb-passrates.shared.main :refer [query-place-list seo lang]]
            [bb-passrates.shared.copy :refer [copy-list]]
            [clojure.string :as clj-str]
            ["leaflet" :as LEAFLET]))



(defn dom-build-li [{:keys [name k search-field] :as suggestion}]
  (let [li (.createElement js/document "li")
        a (.createElement js/document "a")
        type (-> k namespace)
        label (get-in copy-list [(keyword "autocomplete" type) lang])]
    (.setAttribute a "href" (str "/" (get seo type) "/" (clojure.core/name k)))
    (set! (.-innerText a) (str name " (" label ")"))
    (.appendChild li a)
    (.-outerHTML li)))

(defn dom-toggle-search-wrapper
  []
  (let [search-wrapper (.querySelector js/document ".search-wrapper .search-input")]
    (if (.contains (.-classList search-wrapper) "active")
      (.classList.remove search-wrapper "active")
      (.classList.add search-wrapper "active"))))

(defn dom-show-search-wrapper []
  (let [search-wrapper (.querySelector js/document ".search-wrapper .search-input")]
    (.classList.add search-wrapper "active")))

(defn dom-hide-search-wrapper []
  (let [search-wrapper (.querySelector js/document ".search-wrapper .search-input")]
    (.classList.remove search-wrapper "active")))

(defn on-key-fn [ev]
  (let [query-string (-> ev .-target .-value)]
    (if (> (count query-string) 1)

     (let [suggestion-box (.querySelector js/document ".search-input .autocomplete-box")
            li-html (map dom-build-li (query-place-list places query-string))]

        (set! (.-innerHTML suggestion-box) (clj-str/join (interpose "\n" li-html)))
        (dom-show-search-wrapper))

      (dom-hide-search-wrapper))))


(defn set-map []
  (let [map (.setView (.map js/L "map") (.latLng  js/L 38.7166700 -9.13333) 13)]
    (.addTo (.tileLayer js/L "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                         {:attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"})
            map)

))

(defn init []
  (let [input (.querySelector js/document ".search-wrapper .search-input input" )]
    (set-map)
    (set! (.-onkeyup input) on-key-fn)))
