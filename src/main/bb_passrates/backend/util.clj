(ns bb-passrates.backend.util)

(defn log [& list-of-values-to-print]
  (spit "/var/www/public_html/devlogfile.txt"
        (apply str (into (interpose " " list-of-values-to-print) ["\n"])) :append true))
