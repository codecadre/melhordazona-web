(ns recepies.pages
  (:require [babashka.deps :as deps]
            [babashka.pods :as pods]
            [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :refer [html]]
            [clojure.java.io :as io]))

(deps/add-deps '{:deps {com.github.askonomm/clarktown {:mvn/version "1.1.2"}}})
(deps/add-deps '{:deps {markdown-clj/markdown-clj {:mvn/version "1.11.1"}}})
(require '[clarktown.core :as clarktown])

(pods/load-pod 'retrogradeorbit/bootleg "0.1.9")

(require
 '[pod.retrogradeorbit.bootleg.utils :as bootleg])

(require '[markdown.core :as md])

(def pages
  {:acerca {:title "Acerca deste projecto | Passa à Primeira"
            :subtitle "Passa à primeira é um guia interactivo das taxas de aprovação do IMT. Realizado por Flávio Sousa para Codecadre."
            :lang :pt
            :uri "/paginas/acerca/"}
   :faq-pt {:title "Passa a Primeira FAQ"
            :subtitle "Perguntas frequentes"
            :lang :pt
            :uri "/paginas/faq-pt/"}
   :apresentacao {:title "Passa a Primeira - Apresentação"
                  :subtitle "..."
                  :lang :pt
                  :uri "/paginas/apresentacao/"}}
  )

(defn md [n]
  (format "pages-md/%s.md" n))

(defn everything! [pages]
  (doseq [[k html-ct {:keys [lang]}] (->> pages
                                          (map (fn [[k meta]]
                                                 (vector k (md (name k)) meta)))
                                          (map #(update-in % [1] slurp))
                                          (map #(update-in % [1] md/md-to-html-string))
                                          (map #(update-in % [1]  (fn [p] (bootleg/convert-to p :hiccup-seq))))
                                          (map #(update-in % [1] (fn [c] (into [:html {:lang (name (:lang (last %)))}] (tmp/header (last %)  [:div.pages.container c])))))
                                          (map #(update-in % [1] (fn [c] (str "<!DOCTYPE html>\n" (html c))))))]
    (let [out-str (if (= :en lang)
                    "en/pages/%s/index.html"
                    "paginas/%s/index.html")
          f (format out-str (name k))]
     (clojure.java.io/make-parents f)
     (spit f html-ct))))

(everything! pages)
