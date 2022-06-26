(ns bb-passrates.frontend.autocomplete
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.places :refer [places]]
            [bb-passrates.shared.main :refer [query-place-list string->keywordize]]
            [bb-passrates.shared.copy :refer [copy]]
            [goog.string :as gstring]
            [goog.string.format]))

(def lang
  (let [en? (clj-str/includes? (.. js/window -location -href) "/en/")]
    (if en? :en :pt)))

(defn hide-char-limit-div []
  (let [box (.querySelector js/document ".char-limit")]
    (.classList.remove box "show")
    (.classList.add box "hidden")))

(defn display-char-limit-div []
  (let [box (.querySelector js/document ".char-limit")]
    (.classList.remove box "hidden")
    (.classList.add box "show")))

(defn dom-build-li [suggestion]
  (let [li (.createElement js/document "li")
        a (.createElement js/document "a")
        span (.createElement js/document "span")
        type (if (= :s (first suggestion)) :school :concelho)
        school? (= type :school)
        name (if school? (nth suggestion 1) (-> suggestion last))
        district-key (if school?
                       (-> suggestion (nth 2) first)
                       (-> suggestion (nth 1)))
        no-imt-profile? (not district-key)
        concelho-key (cond
                       no-imt-profile? nil
                       school? (-> suggestion (nth 2) (nth 1))
                       :else (-> suggestion last string->keywordize))
        href (cond
               (not school?) (gstring/format (copy [:href/municipality lang])
                                             district-key concelho-key)
               (and no-imt-profile? school?)
               (gstring/format (copy [:href/school-nil-concelho lang]) (-> suggestion last last))
               school?
               (gstring/format (copy [:href/school lang])
                                            district-key concelho-key (-> suggestion last last)))]

    ;;span
    (.classList.add span "suggestion-type")
    (set! (.-innerText span) (copy [type lang]))

    ;;a
    (.setAttribute a "href" href)
    (set! (.-innerText a) name)

    (.appendChild a span)

    (.appendChild li a)
    (.-outerHTML li)))

(defn dom-toggle-search-wrapper
  []
  (let [search-wrapper (.querySelector js/document ".search-wrapper .search-input")]
    (if (.contains (.-classList search-wrapper) "active")
      (.classList.remove search-wrapper "active")
      (.classList.add search-wrapper "active"))))

(defn dom-show-search-wrapper []
  (let [search-wrapper (.querySelector js/document ".search-wrapper .search-input")
        separator (.querySelector js/document ".search-wrapper .mobile-separator")]
    ;;document.querySelector(".mobile-separator").style.opacity = 0
    (set! (.-opacity (.-style separator)) 1)
    (.classList.add search-wrapper "active")))

(defn dom-hide-search-wrapper []
  (let [search-wrapper (.querySelector js/document ".search-wrapper .search-input")
        separator (.querySelector js/document ".search-wrapper .mobile-separator")]
        (set! (.-opacity (.-style separator)) 0)
        (.classList.remove
         search-wrapper "active")))

(defn on-key-fn [ev]
  (let [query-string (when ev (-> ev .-target .-value))
        above-min? (and query-string (> (count query-string) 1))
        suggestion-box (.querySelector js/document ".search-input .autocomplete-box")
        suggestion (when above-min?
                     (->> (query-place-list places query-string)
                          (sort #(compare (str (first %1)) (str (first %2))))))
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
          (zero? (count suggestion)) (dom-hide-search-wrapper))))

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
  (.preventDefault ev)
  (let [html (.querySelector js/document "html")
        input (.querySelector js/document ".search-wrapper .search-input input")]
    (set! (.-value input) "")
    (.onkeyup input nil)
    (.classList.remove html "mobile-overwrite")
    (.classList.remove input "mobile-opacity-zero")))

(defn autocomplete-cmp []
  (let [input (.querySelector js/document ".search-wrapper .search-input input")
        back (.querySelector js/document ".search-wrapper .search-input .back")]
    (when input
      (do
        (set! (.-disabled input) false)
        (set! (.-onclick back) back-home-fn)
        (set! (.-onfocus input) (partial expand-search-fn input))
        (set! (.-onkeyup input) on-key-fn)))))
