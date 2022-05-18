(ns bb-passrates.shared.svg)

(def debug false)

(defn svg [d]
  (let [y2 0
        y3 0
        row-h (int (/ 100 6))
        bar-y (int (* row-h 0.85))
        text-y (int (* row-h 0.6))
        bar-length-nominal 100]
    [(into
      [:svg (merge {:class "year-label" :viewBox "0 0 25 100"} (when debug {:class "border"}))]

      (map (fn [[idx label _ _]]
             [:g (merge {:transform (format "translate(0,%s)" (* idx row-h))} (when debug {:class "border"}))
              [:text {:dy text-y} label]])
           d))
     (into
      [:svg (merge {:class "driving-ratings" :viewBox "0 0 130 100"} (when debug {:class "border"}))]

      (map (fn [[idx _ r1 _]]
             (let [bar-length (int (* bar-length-nominal r1))
                   bar-label (format "%s %s" (int (* 100 r1)) "%")]
               [:g (merge {:transform (format "translate(0,%s)" (* idx row-h))} (when debug {:class "border"}))
                [:rect {:class "bar driving", :width bar-length, :height bar-y}]
                [:text {:dy text-y :x (+ bar-length 5) } bar-label]]))
           d))
     (into
      [:svg (merge {:class "theory-ratings" :viewBox "0 0 130 100"} (when debug {:class "border"}))]

      (map (fn [[idx _ _ r2]]
             (let [bar-length (int (* bar-length-nominal r2))
                   bar-label (format "%s %s" (int (* 100 r2)) "%")]
               [:g (merge {:transform (format "translate(0,%s)" (* idx row-h))} (when debug {:class "border"}))
                [:rect {:class "bar theory", :width bar-length, :height bar-y}]
                [:text {:dy text-y :x (+ bar-length 5) } bar-label]]))
           d))]))

(defn parse-d [d]
  (map-indexed (fn [idx {:keys [r/level-0 r/d-rate r/t-rate]}]
                 [idx level-0 d-rate t-rate]) d))
