(ns bb-passrates.backend.config
  (:require [clojure.edn :as edn]))

(def values
  (merge
   (-> "config.edn" slurp edn/read-string)
   (-> "secrets.edn" slurp edn/read-string)))
