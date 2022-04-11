(ns bb-passrates.frontend.autocomplete
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.places :refer [places]]
            [bb-passrates.shared.main :refer [query-place-list seo lang]]
            [bb-passrates.shared.copy :refer [copy-list]]))

(defn hide-char-limit []
  (let [box (.querySelector js/document ".char-limit")]
    (.classList.remove box "show")
    (.classList.add box "hidden")))

(defn display-char-limit []
  (let [box (.querySelector js/document ".char-limit")]
    (.classList.remove box "hidden")
    (.classList.add box "show")))

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
       (hide-char-limit)
        (dom-show-search-wrapper))

     (do
       (dom-hide-search-wrapper)
       (display-char-limit)))))

(defn autocomplete-cmp []
  (let [input (.querySelector js/document ".search-wrapper .search-input input" )]
    (when input
      (set! (.-onkeyup input) on-key-fn))))
