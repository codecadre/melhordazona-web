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
  (let [query-string (-> ev .-target .-value)
        above-min? (> (count query-string) 1)
        suggestion-box (.querySelector js/document ".search-input .autocomplete-box")
        suggestion (when above-min?
                     (->> (query-place-list places query-string)
                          (sort #(compare (str (:type %1)) (str (:type %2))))))
        results? (not (empty? suggestion))
        li-html (when suggestion
                  (map dom-build-li suggestion))]
    (cond results?
          (do (set! (.-innerHTML suggestion-box) (clj-str/join
                                                  (flatten ["<ul>"
                                                            (interpose "\n" li-html)
                                                            "</ul>"])))
              (hide-char-limit-div)
              (dom-show-search-wrapper))
          (and (not results?) (not above-min?)) (do
                                                  (dom-hide-search-wrapper)
                                                  (display-char-limit-div))
          (zero? (count suggestion)) (do (dom-hide-search-wrapper)))))

(defn sleep [f ms]
  (js/setTimeout f ms))

(defn expand-search-fn [input]
  (let [html (.querySelector js/document "html")
        input (.querySelector js/document ".search-wrapper .search-input input")]
    (.classList.add html "mobile-overwrite")
    (.classList.add input "mobile-opacity-zero")
    (sleep (fn [] (.classList.remove input "mobile-opacity-zero")) 0)))

(defn back-home-fn
  "reverts expand-search-fn"
  [ev]
  (let [html (.querySelector js/document "html")
        input (.querySelector js/document ".search-wrapper .search-input input")]
    (.classList.remove html "mobile-overwrite")
    (.preventDefault ev)
    (.classList.remove input "mobile-opacity-zero")))

(defn autocomplete-cmp []
  (let [input (.querySelector js/document ".search-wrapper .search-input input")
        back (.querySelector js/document ".search-wrapper .search-input .back")]
    (when input
      (do
        (set! (.-onclick back) back-home-fn)
        (set! (.-onfocus input) (partial expand-search-fn input))
        (set! (.-onkeyup input) on-key-fn)))))
