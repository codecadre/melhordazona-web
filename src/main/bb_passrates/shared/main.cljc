(ns bb-passrates.shared.main
  (:require [clojure.string :as clj-str]))

(defn clean-q
  "Allow:
  - alphanumeric
  - spaces
  - comma: ','
  "
  [q]
  (let [words (-> q
                  clj-str/lower-case
                  (clj-str/replace #"[^0-9a-z_ ]" "")
                  (clj-str/split #" "))]
    (remove empty? words)))

(defn query-place-list [list q]
  (let [q (apply str (interpose " " (clean-q q)))]
    (filter #(clj-str/includes? (:search-field %) q) list)))
