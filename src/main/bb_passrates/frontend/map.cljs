(ns bb-passrates.frontend.map
  (:require [oops.core :refer [oget]]))

(def tile-server "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
(def attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors")

(defn make-icon-js []
  (clj->js {:icon (.divIcon js/L (clj->js {:className "custom-marker"}))} ))

(defn make-coord-js [lat long]
  (.latLng  js/L lat long))

(defn solo-map []
  (let [el (.querySelector js/document "#map-solo")]
    (when el
      (let [[lat long]
            [(js/parseFloat (oget el "attributes.lat.value"))
             (js/parseFloat (oget el "attributes.long.value"))]
            map (.. js/L
                    (map "map-solo")
                    (setView (.latLng  js/L (.latLng  js/L lat long)) 13)
                    (setMaxZoom 14))
            coord-js (make-coord-js lat long)
            icon (make-icon-js)]
        (.. js/L
            (tileLayer tile-server (clj->js {:attribution attribution}))
            (addTo map))
        (.. js/L
            (marker coord-js icon)
            (addTo map))))))

(defn set-map []
  (let [el (.querySelector js/document "#map")]
    (when el
      (let [[lat-centre long-centre]
            [(js/parseFloat (oget el "attributes.lat.value"))
             (js/parseFloat (oget el "attributes.long.value"))]
            map (.. js/L
                    (map "map")
                    (setView (.latLng  js/L lat-centre long-centre) 12)
                    (setMaxZoom 14))
            schools (doall (js->clj (.querySelectorAll js/document ".school-card")))]
        (.. js/L
            (tileLayer tile-server (clj->js {:attribution attribution}))
            (addTo map))
        (doseq [el schools]
          (let [lat (oget el "attributes" "?lat.value")
                long (oget el "attributes" "?long.value")
                coord-js (when (and lat long)
                           (make-coord-js lat long))
                icon (make-icon-js)
                popup-html-str (.. el
                                   (querySelector ".pop-up-wrapper")
                                   -outerHTML)
                pop-up (when coord-js
                         (.. js/L
                             popup
                             (setLatLng coord-js)
                             (setContent popup-html-str)))
                marker (when coord-js
                         (.. js/L
                             (marker coord-js icon)
                             (bindPopup pop-up)
                             (addTo map)))]
            (when coord-js (.on marker "click" (fn [e]
                                   (this-as this
                                     (.. this
                                         openPopup)))))))))))
