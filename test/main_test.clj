(ns main-test
  (:require [bb-passrates.shared.main :as sut :refer [url->map build-href]]
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

(t/deftest url->map-test

  (is (= {:url/lang "pt", :url/place "porto" :url/type :city}
         (url->map "/cidades/porto/?lang=pt" "lang=pt")))

  (is (= {:url/lang "pt", :url/place "porto"  :url/type :district}
         (url->map "/distritos/porto/?lang=pt" "lang=pt")))

  (is (= {:url/foo "bar" :url/lang "pt", :url/place "porto"  :url/type :city}
         (url->map "/cidades/porto/?lang=pt&foo=bar" "lang=pt&foo=bar")))

  (is (= {:url/place "porto"  :url/type :city}
         (url->map "/cidades/porto/" "")))

  (is (= {:url/page "foo"  :url/type :page}
         (url->map "/foo" "")))

  (is (= {:url/type :home}
         (url->map "/" ""))))
