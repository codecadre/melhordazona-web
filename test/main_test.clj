(ns main-test
  (:require [bb-passrates.shared.main :as sut :refer [url->req-map build-href url->req]]
            [clojure.test :as t :refer [deftest is]]))

(deftest build-href-test
  (is (= "/en/"
         (build-href "/" {:lang :en})))
  (is (= "/en/path?foo=bar"
         (build-href "/path" {:lang :en
                           :url/foo "bar"})))
  (is (= "/path?foo=bar"
         (build-href "/path" {:lang :pt
                              :url/foo "bar"})))

  (is (= "?foo=bar"
         (build-href "/" {:lang :pt
                          :url/foo "bar"})))

  (is (= ""
         (build-href "/" {:url/lang nil
                          :url/foo nil}))))

(t/deftest url->req-map-test

  (is (= {:lang :pt, :uri "/cidades/porto/" :request-method :get}
         (url->req "/cidades/porto/?foo=bar" "GET" "")))
  (is (= {:lang :en, :uri "/en/cities/porto" :request-method :get}
         (url->req "/en/cities/porto" "GET" ""))))
