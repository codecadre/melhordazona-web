(ns bb-passrates.shadow-repl
  (:require
   [shadow.cljs.devtools.server :as server]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.cli]))


(defn watch-main []
  (shadow/watch :main {:verbose true}))

(defn stop-main []
  (shadow/stop-worker :main))

(defn release-main []
  (shadow/release :main {:verbose true}))


(defn compile-main []
  (shadow/compile :main {:verbose true}))

(defn cljs-repl
  ([]
   (cljs-repl :app-with-login))
  ([build-id]
   (shadow/watch build-id {:verbose true})
   (shadow/nrepl-select build-id)))

(server/start!)

(comment
  (watch-main)
  (release-main)
  (shadow/nrepl-select :main)
  (stop-main)

  (compile-main)
  (shadow/nrepl-select :workspaces)
  )
