(ns bb-passrates.shared.copy)

(def copy-list
  {:autocomplete/district {:pt "Distrito"
                           :en "District"}
   :autocomplete/municipality {:pt "Município"
                               :en "Municipality"}
   :autocomplete/city {:pt "Cidade"
                       :en "City"}
   :autocomplete/placeholder {:pt "Pesquisa por concelho ou escola..."
                              :en "Search by location or school name..."}
   :autocomplete/char-limit {:pt "Escreve duas letras no mínimo"
                             :en "Type minimum 2 letters"}
   :meta/title {:pt "Passa à Primeira"
                :en "Passa à Primeira"}
   :meta/subtitle {:en "Driving school Pass Rates in Portugal based on government data."
                   :pt "O teu guia (não) oficial para as taxas de aprovação do IMT"}
   :header/subtitle {:pt "O teu guia (não) oficial para as taxas de aprovação do IMT"
                     :en "Your (un)official guide to IMT pass-rates"}}
  )

(defn copy [p]
  (get-in copy-list p))
