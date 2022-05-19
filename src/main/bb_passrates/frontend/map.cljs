(ns bb-passrates.frontend.map
  (:require [oops.core :refer [oget]]))


(defn make-icon-js []
  (clj->js {:icon (.divIcon js/L (clj->js {:className "custom-marker"}))} ))

(defn make-coord-js [lat long]
  (.latLng  js/L lat long))

(defn set-map []
  (let [el (.querySelector js/document "#map")]
    (when el
      (let [[lat-centre long-centre]
            [(js/parseFloat (oget el "attributes.lat.value"))
             (js/parseFloat (oget el "attributes.long.value"))]
            map (.setView (.map js/L "map") (.latLng  js/L lat-centre long-centre) 13)
            tile-server "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"]
        (.. js/L
            (tileLayer tile-server (clj->js {:attribution attribution}))
            (addTo map))
        (-> (.querySelectorAll js/document ".school") js/Array.from
            (.forEach (fn [el]
                        (let [lat (oget el "attributes.lat.value")
                              long (oget el "attributes.long.value")
                              coord-js (make-coord-js lat long)
                              icon (make-icon-js)
                              popup-html-str (.. el
                                                 (querySelector ".pop-up-wrapper")
                                                 -outerHTML)
                              pop-up (.. js/L
                                         popup
                                         (setLatLng coord-js)
                                         (setContent popup-html-str))
                              marker (.. js/L
                                         (marker coord-js icon)
                                         (bindPopup pop-up)
                                         (addTo map))]
                          (.on marker "click" (fn [e]

                                                (this-as this
                                                  (.. this
                                                      openPopup))))))))))))
