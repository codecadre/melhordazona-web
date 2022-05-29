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
            map (.setView (.map js/L "map-solo") (.latLng  js/L lat long) 13)
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
                    (setMaxZoom 14))]
        (.. js/L
            (tileLayer tile-server (clj->js {:attribution attribution}))
            (addTo map))
        (-> (.querySelectorAll js/document ".school-card")
            js/Array.from
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
