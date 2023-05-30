(ns main-test
  (:require [bb-passrates.shared.main :as main]
            [clojure.test :as t]))

(= {:email-input "mail%40bla.com",
    :message "sdf%20sdf%20sdf%20sdfsd%20f"}
   (main/parse-qs-like-string "email-input=mail%40bla.com&message=sdf%20sdf%20sdf%20sdfsd%20f"))

(t/deftest main-test
  (t/is (= {:request-method :get
            :lang :pt
            :uri "http://localhost"
            :q {:a "1"
                :b "2"}
            :in nil}
           (main/url->req "http://localhost" "GET" "a=1&b=2" nil))))
