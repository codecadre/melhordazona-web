(ns bb-passrates.frontend.autocomplete
  (:require [clojure.string :as clj-str]
            [bb-passrates.shared.places :refer [places]]
            [bb-passrates.shared.main :refer [query-place-list string->keywordize string->keywordize-opt]]
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

(defn dom-build-li [{:keys [school? href name] :as suggestion}]
  (let [li (.createElement js/document "li")
        a (.createElement js/document "a")
        span (.createElement js/document "span")
        type (if school? :school :concelho)]

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

(defn on-key-fn [places ev]
  (let [query-string (when ev (-> ev .-target .-value))
        above-min? (and query-string (> (count query-string) 1))
        suggestion-box (.querySelector js/document ".search-input .autocomplete-box")
        suggestion (when above-min?
                     (query-place-list places query-string))
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

(defn parse-list [list]
  (->> list
       (sort #(compare (str (first %2)) (str (first %1))))
       (map (fn [item]
              (let [school? (-> item first (= :s))
                    concelho? (-> item first (= :c))
                    no-imt-profile? (and school? (-> item last first nil?))
                    name (if school? (nth item 1) (-> item last))
                    search-field (if school?
                                   (string->keywordize-opt (nth item 1) " ")
                                   (string->keywordize-opt (nth item 2) " "))
                    district-key (if school?
                                   (-> item (nth 2) first)
                                   (-> item (nth 1)))
                    concelho-key (cond
                                   no-imt-profile? nil
                                   school? (-> item (nth 2) (nth 1))
                                   :else (-> item last string->keywordize))
                    href (cond
                           (not school?) (gstring/format (copy [:href/municipality lang])
                                                         district-key concelho-key)
                           (and no-imt-profile? school?)
                           (gstring/format (copy [:href/school-nil-concelho lang]) (-> item last last))
                           school?
                           (gstring/format (copy [:href/school lang])
                                           district-key concelho-key (-> item last last)))]
                (hash-map
                 :school? (if school? true false)
                 :concelho? (if concelho? true false)
                 :no-imt-profile? (if no-imt-profile? true false)
                 :name name
                 :search-field search-field
                 :href href))))))

(defn autocomplete-cmp []
  (let [input (.querySelector js/document ".search-wrapper .search-input input")
        back (.querySelector js/document ".search-wrapper .search-input .back")
        parsed-list (parse-list places)]
    (when input
      (do
        (set! (.-disabled input) false)
        (set! (.-onclick back) back-home-fn)
        (set! (.-onfocus input) (partial expand-search-fn input))
        (set! (.-onkeyup input) (partial on-key-fn parsed-list))))))
