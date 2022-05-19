(ns bb-passrates.shared.svg)

(def debug false)


(defn pop-up-svg [d]
  (let [H 100
        bar-length-nominal 100
        x2 40
        x3 (+ bar-length-nominal x2 5)
        W (+ x3 70)
        row-h (int (/ H 4))
        bar-y (int (* row-h 0.85))
        text-y (int (* row-h 0.6))
        top-level-label [[:g {:transform (format "translate(%s,0)" x2)}
                          [:text {:dy text-y} "Aprovação"]]
                         [:g {:transform (format "translate(%s,0)" x3)}
                          [:text {:dy text-y} "N. Exames"]]]]
    (into
       [:svg.pop-up (merge {:viewBox (format "0 0 %s %s" W H)} (when debug {:class "border"}))]

       (reduce
        (fn [acc [idx label r i]]
          (let [bar-length (int (* bar-length-nominal r))
                bar-label (format "%s%s" (int (* 100 r)) "%")
                y (* (inc idx) row-h)]
            (into acc
                  [[:g (merge {:transform (format "translate(0,%s)" y)})
                    [:text {:dy text-y} label]]
                   [:g (merge {:transform (format "translate(%s,%s)" x2 y)})
                    [:rect {:class "bar driving", :width bar-length, :height bar-y}]
                    [:text {:class "bar-label" :dy text-y :x (- bar-length 28)} bar-label]]
                   [:g (merge {:transform (format "translate(%s,%s)" x3 y)})
                    [:text {:dy text-y} i]]])))
        top-level-label d))))

(defn svg [d]
  (let [y2 0
        y3 0
        row-h (int (/ 100 6))
        bar-y (int (* row-h 0.85))
        text-y (int (* row-h 0.6))
        bar-length-nominal 100]
    [(into
      [:svg (merge {:class "year-label" :viewBox "0 0 25 100"} (when debug {:class "border year-label"}))]

      (map (fn [[idx label _ _]]
             [:g (merge {:transform (format "translate(0,%s)" (* idx row-h))} (when debug {:class "border"}))
              [:text {:dy text-y} label]])
           d))
     (into
      [:svg (merge {:class "driving-ratings" :viewBox "0 0 130 100"} (when debug {:class "border driving-ratings"}))]

      (map (fn [[idx _ r1 _]]
             (let [bar-length (int (* bar-length-nominal r1))
                   bar-label (format "%s %s" (int (* 100 r1)) "%")]
               [:g (merge {:transform (format "translate(0,%s)" (* idx row-h))} (when debug {:class "border"}))
                [:rect {:class "bar driving", :width bar-length, :height bar-y}]
                [:text {:dy text-y :x (+ bar-length 5) } bar-label]]))
           d))
     (into
      [:svg (merge {:class "theory-ratings" :viewBox "0 0 130 100"} (when debug {:class "border theory-ratings"}))]

      (map (fn [[idx _ _ r2]]
             (let [bar-length (int (* bar-length-nominal r2))
                   bar-label (format "%s %s" (int (* 100 r2)) "%")]
               [:g (merge {:transform (format "translate(0,%s)" (* idx row-h))} (when debug {:class "border"}))
                [:rect {:class "bar theory", :width bar-length, :height bar-y}]
                [:text {:dy text-y :x (+ bar-length 5) } bar-label]]))
           d))]))

(defn parse-d
  "receives school listing, return list of:
  [idx YEAR d-rating t-rating d-done t-done]"
  [d]
  (map-indexed (fn [idx {:keys [r/level-0 r/d-rate r/t-rate r/d-done r/t-done]}]
                 [idx level-0 d-rate t-rate d-done t-done]) d))

(defn parse-d-min
  "simplified data set only for 3 last years and driving rates
  [idx YEAR d-rating d-done
  "
  [d]
  (->> d
       (filter (fn [{:keys [r/level-0 r/d-rate r/t-rate r/d-done r/t-done]}]
                 (#{"2020" "2019" "2018"} level-0)))
       (map-indexed (fn [idx {:keys [r/level-0 r/d-rate r/t-rate r/d-done r/t-done]}]
                      [idx level-0 d-rate d-done]))))

(comment (parse-d-min (-> d first last :rates))

 (def d (-> "data/concelho-loule.edn" slurp edn/read-string)))
