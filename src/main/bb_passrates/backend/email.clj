(ns bb-passrates.backend.email
  (:require [bb-passrates.backend.config :as config]
            [pod.tzzh.mail :as m]))


(defn send-me-the-message [from body send-copy]
  (let [result (try
                 (m/send-mail {:host (:smtp-host config/values)
                               :port (:smtp-port config/values)
                               :username (:smtp-username config/values)
                               :password (:smtp-password config/values)
                               :subject (str "Passa à Primeira FROM " from)
                               :from (:smtp-from config/values)
                               :to (remove nil? ["passaprimeira@flaviosousa.co" (when send-copy from)])
                               :text (str "Mensagem original: \n\n" body )
                               #_#_:html "<b> kajfhajkfhakjs </b>" ;; for html body
                               #_#_:attachments ["./do-everything.clj"] ;; paths to the files to attch
                               })
                 (catch Exception e
                   :error))]
    (if (nil? result)
      true
      result)))

#_(send-me-the-message "test@fjsousa.com" "!outra mensagen \n blabla." true)
