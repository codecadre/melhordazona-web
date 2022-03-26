(ns tasks.address-import
  (:require [cheshire.core :as json]))

(def d (-> "./data/imtt-2014-all-plus-address-data.json"
           slurp
           (json/parse-string true)))
