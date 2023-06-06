(ns bb-passrates.backend.components
  (:require [bb-passrates.shared.main :as main :refer [path->href]]
            [bb-passrates.shared.copy :refer [copy-m]]))

(defn form [{:keys [lang] :as req} & [success]]
  [:form {:hx-post (path->href "/post-contact" req) :hx-swap "outerHTML" :hx-target "this"}
   [:label {:for "email-input"} (copy-m :contact/email)]
   [:input {:class "u-full-width" :type "email" :placeholder "ola@mail.com" :id "email-input" :name "email-input"}]
   [:label {:for "message"} (copy-m :contact/msg)]
   [:textarea {:class "u-full-width" :placeholder "Ola Flávio..." :id "message" :name "message"}]
   [:label {:class "send-yourself-copy"}
    [:input {:type "checkbox" :name "send-copy"}]
    [:span {:class "label-body"} (copy-m :contact/send-yourself)]]
   [:input {:class "button-primary" :type "submit" :value (copy-m :contact/submit)}]
   (when (= true success)
     [:p (copy-m :contact/success)])
   (when (= :error success)
     [:p.error (copy-m :contact/error)])])
