#!/usr/bin/env bb

(ns test-runner)

(require '[clojure.test :as t]
         '[babashka.classpath :as cp])

(cp/add-classpath "src:test")

(require 'main-test)

(def test-results
  (t/run-tests 'main-test))

(let [{:keys [fail error]} test-results]
  (when (pos? (+ fail error))
    (System/exit 1)))
