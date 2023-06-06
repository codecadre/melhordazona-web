(ns bb-passrates.backend.config
  (:require [clojure.edn :as edn]))

(def env (System/getenv "ENV"))

(def local-dev?  (= env "DEV_LOCAL"))
