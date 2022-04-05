(ns bb-passrates.frontend.index
  (:require [bb-passrates.shared.places :refer [places]]
            [bb-passrates.shared.main :refer [query-place-list]]
            [bb-passrates.shared.copy :refer [copy-list]]
            [clojure.string :as clj-str]))

(def lang :pt)

(defn dom-build-li [{:keys [name k search-field] :as suggestion}]
  (let [li (.createElement js/document "li")
        a (.createElement js/document "a")]
    (.setAttribute a "href" k)
    (set! (.-innerText a) name)
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


(defn init []
  (let [input (.querySelector js/document ".search-wrapper .search-input input" )]
    (set! (.-onkeyup input) on-key-fn)))

(-> copy-list :autocomplete/district lang)
