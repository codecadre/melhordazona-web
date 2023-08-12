(ns bb-passrates.backend.util)

(defn log [& list-of-values-to-print]
  (spit "/var/www/public_html/devlogfile.txt"
        (apply str (into (interpose " " list-of-values-to-print) ["\n"])) :append true))

(defn ->dd-yy-year
  "Takes a zoned date-time"
  [date-string]
  (.format
   (java.time.ZonedDateTime/parse date-string)
   (java.time.format.DateTimeFormatter/ofPattern "dd/MM/yyyy")))
