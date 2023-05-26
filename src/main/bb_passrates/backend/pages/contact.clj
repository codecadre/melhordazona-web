(ns bb-passrates.backend.pages.contact
  (:require [bb-passrates.backend.templates.template :as tmp]
            [bb-passrates.shared.copy :refer [copy-m]]))


(defn content [lang]
  {:title (copy-m :home/meta-title)
   :subtitle (copy-m :home/meta-subtitle)})

(defn page [{:keys [lang] :as req}]
  (into
   [:html {:lang (name lang)}]
   (tmp/header
    (merge (content lang) req)
    [:main
     [:div.container
      [:h2 (copy-m :contact/title)]
      [:form
       [:div.row
        [:div.six.columns
         [:label {:for "email-input"} (copy-m :contact/email)]
         [:input {:class "u-full-width" :type "email" :placeholder "ola@mail.com" :id "email-input"}]]
        [:div.row
         [:div.twelve.columns
          [:label {:for "message"} (copy-m :contact/msg)]
          [:textarea {:class "u-full-width" :placeholder "Ola Flávio..." :id "message"}]
          [:label {:class "send-yourself-copy"}
           [:input {:type "checkbox"}]
           [:span {:class "label-body"} (copy-m :contact/send-yourself)]]
          [:input {:class "button-primary" :type "submit" :value (copy-m :contact/submit)}]]]]]]])))
