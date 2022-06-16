(ns bb-passrates.shared.copy)



(def copy-list
  {:no-coord {:pt "Sem coordenadas geográficas - não aparece no mapa."
              :en "No geographic coordinates - doesn't show up on the map."}

   :no-data {:pt "Sem Dados"
             :en "No Data"}
   :concelho {:pt "Concelho"
              :en "Municipality"}
   :distrito {:pt "Distrito"
              :en "District"}
   :school {:pt "Escola"
            :en "School"}
   :cp7 {:pt "Codigo Postal"
         :en "Post Code"}
   :ribbon {:pt "Dados 2015-2020"
            :en "2015-2020 Data"}
   :project {:pt "Projecto" :en "Project"}
   ;;
   ;; autocomplete
   ;;

   :autocomplete/li-href {:school {:pt "/escolas/%s"
                                   :en "/en/schools/%s"}
                          :concelho {:pt "/concelhos/%s"
                                     :en "/en/municipalities/%s"}
                          :distrito {:pt "/distritos/%s"
                                     :en "/en/districts/%s"}}
   :autocomplete/district {:pt "Distrito"
                           :en "District"}
   :autocomplete/municipality {:pt "Município"
                               :en "Municipality"}
   :autocomplete/city {:pt "Cidade"
                       :en "City"}
   :autocomplete/placeholder {:pt "Ex: Ponte de Lima"
                              :en "Ex: Porto"}
   :autocomplete/char-limit {:pt "Escreve duas letras no mínimo"
                             :en "Type minimum 2 letters"}
   :autocomplete/cta {:pt "Pesquisa por concelho ou nome da escola"
                      :en "Search by location or school name"}
   :autocomplete/sub-cta {:pt  "Mostramos-te as taxas de aprovação publicadas pelo IMT num mapa, gratuitamente"
                          :en "We guide you through the pass-rates published by the Government, free of charge"}

   ;;
   ;;listings
   ;;

   :list/h1 {:pt "%s (Concelho)"
             :en "%s (Municipality)"}
   :list/header-copy
   {:pt
    ["Os gráficos abaixo mostram as taxas de aprovação para %s escolas do concelho de %s."
     "Dados referentes aos exames de condução nos últimos três anos. Contabilizando todas as categorias (condução, mota, etc) e apenas pasagem à primeira."
     "Clica nos marcadores redondos no mapa!"]
    :en
    ["The graphs below shows the approval rates for %s schools in the municipality of %s."
     "Data relative to driving exams in the last three years. Accounting for all categories (driving, motorbike, etc) and first passes only."
     "Click on the red markers in the map!"]}
   :list/pop-up-source
   {:pt "Fonte:"
    :en "Source: "}
   :list/pop-up-more
   {:pt "Ver Mais >"
    :en "More >"}
   :list/scard-license {:pt "Licença IMT"
                        :en "IMT License"}
   :list/scard-address {:pt "Morada"
                        :en "Address"}

   ;;
   ;;school
   ;;

   :school/title {:pt "Escola de Condução"
                  :en "Driving School"}
   :school/back {:pt "< Concelho de %s"
                 :en "< %s Municipality"}
   :school/coords {:pt "coordenadas (Aproximadas)"
                   :en "Coordinates (Approximate)"}
   :school/explainer
   {:pt
    ["Dados referentes aos exames nos últimos seis anos. Contabilizando todas as categorias (condução, mota, etc) e apenas pasagem à primeira. Este gráfico compara "
     "aprovação em exame prático (condução)"
     " com "
     "aprovação em exame teórico"
     ". A taxa de aprovação é o número de exames aprovados, em relação ao número de exames realizados."
     ]
    :en
    ["Data relative to exams in the last six years. Accounts for all categories (driving, motorbike, etc) and only first passes. This chart compares "
     "approval in practical exam (driving)"
     " with "
     "approval in theoretical exam (Highway code)"
     ". Approval rates is the number of exams passed vs. the number of exams done."
     ]
    }

   ;;
   ;; svg
   ;;

   :svg/approval {:pt "Aprovação"
                  :en "Approval"}
   :svg/n {:pt "N. Exames"
           :en "N. Exams"}

   ;;
   ;; meta
   ;;

   :school/meta-title {:pt "Escola de condução: %s - Morada e taxa de aprovação IMT | Passa à Primeira"
                       :en "Driving school: %s - Official government data | Passa à Primeira"}
   :meta/subtitle-school {:pt "Taxas de aprovação IMT da escola de condução %s, em %s. Dados referentes aos últimos seis anos. Contabilizando todas as categorias (condução, mota, etc) e apenas pasagem à primeira."
                          :en "Approval rates for driving school %s, in %s. Data relative to exams in the last six years. Accounts for all categories (driving, motorbike, etc) and only first passes."}
   :list/meta-title {:pt "Taxas de aprovação para %s Escolas de condução em %s (Concelho) | Passa à Primeira"
                     :en "Pass Rates for %s Driving schools in %s | Passa à Primeira"}
   :home/meta-title {:pt "Pesquisa: Escolas de condução por Concelho | Passa à Primeira"
                     :en "Search: Driving schools in Portugal | Passa à Primeira"}
   :home/meta-subtitle {:en "Government pass rates for driving schools across Portugal. Official government data from 2015-2020."
                        :pt "Quantos alunos passaram à primeira na tua futura escola de condução?. Dados oficiais do IMT de 2015 - 2020."}
   ;;TODO: deprecate :meta/title
   :meta/title {:pt "Pesquisa: Escolas de condução por Concelho | Passa à Primeira"
                :en "Search: Driving schools by location | Passa à Primeira"}
   ;;TODO deprecate meta/subtitle
   :meta/subtitle {:en "Driving school Pass-Rates in Portugal based on government data."
                   :pt "O teu guia (não) oficial para as taxas de aprovação do IMT"}
   :meta/subtitle-list {:pt
                        "Dados oficiais do IMT, para as escolas de condução do concelho de %s. Dados referentes aos exames de condução nos últimos três anos. Contabilizando todas as categorias (condução, mota, etc) e apenas pasagem à primeira."
                        :en "Oficial government data for driving schools in the municipality of %s. Data relative to driving exams in the last three years. Accounting for all categories (driving, motorbike, etc) and first passes only."}


   ;;
   ;;header/footer
   ;;

   :header/subtitle {:pt "O teu guia (não) oficial para as taxas de aprovação do IMT"
                     :en "Your (un)official guide to IMT pass-rates"}
   :nav/search {:pt "Pesquisa"
                :en "Search"}
   :nav/about {:pt "Acerca"
               :en "About"}
   :nav/faq {:pt "FAQ"
             :en "FAQ"}
   :nav/privacy {:pt "Privacidade"
                 :en "Privacy"}
   :footer/links-title {:pt "Links" :en "Links"}
   :footer/contact-title {:pt "Contacto" :en "Contacts"}
   :footer/enquiries {:pt "Enviar contactos directamente para: "
                      :en "Direct enquiries to: "}
   :footer/by {:pt "Passa à Primeira realizado por:"
               :en "Passa à Primeira is a project by:"}
   :footer/is-a {:pt "é uma empresa registrada no Reino Unido"
                 :en "is a UK registered company."}
   :footer/subtitle {:pt
                     ["Dados públicos com acessibilidade gratuita e foco na privacidade do utilizador. Realizado por " " para " "."]
                     :en ["Free access to government data focused on user privacy. Done by " " for " "."]}
})

(defn copy [p]
  (get-in copy-list p))
