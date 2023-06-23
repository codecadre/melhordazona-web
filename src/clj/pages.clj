(ns pages
  (:require [babashka.deps :as deps]
            [babashka.pods :as pods]
            [bb-passrates.backend.templates.template :as tmp]
            [hiccup2.core :as hiccup2]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [babashka.fs :as fs]
            [clarktown.core :as clarktown]
            [pod.retrogradeorbit.bootleg.utils :as bootleg]
            [markdown.core :as md]))

(def config
  (merge
   (-> "public/config_files/config.edn" slurp edn/read-string)
   (-> "public/config_files/secrets.edn" slurp edn/read-string)))

(defn process-page! [file]
  (let [{:keys [metadata html]} (md/md-to-html-string-with-meta (slurp file))
        {:keys [title subtitle lang date uri]} metadata
        title (first title)
        subtitle (first subtitle)
        lang (first lang)
        uri (first uri)
        req {:title title
             :subtitle subtitle
             :lang (keyword lang)
             :uri uri}
        hiccup (bootleg/convert-to html :hiccup-seq)
        html-string (hiccup2/html
                     (into [:html {:lang lang}]
                           (tmp/header req  [:div.pages.container hiccup]
                                       config)))
        html-doc (str "<!DOCTYPE html>\n" html-string)
        filepath (format "public/%sindex.html" uri)]
    (fs/create-dirs (str (fs/parent filepath)))
    (spit filepath html-doc)))

(defn -main [& args]
  (process-page! (first args)))
