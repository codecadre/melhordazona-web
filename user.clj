(ns user
  ;;requiring classpath is not necessary if the path is configured in bb.edn
  #_(:require [babashka.classpath :as cp]))

#_(cp/add-classpath "src/main/")

(require '[bb-passrates.backend.templates.template :as tmp])
