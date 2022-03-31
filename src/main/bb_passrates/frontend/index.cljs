(ns bb-passrates.frontend.index
  (:require [bb-passrates.shared.places :refer [places]]
            [bb-passrates.shared.main :refer [query-place-list]]))


(defn init []
  (js/console.log "main!")
  (prn (query-place-list places "lis")))
