(ns main-test
  (:require [bb-passrates.shared.main :as main]
            [clojure.test :as t]
            [bb-passrates.backend.util :as util]))

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


(t/deftest ->dd-yy-year-test
  (let [date-string "2022-05-07T14:52:45Z"]
    (t/is (= "07/05/2022" (util/->dd-yy-year date-string)))))
