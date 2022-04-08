(ns bb-passrates.frontend.background-color-click-handler)

(defn mount []
  (let [btn (.getElementById js/document "background-color")]
    (when btn
      (.addEventListener btn "click"
                         (fn [_]
                           (set! (.-background
                                  (.-style
                                   (.-body js/document))) "#644bff"))))))
