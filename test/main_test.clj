(ns main-test
  (:require [bb-passrates.shared.main :as sut :refer [url->req-map build-href]]
            [clojure.test :as t :refer [deftest is]]))

(deftest build-href-test
  (is (= "/path?foo=bar"
         (build-href "/path" {:url/lang nil
                              :url/foo "bar"})))

  (is (= "/?lang=pt&foo=bar"
         (build-href "/" {:url/lang "pt"
                          :url/foo "bar"})))

  (is (= "/"
         (build-href "/" {:url/lang nil
                          :url/foo nil}))))

(t/deftest url->req-map-test

  (is (= {:url/lang "pt", :uri "/cidades/porto/" :request-method :get}
         (url->req-map "/cidades/porto/?lang=pt" "GET" "lang=pt")))

  (is (= {:url/lang "pt", :uri "/distritos/porto/" :request-method :post}
         (url->req-map "/distritos/porto/?lang=pt" "POST" "lang=pt")))

  (is (= {:url/foo "bar" :url/lang "pt" :uri "/cidades/porto/" :request-method :get}
         (url->req-map "/cidades/porto/?lang=pt&foo=bar" "GET" "lang=pt&foo=bar")))

  (is (= {:uri "/cidades/porto/" :request-method :get}
         (url->req-map "/cidades/porto/" "GET" "")))

  (is (= {:uri"/foo" :request-method :get}
         (url->req-map "/foo" "GET" "")))

  (is (= {:request-method :get :uri "/"}
         (url->req-map "/" "GET" ""))))
