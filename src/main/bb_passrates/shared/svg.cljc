(ns bb-passrates.shared.svg)

(def debug false)

(defn svg [d]
  (let [y2 150
        y3 550
        row-d 45
        text-y 22
        bar-length-nominal 200];;100 % is 200 px
    (into
     [:svg (merge {:width "860", :height "300" } (when debug {:class "border"}))]

     (map (fn [[idx label r-1 r-2]]
            (let [b1-l (int (* bar-length-nominal r-1))
                  b2-l (int (* bar-length-nominal r-2))
                  b1-label (format "%s %s" (int (* 100 r-1)) "%")
                  b2-label (format "%s %s" (int (* 100 r-2)) "%")]
              [:g (merge {:transform (format "translate(0,%s)" (* idx row-d))} (when debug {:class "border"}))
               [:text {:transform "rotate(0)", :y 0, :dy text-y } label]
               [:rect {:class "bar driving", :x y2, :width b1-l, :y "0", :height "30"}]
               [:text {:transform "rotate(0)", :y 0, :dy text-y :x (+ b1-l y2 5) } b1-label]
               [:rect {:class "bar theory", :x y3, :width b2-l, :y "0", :height "30"}]
               [:text {:transform "rotate(0)", :y 0, :dy text-y :x (+ b2-l y3 5) } b2-label]
               ]))
          d))))

(defn parse-d [d]
  (map-indexed (fn [idx {:keys [r/level-0 r/d-rate r/t-rate]}]
                 [idx level-0 d-rate t-rate]) d))
