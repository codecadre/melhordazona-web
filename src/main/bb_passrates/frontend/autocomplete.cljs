(ns bb-passrates.frontend.autocomplete
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.places :refer [places]]
            [bb-passrates.shared.main :refer [query-place-list seo lang]]
            [bb-passrates.shared.copy :refer [copy-list]]))

(defn hide-char-limit-div []
  (let [box (.querySelector js/document ".char-limit")]
    (.classList.remove box "show")
    (.classList.add box "hidden")))

(defn display-char-limit-div []
  (let [box (.querySelector js/document ".char-limit")]
    (.classList.remove box "hidden")
    (.classList.add box "show")))

(defn dom-build-li [{:keys [type name k search-field href] :as suggestion}]
  (let [li (.createElement js/document "li")
        a (.createElement js/document "a")
        label type #_(get-in copy-list [(keyword "autocomplete" type) lang])]
    (.setAttribute a "href" href)
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
            suggestion (->> (query-place-list places query-string)
                            (sort #(compare (str (:type %1)) (str (:type %2)))))
            li-html (map dom-build-li suggestion)]

        (set! (.-innerHTML suggestion-box) (clj-str/join
                                            (flatten ["<ul>"
                                                      (interpose "\n" li-html)
                                                      "</ul>"])))
       (hide-char-limit-div)
       (dom-show-search-wrapper))

     (do
       (dom-hide-search-wrapper)
       (display-char-limit-div)))))

(defn sleep [f ms]
  (js/setTimeout f ms))

(defn expand-search-fn [input]
  (let [header (.querySelector js/document "header")
        footer (.querySelector js/document "footer")
        cta (.querySelector js/document ".cta")
        sub-cta (.querySelector js/document ".sub-cta")
        back (.querySelector js/document ".back")
        input (.querySelector js/document ".search-wrapper .search-input input")
        separator (.querySelector js/document ".mobile-separator")]
    (.classList.add separator "mobile-show")
    (.classList.add back "mobile-show")
    (.classList.add input "mobile-opacity-zero")
    (.classList.add input "input-mobile-overwrite")
    (sleep (fn [] (.classList.remove input "mobile-opacity-zero")) 0)
    (.classList.add footer "mobile-hidden")
    (.classList.add header "mobile-hidden")
    (.classList.add cta "mobile-hidden")
    (.classList.add sub-cta "mobile-hidden")))

(defn back-home-fn
  "reverts expand-search-fn"
  [ev]
  (let [header (.querySelector js/document "header")
        footer (.querySelector js/document "footer")
        cta (.querySelector js/document ".cta")
        sub-cta (.querySelector js/document ".sub-cta")
        back (.querySelector js/document ".back")
        input (.querySelector js/document ".search-wrapper .search-input input")
        separator (.querySelector js/document ".mobile-separator")]
    (.classList.remove separator "mobile-show")
    (.preventDefault ev)
    (.classList.remove back "mobile-show")
    (.classList.remove input "mobile-opacity-zero")
    (.classList.remove input "input-mobile-overwrite")
    (.classList.remove footer "mobile-hidden")
    (.classList.remove header "mobile-hidden")
    (.classList.remove cta "mobile-hidden")
    (.classList.remove sub-cta "mobile-hidden")))

(defn autocomplete-cmp []
  (let [input (.querySelector js/document ".search-wrapper .search-input input")
        back (.querySelector js/document ".search-wrapper .search-input .back")]
    (when input
      (do
        (set! (.-onclick back) back-home-fn)
        (set! (.-onfocus input) (partial expand-search-fn input))
        (set! (.-onkeyup input) on-key-fn)))))
