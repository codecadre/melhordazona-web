(ns user
  (:require [bb-passrates.backend.templates.template :as tmp]
            [clojure.string :as clj-str]))


(def d (-> "./data/imtt-2014-all-plus-address-data.json"
           slurp
           (json/parse-string true)))



(comment
  (require '[babashka.pods :as pods])
  (pods/load-pod 'org.babashka/fswatcher "0.0.2")

  (require '[pod.babashka.fswatcher :as fw])

  (require '[babashka.process :refer [process check]])

  #_(def watcher (fw/watch "less" (fn [event]
                                    (let [{:keys [err out]} (-> (process '[sh -c "lessc less/main.less css/main.css"]))
                                          err (slurp err)
                                          out (slurp out)]
                                      (when (not (empty? err)) (prn (slurp err)))
                                      (when (not (empty? out)) (prn (slurp out)))))))
  #_(fw/unwatch watcher)

  (-> (process ["lessc less/main.less css/main.css"] {:out :string}) check :out str/split-lines first)

  (-> (process '[echo $PWD] {:out :string}) check :out slurp)

  (-> (process '[sh -c "echo $PWD"]) check :out slurp))

(def d (-> "./data/city-lisboa.edn"
           slurp
           edn/read-string))



(take 30 (->> d (filter #(= "Lisboa" (-> % :address :city ))) ))


(def sitemap (-> "./sitemap.txt" slurp clj-str/split-lines set))

(def indexed (-> "./indexed.txt" slurp clj-str/split-lines set))

(def not-indexed (clojure.set/difference sitemap indexed))

(spit "to-index.txt" (clj-str/join "\n" (sort-by #(-> % (clj-str/split #"/") count) not-indexed)))
