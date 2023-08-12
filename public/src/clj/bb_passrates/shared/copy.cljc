(ns bb-passrates.shared.copy)



(def copy-list
  {:no-coord {:pt "Sem coordenadas geográficas - não aparece no mapa."
              :en "No geographic coordinates - doesn't show up on the map."}

   :no-data {:pt "Sem Dados"
             :en "No Data"}
   :no-district {:pt "Sem informação no site do IMT"
                 :en "No Data in IMT website"}
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

   :archived {:pt "(Desativada*)" :en "(Archived*)"}
   :archived-long {:pt "*Escola já não se encontra no site do IMT. Vista pela última vez em %s."
                   :en "*School no longer available at IMT website. Last seen at %s."}

   ;;
   ;;href
   ;;
   :href/about {:pt "/static/acerca/"
                :en "/static/en/about/"}
   :href/data-sources {:pt "/static/origem-dos-dados/"
                       :en "/static/en/data-sources/"}
   :href/district-index {:pt "/distritos-regioes/"
                         :en "/en/districts-regions/"}
   :href/district {:pt "/distritos-regioes/%s/concelhos/"
                   :en "/en/districts-regions/%s/municipalities/"}
   :href/municipality {:pt "/distritos-regioes/%s/concelhos/%s/escolas/"
                       :en "/en/districts-regions/%s/municipalities/%s/schools/"}
   :href/school {:pt "/distritos-regioes/%s/concelhos/%s/escolas/%s/"
                 :en "/en/districts-regions/%s/municipalities/%s/schools/%s/"}
   :href/nil-concelho {:pt "/distritos-regioes/sem-info/escolas/"
                       :en "/en/districts-regions/no-info/schools/"}
   :href/school-nil-concelho {:pt "/distritos-regioes/sem-info/escolas/%s/"
                              :en "/en/districts-regions/no-info/schools/%s/"}
   :href/contact {:pt "/contato"
                  :en "/en/contact"}
   ;;
   ;; autocomplete
   ;;

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

   :no-imt-data/title {:pt "Escolas sem morada | Passa à Primeira"
                       :en "Schools with missing addresses | Passa à Primeira"}
   :no-imt-data/subtitles {:pt "Lista de escolas com taxas de aprovação, mas sem informação sobre morada ou licensa no site do IMT."
                           :en "List of schools com pass rates data, but with no address info in the IMT website."}

   :directory/meta-title {:pt "Diretório de escolas de condução para todo o país | Passa à Primeira"
                          :en "Driving school directory for Portugal | Passa à Primeira"}
   :directory/subtitle {:pt "Procura escolas de condução por distrito e concelho"
                        :en "Find driving schools by district and municipality"}

   :directory-list/meta-title {:pt "Escolas de condução nos concelhos do distrito de %s | Passa à Primeira"
                               :en "Municipalities in %s district in Portugal | Passa à Primeira"}
   :directory-list/subtitle {:pt "Escolas de condução por concelho no distrito de %s. Dados do IMT."
                             :en "Driving schools listed by municipality in the district of %s, in Portugal. Using official government data (IMT)."}

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
   :nav/dir {:pt "Diretório"
             :en "Directory"}
   :nav/about {:pt "Sobre"
               :en "About"}
   :nav/faq {:pt "FAQ"
             :en "FAQ"}
   :nav/privacy {:pt "Privacidade"
                 :en "Privacy"}
   :nav/contact {:pt "Contato"
                 :en "Contact"}
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
   :footer/data-sources {:pt "Origem dos dados"
                         :en "Data sources"}

   ;;
   ;; Directory
   ;;

   :dir/title {:pt "Diretório de escolas de condução"
               :en "Driving school directory"}
   :dir/list-title {:pt "Diretório de escolas de condução no distrito de %s"
                    :en "Driving school directory in %s district"}
   :dir/breadcrumb-district-region {:pt "Distritos e Regiôes"
                                    :en "District and Regions"}

   ;;
   ;; Contact
   ;;


   :contact/title {:pt "Sugestões, opiniões, mandar vir:"
                   :en "Contact Form"}
   :contact/email {:pt "O teu Email"
                   :en "Email"}
   :contact/msg {:pt "Mensagem"
                 :en "Message"}
   :contact/send-yourself {:pt "Envia-me uma cópia"
                           :en "Send yourself a copy"}
   :contact/submit {:pt "Enviar"
                    :en "Submit"}
   :contact/success {:pt "Mensagem enviada com sucesso!"
                     :en "Message sent successfully"}
   :contact/error {:pt "Ocoreu um erro. P.f.f. tente mais tarde ou envie directamente para mail@flaviosousa.co"
                   :en "Something went wrong"}})

(defn copy [p]
  (get-in copy-list p))

(defmacro copy-m [copy-key]
  `(copy [~copy-key ~'lang]))
