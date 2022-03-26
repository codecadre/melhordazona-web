(ns user
  (:require [babashka.classpath :as cp]))

(cp/add-classpath "lib:.")

(require '[lib.template :as tmp])
