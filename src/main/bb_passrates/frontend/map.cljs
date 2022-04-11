(ns bb-passrates.frontend.map)

(defn set-map []
  (let [[lat-centre long-centre]
        (let [el (.querySelector js/document "#map")]
          [(js/parseFloat el.attributes.lat.value)
           (js/parseFloat el.attributes.long.value)])
        map (.setView (.map js/L "map") (.latLng  js/L lat-centre long-centre) 13)
        tile-server "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"]
    (.addTo (.tileLayer js/L tile-server (clj->js {:attribution attribution})) map)
    (-> (.querySelectorAll js/document ".school") js/Array.from
        (.forEach (fn [el]
                    (let [lat (js/parseFloat el.attributes.lat.value)
                          long (js/parseFloat el.attributes.long.value)]
                      (.addTo (.marker js/L (.latLng  js/L lat long)) map)))))))
