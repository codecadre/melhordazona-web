(ns bb-passrates.frontend.map
  (:require [oops.core :refer [oget]]))

(defn set-map []
  (let [el (.querySelector js/document "#map")]
    (when el
      (let [[lat-centre long-centre]
            [(js/parseFloat (oget el "attributes.lat.value"))
             (js/parseFloat (oget el "attributes.long.value"))]
            map (.setView (.map js/L "map") (.latLng  js/L lat-centre long-centre) 13)
            tile-server "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"]
        (.addTo (.tileLayer js/L tile-server (clj->js {:attribution attribution})) map)
        (-> (.querySelectorAll js/document ".school") js/Array.from
            (.forEach (fn [el]
                        (let [lat (oget el "attributes.lat.value")
                              long (oget el "attributes.long.value")]
                          (.addTo (.marker js/L (.latLng  js/L lat long)) map)))))))))
