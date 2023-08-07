(ns util
  (:require [clojure.edn :as edn]
            [babashka.fs :as fs]))

(defn imt-profiles []
  (map #(assoc
         (-> % str slurp edn/read-string)
         :file-name (str %))
       (fs/glob "imt-school-addresses-submodule/parsed-data" "**/*.edn")))

(defn open-edn
  "open edn-file and parse it"
  [filepath]
  (-> filepath
      slurp
      edn/read-string))
