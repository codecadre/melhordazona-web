(ns bb-passrates.shared.copy)

(def copy-list
  {:concelho {:pt "Concelho"
              :en "Concelho"}
   :distrito {:pt "Distrito"
              :en "District"}
   :school {:pt "Escola"
            :en "School"}
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
   :autocomplete/sub-cta {:pt  "Mostramos-te as taxas de aprovação publicadas pelo IMT, num mapa, gratuitamente"
                          :en "You guide you through the pass-rates published by the Government, free of charge"}
   :meta/title {:pt "Passa à Primeira"
                :en "Passa à Primeira"}
   :meta/subtitle {:en "Driving school Pass-Rates in Portugal based on government data."
                   :pt "O teu guia (não) oficial para as taxas de aprovação do IMT"}
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
   :footer/subtitle {:pt ["Dados públicos com acessibilidade gratuita e foco na privacidade do utilizador. Realizado por " " para " "." #_"., sem recurso a tecnologias que invadem a privacidade do utilizador. Não monetizamos informação pessoal. Hosting em servidores europeus."]
                     :en ["Free access to government data" " para " ", sem recurso a tecnologias que invadem a privacidade do utilizador. Não monetizamos informação pessoal. Hosting em servidores europeus."]}

   })

(defn copy [p]
  (get-in copy-list p))
