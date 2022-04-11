(ns bb-passrates.frontend.index
  (:require [bb-passrates.frontend.lang-toggle]
            [bb-passrates.frontend.autocomplete :refer [autocomplete-cmp]]
            [bb-passrates.frontend.background-color-click-handler :as background-color-btn]
            [bb-passrates.frontend.map :refer [set-map]]
            ["leaflet" :as LEAFLET]))


(defn init []
  (background-color-btn/mount)
  (set-map)
  (autocomplete-cmp))
