(ns bb-passrates.shared.places)

(def places
[[:c "coimbra" "Cantanhede"]
 [:c "porto" "Gondomar"]
 [:c "portalegre" "Elvas"]
 [:c "porto" "Penafiel"]
 [:c "vila-real" "Boticas"]
 [:c "lisboa" "Alenquer"]
 [:c "porto" "Baião"]
 [:c "lisboa" "Sintra"]
 [:c "lisboa" "Odivelas"]
 [:c "evora" "Borba"]
 [:c "vila-real" "Vila Real"]
 [:c "coimbra" "Condeixa-a-Nova"]
 [:c "lisboa" "Vila Franca de Xira"]
 [:c "setubal" "Sines"]
 [:c "guarda" "Almeida"]
 [:c "setubal" "Alcochete"]
 [:c "braga" "Cabeceiras de Basto"]
 [:c "viana-do-castelo" "Valença"]
 [:c "beja" "Ourique"]
 [:c "leiria" "Batalha"]
 [:c "leiria" "Alvaiázere"]
 [:c "lisboa" "Cascais"]
 [:c "beja" "Vidigueira"]
 [:c "aveiro" "Murtosa"]
 [:c "faro" "Lagos"]
 [:c "braga" "Braga"]
 [:c "aveiro" "Santa Maria da Feira"]
 [:c "vila-real" "Valpaços"]
 [:c "faro" "Albufeira"]
 [:c "evora" "Redondo"]
 [:c "porto" "Lousada"]
 [:c "viseu" "Tondela"]
 [:c "castelo-branco" "Castelo Branco"]
 [:c "vila-real" "Mondim de Basto"]
 [:c "evora" "Arraiolos"]
 [:c "coimbra" "Coimbra"]
 [:c "castelo-branco" "Proença-a-Nova"]
 [:c "leiria" "Ansião"]
 [:c "portalegre" "Ponte de Sor"]
 [:c "beja" "Castro Verde"]
 [:c "portalegre" "Portalegre"]
 [:c "evora" "Vila Viçosa"]
 [:c "guarda" "Seia"]
 [:c "vila-real" "Vila Pouca de Aguiar"]
 [:c "aveiro" "Oliveira de Azeméis"]
 [:c "braganca" "Bragança"]
 [:c "vila-real" "Sabrosa"]
 [:c "viseu" "Carregal do Sal"]
 [:c "leiria" "Leiria"]
 [:c "santarem" "Almeirim"]
 [:c "viana-do-castelo" "Caminha"]
 [:c "viseu" "Vila Nova de Paiva"]
 [:c "faro" "Portimão"]
 [:c "viseu" "Lamego"]
 [:c "portalegre" "Campo Maior"]
 [:c "braga" "Fafe"]
 [:c "braganca" "Torre de Moncorvo"]
 [:c "guarda" "Guarda"]
 [:c "setubal" "Grândola"]
 [:c "porto" "Matosinhos"]
 [:c "braganca" "Mirandela"]
 [:c "aveiro" "Estarreja"]
 [:c "evora" "Reguengos de Monsaraz"]
 [:c "guarda" "Manteigas"]
 [:c "beja" "Beja"]
 [:c "porto" "Vila do Conde"]
 [:c "coimbra" "Montemor-o-Velho"]
 [:c "guarda" "Gouveia"]
 [:c "viseu" "São João da Pesqueira"]
 [:c "viana-do-castelo" "Melgaço"]
 [:c "viseu" "Castro Daire"]
 [:c "viseu" "São Pedro do Sul"]
 [:c "vila-real" "Alijó"]
 [:c "lisboa" "Lisboa"]
 [:c "faro" "Loulé"]
 [:c "porto" "Paços de Ferreira"]
 [:c "aveiro" "Águeda"]
 [:c "viana-do-castelo" "Vila Nova de Cerveira"]
 [:c "beja" "Ferreira do Alentejo"]
 [:c "viana-do-castelo" "Viana do Castelo"]
 [:c "aveiro" "Anadia"]
 [:c "braga" "Vila Verde"]
 [:c "guarda" "Figueira de Castelo Rodrigo"]
 [:c "beja" "Serpa"]
 [:c "aveiro" "Castelo de Paiva"]
 [:c "beja" "Mértola"]
 [:c "viseu" "Vouzela"]
 [:c "braga" "Terras de Bouro"]
 [:c "porto" "Maia"]
 [:c "vila-real" "Peso da Régua"]
 [:c "santarem" "Salvaterra de Magos"]
 [:c "setubal" "Sesimbra"]
 [:c "guarda" "Pinhel"]
 [:c "braganca" "Vinhais"]
 [:c "viseu" "Viseu"]
 [:c "faro" "São Brás de Alportel"]
 [:c "leiria" "Nazaré"]
 [:c "faro" "Olhão"]
 [:c "viana-do-castelo" "Monção"]
 [:c "portalegre" "Alter do Chão"]
 [:c "coimbra" "Mira"]
 [:c "braganca" "Alfândega da Fé"]
 [:c "coimbra" "Soure"]
 [:c "viseu" "Resende"]
 [:c "setubal" "Montijo"]
 [:c "coimbra" "Miranda do Corvo"]
 [:c "lisboa" "Mafra"]
 [:c "evora" "Évora"]
 [:c "lisboa" "Oeiras"]
 [:c "setubal" "Seixal"]
 [:c "coimbra" "Tábua"]
 [:c "leiria" "Marinha Grande"]
 [:c "guarda" "Vila Nova de Foz Côa"]
 [:c "leiria" "Porto de Mós"]
 [:c "faro" "Castro Marim"]
 [:c "evora" "Vendas Novas"]
 [:c "viseu" "Mortágua"]
 [:c "viseu" "Tarouca"]
 [:c "coimbra" "Oliveira do Hospital"]
 [:c "lisboa" "Torres Vedras"]
 [:c "porto" "Porto"]
 [:c "castelo-branco" "Penamacor"]
 [:c "braga" "Vieira do Minho"]
 [:c "coimbra" "Arganil"]
 [:c "porto" "Paredes"]
 [:c "leiria" "Figueiró dos Vinhos"]
 [:c "aveiro" "Sever do Vouga"]
 [:c "viana-do-castelo" "Paredes de Coura"]
 [:c "vila-real" "Mesão Frio"]
 [:c "braga" "Amares"]
 [:c "setubal" "Santiago do Cacém"]
 [:c "santarem" "Alcanena"]
 [:c "guarda" "Sabugal"]
 [:c "aveiro" "Vagos"]
 [:c "porto" "Valongo"]
 [:c "faro" "Lagoa"]
 [:c "santarem" "Cartaxo"]
 [:c "lisboa" "Azambuja"]
 [:c "castelo-branco" "Fundão"]
 [:c "porto" "Vila Nova de Gaia"]
 [:c "evora" "Montemor-o-Novo"]
 [:c "santarem" "Rio Maior"]
 [:c "leiria" "Caldas da Raínha"]
 [:c "lisboa" "Sobral do Monte Agraço"]
 [:c "setubal" "Barreiro"]
 [:c "santarem" "Torres Novas"]
 [:c "santarem" "Ferreira do Zêzere"]
 [:c "porto" "Marco de Canavezes"]
 [:c "lisboa" "Arruda dos Vinhos"]
 [:c "lisboa" "Lourinhã"]
 [:c "porto" "Póvoa de Varzim"]
 [:c "setubal" "Moita"]
 [:c "santarem" "Ourém"]
 [:c "vila-real" "Murça"]
 [:c "braganca" "Vimioso"]
 [:c "aveiro" "Ovar"]
 [:c "braganca" "Carrazeda de Ansiâes"]
 [:c "aveiro" "Ílhavo"]
 [:c "vila-real" "Chaves"]
 [:c "santarem" "Sardoal"]
 [:c "portalegre" "Fronteira"]
 [:c "braga" "Guimarães"]
 [:c "braga" "Vizela"]
 [:c "viseu" "Armamar"]
 [:c "leiria" "Pombal"]
 [:c "beja" "Odemira"]
 [:c "guarda" "Aguiar da Beira"]
 [:c "leiria" "Peniche"]
 [:c "viseu" "Nelas"]
 [:c "castelo-branco" "Sertã"]
 [:c "castelo-branco" "Belmonte"]
 [:c "leiria" "Castanheira de Pêra"]
 [:c "leiria" "Pedrógão Grande"]
 [:c "portalegre" "Sousel"]
 [:c "lisboa" "Loures"]
 [:c "evora" "Viana do Alentejo"]
 [:c "viseu" "Cinfães"]
 [:c "santarem" "Tomar"]
 [:c "braga" "Vila Nova de Famalicão"]
 [:c "santarem" "Mação"]
 [:c "braga" "Esposende"]
 [:c "evora" "Portel"]
 [:c "viseu" "Penedono"]
 [:c "aveiro" "Espinho"]
 [:c "portalegre" "Gavião"]
 [:c "guarda" "Fornos de Algodres"]
 [:c "evora" "Mora"]
 [:c "coimbra" "Lousã"]
 [:c "portalegre" "Crato"]
 [:c "setubal" "Alcácer do Sal"]
 [:c "castelo-branco" "Idanha-a-Nova"]
 [:c "guarda" "Celorico da Beira"]
 [:c "santarem" "Benavente"]
 [:c "setubal" "Almada"]
 [:c "viseu" "Tabuaço"]
 [:c "leiria" "Alcobaça"]
 [:c "viana-do-castelo" "Arcos de Valdevez"]
 [:c "viseu" "Sátão"]
 [:c "santarem" "Alpiarça"]
 [:c "viseu" "Mangualde"]
 [:c "lisboa" "Cadaval"]
 [:c "beja" "Almodôvar"]
 [:c "coimbra" "Penacova"]
 [:c "porto" "Amarante"]
 [:c "braga" "Celorico de Basto"]
 [:c "aveiro" "Aveiro"]
 [:c "aveiro" "Albergaria a Velha"]
 [:c "leiria" "Óbidos"]
 [:c "faro" "Tavira"]
 [:c "braga" "Póvoa de Lanhoso"]
 [:c "porto" "Santo Tirso"]
 [:c "viana-do-castelo" "Ponte da Barca"]
 [:c "guarda" "Trancoso"]
 [:c "santarem" "Entroncamento"]
 [:c "aveiro" "Oliveira do Bairro"]
 [:c "beja" "Aljustrel"]
 [:c "faro" "Vila do Bispo"]
 [:c "santarem" "Abrantes"]
 [:c "faro" "Vila Real de Santo António"]
 [:c "viana-do-castelo" "Ponte de Lima"]
 [:c "faro" "Aljezur"]
 [:c "santarem" "Santarém"]
 [:c "coimbra" "Penela"]
 [:c "aveiro" "São João da Madeira"]
 [:c "faro" "Silves"]
 [:c "aveiro" "Vale de Cambra"]
 [:c "lisboa" "Amadora"]
 [:c "viseu" "Moimenta da Beira"]
 [:c "setubal" "Palmela"]
 [:c "faro" "Faro"]
 [:c "vila-real" "Ribeira da Pena"]
 [:c "viseu" "Penalva do Castelo"]
 [:c "aveiro" "Mealhada"]
 [:c "viseu" "Oliveira de Frades"]
 [:c "castelo-branco" "Covilhã"]
 [:c "beja" "Moura"]
 [:c "setubal" "Setúbal"]
 [:c "coimbra" "Figueira da Foz"]
 [:c "aveiro" "Arouca"]
 [:c "porto" "Trofa"]
 [:c "castelo-branco" "Oleiros"]
 [:c "viseu" "Santa Comba Dão"]
 [:c "porto" "Felgueiras"]
 [:c "leiria" "Bombarral"]
 [:c "coimbra" "Vila Nova de Poiares"]
 [:c "evora" "Estremoz"]
 [:c "santarem" "Coruche"]
 [:c "braga" "Barcelos"]
 [:s "S/IND." [nil "sind-xxxxx"]]
 [:s
  "Automóvel Clube de Portugal"
  ["lisboa" "lisboa" "automovel-club-de-portugal-00001"]]
 [:s "Automóvel Clube de Portugal" ["porto" "porto" "acp-00002"]]
 [:s "A Popular" ["lisboa" "lisboa" "a-popular-00005"]]
 [:s
  "Automóveis Monumental"
  ["lisboa" "lisboa" "automoveis-monumental-00006"]]
 [:s
  "Escola De Condução A Desportiva (Boavista)"
  [nil "a-desportiva-boavista-00007"]]
 [:s "Victória" ["lisboa" "lisboa" "vitoria-00008"]]
 [:s "Escola De Condução Enal" [nil "enal-00009"]]
 [:s
  "Lusitânea de Automobilismo"
  ["lisboa" "lisboa" "lusitania-de-automobilsmo-00010"]]
 [:s "Escola De Condução Rodaqui" [nil "rodaqui-00011"]]
 [:s "Bastos" ["porto" "porto" "bastos-00012"]]
 [:s "Morarte" ["porto" "porto" "morarte-00013"]]
 [:s "Carsil" ["porto" "gondomar" "carsil-00014"]]
 [:s
  "Estrela Torriense"
  ["lisboa" "torres-vedras" "estrela-torriense-00015"]]
 [:s "Moderna" ["lisboa" "lisboa" "moderna-00016"]]
 [:s "Hugo Vieira" ["porto" "porto" "hugo-vieira-porto-00017"]]
 [:s
  "Eduardo Pereira de Campos"
  ["lisboa" "lisboa" "e-p-campos-00019"]]
 [:s "Ouriense" ["santarem" "ourem" "ouriense-00020"]]
 [:s "S. Cristóvão" ["lisboa" "lisboa" "sao-cristovao-00021"]]
 [:s "M. M. Ouressa" ["lisboa" "sintra" "m-m-ouressa-00022"]]
 [:s "Ribatejana" ["santarem" "santarem" "ribatejana-00023"]]
 [:s "Dokas" ["lisboa" "lisboa" "dokas-00024"]]
 [:s "M. Silva" ["lisboa" "torres-vedras" "m-silva-00025"]]
 [:s "Escola De Condução Alkântara" [nil "alkantara-00027"]]
 [:s "Benfica" ["lisboa" "lisboa" "benfica-00028"]]
 [:s "Auto Águia" ["porto" "porto" "auto-aguia-00029"]]
 [:s
  "Técnica Automóvel Silvino"
  ["lisboa" "lisboa" "tecnica-automovel-silvino-00030"]]
 [:s "A Portuguesa" ["lisboa" "lisboa" "a-portuguesa-00031"]]
 [:s "Instrutora de Automóveis" ["lisboa" "lisboa" "idal-00032"]]
 [:s "Escola De Condução A Império" [nil "a-imperio-00033"]]
 [:s "Destaque" ["evora" "vendas-novas" "destaque-00034"]]
 [:s "Neuropa" ["lisboa" "lisboa" "neuropa-00035"]]
 [:s "Pincor" ["porto" "porto" "pincor-00036"]]
 [:s "Campolide" ["lisboa" "lisboa" "campolide-00038"]]
 [:s "Torrejana" ["santarem" "torres-novas" "torrejana-00039"]]
 [:s
  "Automóvel Lisbonense"
  ["lisboa" "lisboa" "automovel-lisbonense-00040"]]
 [:s "Telheiras" ["lisboa" "lisboa" "telheiras-00041"]]
 [:s "Carvalhido" ["porto" "porto" "carvalhido-00042"]]
 [:s "Saldanha" ["lisboa" "lisboa" "saldanha-00044"]]
 [:s
  "Gonçalves e Delgado"
  ["setubal" "setubal" "goncalves-e-delgado-00045"]]
 [:s "Moderna-Tomar" ["santarem" "tomar" "moderna-de-tomar-00047"]]
 [:s "Automóvel de Sintra" ["lisboa" "sintra" "sintra-00048"]]
 [:s "Boavista – Porto" ["porto" "porto" "boavista-00049"]]
 [:s "Invicta" ["porto" "porto" "invicta-00052"]]
 [:s "S. Mamede" ["porto" "matosinhos" "s-mamede-00053"]]
 [:s "Radical" ["lisboa" "lisboa" "radical-00055"]]
 [:s
  "Vila Franca"
  ["lisboa" "vila-franca-de-xira" "vila-franca-00056"]]
 [:s "França" ["porto" "porto" "franca-00057"]]
 [:s "Portuense" ["porto" "porto" "portuense-00058"]]
 [:s "Instrutores Reunidos" ["lisboa" "lisboa" "ecir-00059"]]
 [:s "Vimaranense" ["braga" "guimaraes" "vimaranense-00060"]]
 [:s "Central do Sameiro" ["braga" "braga" "central-do-sameiro-00061"]]
 [:s "Ribeiro" ["braga" "braga" "ribeiro-00062"]]
 [:s "Albertino" ["coimbra" "coimbra" "albertino-00064"]]
 [:s "Águeda" ["aveiro" "agueda" "agueda-00067"]]
 [:s "Escola De Condução A Capital" [nil "a-capital-00068"]]
 [:s "Santa Clara" ["coimbra" "coimbra" "santa-clara-00069"]]
 [:s "Viriato" ["viseu" "viseu" "viriato-00071"]]
 [:s
  "Escola De Condução Oliveira De Azemeis"
  [nil "oliveira-de-azemeis-00073"]]
 [:s "Colombo" ["lisboa" "lisboa" "colombo-00074"]]
 [:s "Olhanense" ["faro" "olhao" "olhanense-00077"]]
 [:s "Portalegrense" ["portalegre" "portalegre" "portalegrense-00078"]]
 [:s "Farense" ["faro" "faro" "farense-00079"]]
 [:s "António Viegas" ["faro" "faro" "antonio-viegas-00080"]]
 [:s "Escola De Condução Fundanense" [nil "fundanense-00081"]]
 [:s
  "Automobilista de Beja"
  ["beja" "beja" "automobilistica-de-beja-00082"]]
 [:s "G. Gomes - Guarda" ["guarda" "guarda" "g-gomes-guarda-00083"]]
 [:s
  "Centro de Portugal"
  ["coimbra" "coimbra" "centro-de-portugal-00084"]]
 [:s "Cantanhede" ["coimbra" "montemorovelho" "cantanhede-00085"]]
 [:s
  "Vianense"
  ["viana-do-castelo" "viana-do-castelo" "a-vianense-00086"]]
 [:s "A Estarrejense" ["aveiro" "estarreja" "estarrejense-00087"]]
 [:s "Escola De Condução Ibérica" [nil "iberica-00088"]]
 [:s "Flaviense" ["vila-real" "chaves" "flaviense-00089"]]
 [:s "Escola De Condução Entre Linhas" [nil "entre-linhas-00092"]]
 [:s "Tomé" ["santarem" "santarem" "tome-00093"]]
 [:s "Escola De Condução Setubalense" [nil "setubalense-00094"]]
 [:s "Auto Real" ["vila-real" "vila-real" "auto-real-00095"]]
 [:s
  "Automóveis do Centro"
  ["coimbra" "coimbra" "automoveis-do-centro-00096"]]
 [:s "Bracarense" ["braga" "braga" "bracarense-00097"]]
 [:s "Ouriquense" ["lisboa" "lisboa" "ouriquense-00098"]]
 [:s "Ribeiro" ["aveiro" "sao-joao-da-madeira" "ribeiro-00099"]]
 [:s "Azurara" ["viseu" "mangualde" "azurara-00100"]]
 [:s
  "Albicastrense"
  ["castelo-branco" "castelo-branco" "albicastrense-00101"]]
 [:s
  "Entroncamento"
  ["santarem" "entroncamento" "do-entroncamento-00104"]]
 [:s "Grão Vasco" ["viseu" "viseu" "grao-vasco-00105"]]
 [:s "Grandolense" ["setubal" "grandola" "grandolense-00106"]]
 [:s "Abrantina" ["santarem" "abrantes" "abrantina-00107"]]
 [:s "Santos e Gamelas" ["aveiro" "aveiro" "santos-e-gamelas-00108"]]
 [:s "Mafrense" ["lisboa" "mafra" "mafrense-00109"]]
 [:s "Louletana" ["faro" "loule" "louletana-00111"]]
 [:s "Tavirense" ["faro" "tavira" "tavirense-00112"]]
 [:s
  "Auto Marinhense"
  ["leiria" "marinha-grande" "auto-marinhense-00113"]]
 [:s "Confiança" ["lisboa" "loures" "a-confianca-00117"]]
 [:s "José Justino" ["santarem" "cartaxo" "jose-justino-00119"]]
 [:s
  "Limarense"
  ["viana-do-castelo" "ponte-de-lima" "limarense-00120"]]
 [:s
  "Auto Instrutora do Ílhavo"
  ["aveiro" "ilhavo" "auto-instrutora-de-ilhavo-00121"]]
 [:s "Alcacerense" ["setubal" "alcacer-do-sal" "alcacerense-00122"]]
 [:s "Escola De Condução Devesa" [nil "devesa-00123"]]
 [:s
  "Auto Caldense"
  ["leiria" "caldas-da-rainha" "auto-caldense-00126"]]
 [:s "Auto Marão" ["vila-real" "vila-real" "auto-marao-00128"]]
 [:s "Supertubos" ["leiria" "peniche" "supertubos-00129"]]
 [:s "Nordeste" ["braganca" "mirandela" "nordeste-00131"]]
 [:s "Portimonense" ["faro" "portimao" "portimonense-00133"]]
 [:s "Penafidelense" ["porto" "penafiel" "penafidelense-00134"]]
 [:s "Beira Alta" ["viseu" "sao-pedro-do-sul" "beira-alta-00137"]]
 [:s "Ponte de Sor" ["portalegre" "ponte-de-sor" "ponte-de-sor-00139"]]
 [:s "Escola De Condução Sertagenense" [nil "sertagenense-00142"]]
 [:s "Escola De Condução Benavente" [nil "benavente-00143"]]
 [:s "Rio Maiorense" ["santarem" "rio-maior" "riomaiorense-00144"]]
 [:s
  "Oliveira do Bairro"
  ["aveiro" "oliveira-do-bairro" "oliveira-do-bairro-00147"]]
 [:s "Bavi" ["leiria" "caldas-da-rainha" "bavi-00148"]]
 [:s "Algés" ["lisboa" "oeiras" "alges-00149"]]
 [:s "A Figueiredo" ["lisboa" "lourinha" "a-figueiredo-00151"]]
 [:s "Ideal de Alenquer" ["lisboa" "alenquer" "alenquer-00154"]]
 [:s "Central de Loures" ["lisboa" "loures" "central-de-loures-00156"]]
 [:s "Barreirense" ["setubal" "barreiro" "a-barreirense-00164"]]
 [:s "Brigantina" ["braga" "braga" "brigantina-00165"]]
 [:s "Auto Cadaval" ["lisboa" "cadaval" "auto-cadaval-00166"]]
 [:s
  "Sobralense"
  ["lisboa" "sobral-do-monte-agraco" "sobralense-00168"]]
 [:s "Ovarense" ["aveiro" "ovar" "ovarense-00172"]]
 [:s "S. Bartolomeu" ["lisboa" "cascais" "s-bartolomeu-00175"]]
 [:s "Marcoense" ["porto" "marco-de-canavezes" "a-marcoense-00177"]]
 [:s "Do Sardoal" ["santarem" "sardoal" "do-sardoal-00178"]]
 [:s "Alcobacense" ["leiria" "alcobaca" "alcobacense-00179"]]
 [:s "Fafense" ["braga" "fafe" "fafense-00181"]]
 [:s "Costa de Prata" ["guarda" "seia" "costa-de-prata-00182"]]
 [:s
  "Escola De Condução Victória Seixalense"
  [nil "victoria-seixalense-00185"]]
 [:s "Santa Margarida" ["aveiro" "ilhavo" "santa-margarida-00189"]]
 [:s "Além Rio" ["setubal" "moita" "alem-rio-00190"]]
 [:s "Infante D. Henrique" ["faro" "lagos" "infante-d-henrique-00191"]]
 [:s
  "Oliveirense"
  ["coimbra" "oliveira-do-hospital" "oliveirense-00192"]]
 [:s "Pátria" ["lisboa" "lisboa" "patria-00193"]]
 [:s "Diana" ["evora" "evora" "diana-00194"]]
 [:s
  "S. Cristóvão - Gouveia"
  ["guarda" "gouveia" "s-cristovao-gouveia-00195"]]
 [:s "Silvense" ["faro" "silves" "silvense-00197"]]
 [:s "Santarém" ["santarem" "santarem" "santarem-00201"]]
 [:s "Escola De Condução Costa" [nil "costa-00203"]]
 [:s
  "Auto do Bombarral"
  ["leiria" "bombarral" "auto-do-bombarral-00204"]]
 [:s "Tondelense" ["viseu" "tondela" "tondelense-00206"]]
 [:s
  "Infante de Sagres - Lagoa"
  ["faro" "lagoa" "infante-sagres-lagoa-00207"]]
 [:s "Escola De Condução Almeirinense" [nil "almeirinense-00209"]]
 [:s "Queluz" ["lisboa" "sintra" "queluz-00210"]]
 [:s
  "Castanheirense"
  ["leiria" "castanheira-de-pera" "castanheirense-00213"]]
 [:s "Armando Victor" ["lisboa" "oeiras" "armando-vitor-00215"]]
 [:s "A Gomes" ["guarda" "guarda" "a-gomes-guarda-00216"]]
 [:s "Reis Trancoso" ["guarda" "trancoso" "reis-trancoso-00220"]]
 [:s
  "Automobilística D. Nuno Álvares Pereira"
  ["evora"
   "reguengos-de-monsaraz"
   "automobilistica-d-nuno-alvares-pereira-00229"]]
 [:s "Covilhanense" ["castelo-branco" "covilha" "covilhanense-00230"]]
 [:s "Automóvel Ajar" ["coimbra" "lousa" "automovel-ajar-00231"]]
 [:s "Arganilense" ["coimbra" "arganil" "arganilense-00232"]]
 [:s "Azambuja" ["lisboa" "azambuja" "azambuja-00233"]]
 [:s "M. R. Ascenção" ["guarda" "seia" "mr-ascencao-00235"]]
 [:s "Amadora" ["lisboa" "amadora" "amadora-00237"]]
 [:s "Alvaiázere" ["leiria" "alvaiazere" "alvaiazere-00239"]]
 [:s
  "Aguiarense"
  ["vila-real" "vila-pouca-de-aguiar" "aguiarense-00240"]]
 [:s "Escola De Condução Nisense" [nil "nisense-00241"]]
 [:s "Mealhada" ["aveiro" "mealhada" "mealhada-00243"]]
 [:s "Escola De Condução Elvense" [nil "elvense-00245"]]
 [:s "Soure" ["coimbra" "soure" "soure-00246"]]
 [:s "Crato" ["portalegre" "crato" "crato-00248"]]
 [:s "Calipolense" ["faro" "lagoa" "calipolense-00249"]]
 [:s
  "A Ideal - Esposende"
  ["braga" "esposende" "a-ideal-de-esposende-00256"]]
 [:s "Sambrasense" ["faro" "sao-bras-de-alportel" "sambrasense-00259"]]
 [:s "Aljustrelense" ["beja" "aljustrel" "aljustrelense-00260"]]
 [:s "Covas" ["viana-do-castelo" "moncao" "covas-00266"]]
 [:s
  "Automobilista - Moura"
  ["beja" "moura" "automobilista-de-moura-00267"]]
 [:s "Campo Maior" ["portalegre" "campo-maior" "campo-maior-00268"]]
 [:s "Escola De Condução Siiimpleavis" [nil "siiimpleavis-00269"]]
 [:s "Victória" ["beja" "beja" "vitoria-00272"]]
 [:s "Bom Sucesso" ["portalegre" "alter-do-chao" "bom-sucesso-00283"]]
 [:s
  "A Poiarense"
  ["coimbra" "vila-nova-de-poiares" "a-poiarense-00287"]]
 [:s "Vasco da Gama" ["beja" "vidigueira" "vasco-da-gama-00288"]]
 [:s "Arouquense" ["aveiro" "arouca" "arouquense-00290"]]
 [:s "Caminhense" ["viana-do-castelo" "caminha" "caminhense-00294"]]
 [:s "Sabugalense" ["guarda" "sabugal" "sabugalense-00295"]]
 [:s "Sousel" ["portalegre" "sousel" "sousel-00296"]]
 [:s "Campanhã" ["porto" "porto" "campanha-00297"]]
 [:s
  "Cabeceirense"
  ["braga" "cabeceiras-de-basto" "cabeceirense-00299"]]
 [:s
  "Escola De Condução Unidos Do Volante"
  [nil "unidos-do-volante-00300"]]
 [:s "Redondo" ["evora" "redondo" "redondo-00301"]]
 [:s
  "Escola De Condução Siiimplemarinhais"
  [nil "siiimplemarinhais-00302"]]
 [:s "Vasco da Gama" ["setubal" "sines" "vasco-da-gama-00305"]]
 [:s "Penacova" ["coimbra" "penacova" "penacova-00307"]]
 [:s "Pacense" ["castelo-branco" "covilha" "pero-da-covilha-00308"]]
 [:s
  "Automobilista do Carregal do Sal"
  ["viseu" "carregal-do-sal" "automobilista-carregal-do-sal-00311"]]
 [:s
  "Moderna - Castro Daire"
  ["viseu" "castro-daire" "moderna-castro-daire-00312"]]
 [:s
  "Infante do Restelo"
  ["lisboa" "lisboa" "infante-do-restelo-00315"]]
 [:s
  "Courense"
  ["viana-do-castelo" "paredes-de-coura" "courense-00317"]]
 [:s
  "Mem Martins-Algueirão"
  ["lisboa" "sintra" "memmartins-algueirao-00318"]]
 [:s "Fronteira" ["portalegre" "fronteira" "fronteira-00319"]]
 [:s
  "Figueirense"
  ["guarda" "figueira-de-castelo-rodrigo" "figueirense-00322"]]
 [:s "Apolo" ["lisboa" "amadora" "apolo-00323"]]
 [:s "Serpa" ["beja" "serpa" "serpense-00324"]]
 [:s "Império" ["porto" "porto" "imperio-00325"]]
 [:s "Ana Paula" ["beja" "castro-verde" "ana-paula-00327"]]
 [:s "Murcense" ["vila-real" "murca" "murcense-00330"]]
 [:s "Escola De Condução O Farol" [nil "o-farol-00333"]]
 [:s "Mirandense" ["coimbra" "miranda-do-corvo" "mirandense-00334"]]
 [:s "Manteigas" ["guarda" "manteigas" "manteigas-00335"]]
 [:s "Morais" ["leiria" "leiria" "morais-00336"]]
 [:s "Reis" ["viseu" "moimenta-da-beira" "reis-00337"]]
 [:s "Escola De Condução Nelmar" [nil "nelmar-00338"]]
 [:s "Escola De Condução Mortaguense" [nil "mortaguense-00339"]]
 [:s "Nova de Esgueira" ["viseu" "mortagua" "nova-de-esgueira-00339"]]
 [:s
  "Arcuense"
  ["viana-do-castelo" "arcos-de-valdevez" "arcuense-00340"]]
 [:s "Olifradense" ["viseu" "oliveira-de-frades" "olifradense-00341"]]
 [:s "Figueirinha FHR" ["faro" "albufeira" "figueirinha-fhr-00342"]]
 [:s "Escola De Condução Nova Cuba" [nil "nova-cuba-00343"]]
 [:s "Vouzelense" ["viseu" "vouzela" "vouzelense-00344"]]
 [:s "Cambrense" ["aveiro" "vale-de-cambra" "cambrense-00347"]]
 [:s "Landim" ["braga" "vila-nova-de-famalicao" "landim-00349"]]
 [:s
  "Auto Meireles"
  ["vila-real" "peso-da-regua" "auto-meireles-00351"]]
 [:s
  "A Coroa de Vinhais"
  ["braganca" "vinhais" "a-coroa-de-vinhais-00352"]]
 [:s "Escola De Condução Cinochaves" [nil "cinochaves-00353"]]
 [:s "Auto Ansião" ["leiria" "ansiao" "auto-ansiao-00354"]]
 [:s
  "Automóvel de Tábua"
  ["coimbra" "tabua" "automovel-de-tabua-00355"]]
 [:s
  "Condeixa a Nova"
  ["coimbra" "condeixaanova" "condeixaanova-00358"]]
 [:s "Auto Montemor" ["coimbra" "montemorovelho" "automontemor-00359"]]
 [:s "Lamego" ["viseu" "lamego" "lamego-00363"]]
 [:s "Nelas" ["viseu" "nelas" "nelas-00367"]]
 [:s "Valonguense" ["porto" "valongo" "a-valonguense-00368"]]
 [:s "Planeta" ["aveiro" "aveiro" "planeta-00369"]]
 [:s "Grancoop" ["lisboa" "lisboa" "grancoop-00370"]]
 [:s "Costa Cabral" ["porto" "porto" "costa-cabral-00371"]]
 [:s "Socartas" ["setubal" "barreiro" "socartas-00372"]]
 [:s "Areosa" ["porto" "porto" "areosa-00373"]]
 [:s "Vilacondense" ["porto" "vila-do-conde" "vilacondense-00374"]]
 [:s "Escola De Condução Alverca" [nil "alverca-00375"]]
 [:s "Rainha Santa" ["coimbra" "coimbra" "rainha-santa-00376"]]
 [:s "Almacoop" ["setubal" "almada" "almacoop-00377"]]
 [:s "Nova Mafra" ["lisboa" "mafra" "nova-mafra-00378"]]
 [:s "Escola De Condução Leiriense" [nil "leiriense-00380"]]
 [:s
  "Auto Volante de Chaves"
  ["vila-real" "chaves" "auto-volante-de-chaves-00381"]]
 [:s "Escola De Condução Montalegrense" [nil "montalegrense-00382"]]
 [:s "Madureira" ["porto" "marco-de-canavezes" "madureira-00383"]]
 [:s "Académica" ["porto" "porto" "academica-00384"]]
 [:s
  "Rolante de Famalicão"
  ["braga" "vila-nova-de-famalicao" "rolante-de-famalicao-00385"]]
 [:s "Rossio-Abrantes" ["santarem" "abrantes" "rossioabrantes-00386"]]
 [:s
  "O Volante de Gondomar"
  ["porto" "gondomar" "o-volante-de-gondomar-00387"]]
 [:s "da Penha" ["faro" "faro" "penha-00388"]]
 [:s "Carcavelos" ["lisboa" "cascais" "carcavelos-00389"]]
 [:s "Ala Arriba" ["porto" "povoa-de-varzim" "ala-arriba-00390"]]
 [:s "Estremadura" ["lisboa" "azambuja" "estremadura-00392"]]
 [:s "Sameiro Nova Era" ["porto" "valongo" "sameiro-nova-era-00393"]]
 [:s "Auto Fama" ["aveiro" "agueda" "auto-fama-00394"]]
 [:s "Sacavenense" ["lisboa" "loures" "sacavenense-00395"]]
 [:s "Beira" ["porto" "vila-do-conde" "beira-00396"]]
 [:s "Estrela do Nabão" ["santarem" "tomar" "estrela-do-nabao-00398"]]
 [:s
  "A Modelo - Lobão"
  ["aveiro" "santa-maria-da-feira" "a-modelo-00399"]]
 [:s "Santa Joana" ["aveiro" "aveiro" "santa-joana-00400"]]
 [:s "Cecaco" ["lisboa" "oeiras" "cecaco-00402"]]
 [:s "Avilense" ["porto" "santo-tirso" "avilense-00403"]]
 [:s
  "Prudentes do Volante"
  ["lisboa" "sintra" "prudentes-do-volante-00404"]]
 [:s "Benficartas" ["lisboa" "lisboa" "benficartas-00405"]]
 [:s "Gaiense" ["porto" "vila-nova-de-gaia" "gaiense-00406"]]
 [:s
  "Academia Boa Viagem"
  ["coimbra" "figueira-da-foz" "boa-viagem-00407"]]
 [:s "Aurora" ["coimbra" "coimbra" "aurora-00408"]]
 [:s
  "Ideal Cartaxense"
  ["santarem" "cartaxo" "a-ideal-cartaxense-00409"]]
 [:s "Asa" ["porto" "paredes" "asa-00410"]]
 [:s "Vitória" ["porto" "gondomar" "vitoria-00411"]]
 [:s
  "Santa Maria"
  ["aveiro" "santa-maria-da-feira" "santa-maria-00412"]]
 [:s "Stop" ["leiria" "marinha-grande" "stop-00413"]]
 [:s
  "Santiaguense"
  ["setubal" "santiago-do-cacem" "santiaguense-00414"]]
 [:s "Ideal de Ovar" ["aveiro" "ovar" "a-ideal-de-ovar-00415"]]
 [:s "Silvano Saraiva" ["setubal" "montijo" "silvano-saraiva-00416"]]
 [:s "Trofense" ["porto" "trofa" "trofense-00417"]]
 [:s "Auto Quarteirense" ["faro" "loule" "autoquarteirense-00418"]]
 [:s "Andrade" ["santarem" "coruche" "andrade-00419"]]
 [:s "Escola de Condução da Maia" ["porto" "maia" "maia-00420"]]
 [:s "Belmontense" ["castelo-branco" "belmonte" "belmontense-00421"]]
 [:s
  "Proença – A - Nova"
  ["castelo-branco" "proencaanova" "proencaanova-00422"]]
 [:s "Estremocense" ["evora" "estremoz" "estremocense-00423"]]
 [:s
  "Automóvel Arrudense"
  ["lisboa" "arruda-dos-vinhos" "automovel-arrudense-00424"]]
 [:s "Ferreirense" ["beja" "ferreira-do-alentejo" "ferreirense-00425"]]
 [:s "Costa do Sol" ["lisboa" "cascais" "costa-do-sol-00426"]]
 [:s "Ti-Ta" ["lisboa" "cascais" "ti-ta-00427"]]
 [:s "Escola De Condução Amarantina" [nil "amarantina-00428"]]
 [:s "Alcanena" ["santarem" "alcanena" "alcanena-00429"]]
 [:s "A Lousadense" ["porto" "lousada" "a-lousadense-00430"]]
 [:s "Pevidense" ["braga" "guimaraes" "pevidense-00432"]]
 [:s
  "Infante de Sagres - Alcochete"
  ["setubal" "alcochete" "infante-sagres-alcochete-00433"]]
 [:s "SIIIMPLEAMAIA" ["portalegre" "portalegre" "siiimpleamaia-00434"]]
 [:s "Alpiarça" ["santarem" "alpiarca" "alpiarca-00435"]]
 [:s "Mora" ["evora" "mora" "mora-00436"]]
 [:s
  "Ferreira do Zêzere"
  ["santarem" "ferreira-do-zezere" "ferreira-do-zezere-00437"]]
 [:s "Rodascity" ["setubal" "sesimbra" "rodascity-00439"]]
 [:s "Automóvel Capote" ["lisboa" "mafra" "automovel-capote-00440"]]
 [:s "Pombal" ["leiria" "pombal" "pombal-00441"]]
 [:s "Porto Mosense" ["leiria" "porto-de-mos" "portomosense-00442"]]
 [:s
  "ESCOLA DE CONDUÇÃO CIRCULAR DE BRAGA"
  [nil "circular-de-braga-00443"]]
 [:s "A Conquistadora" ["braga" "guimaraes" "a-conquistadora-00444"]]
 [:s
  "Infante de Sagres –Albufeira"
  ["faro" "albufeira" "infante-sagresalbufeira-00445"]]
 [:s
  "O. Azul de Castro Marim"
  ["faro" "castro-marim" "o-azul-de-castro-marim-00446"]]
 [:s
  "Infante de Sagres - Vila Real de Stº António"
  ["faro"
   "vila-real-de-santo-antonio"
   "infante-sagresvila-real-de-santo-antonio-00447"]]
 [:s "ESCOLA DE CONDUÇÃO VR" [nil "vr-00447"]]
 [:s "Chamusca" ["santarem" "santarem" "chamusca-00448"]]
 [:s "Escola De Condução A3" [nil "a3-00449"]]
 [:s "Florbela" ["coimbra" "figueira-da-foz" "florbela-00450"]]
 [:s "Ourique" ["beja" "ourique" "ourique-00451"]]
 [:s "Vanessa" ["setubal" "seixal" "vanessa-00452"]]
 [:s "Costa Vicentina" ["faro" "aljezur" "costa-vicentina-00453"]]
 [:s "Rio Minho" ["lisboa" "loures" "rio-minho-00454"]]
 [:s "Nova Rota" ["lisboa" "amadora" "nova-rota-00455"]]
 [:s "Alcains" ["castelo-branco" "castelo-branco" "alcains-00456"]]
 [:s
  "Oficina do Condutor"
  ["porto" "matosinhos" "oficina-do-condutor-00457"]]
 [:s "Murtosa" ["aveiro" "murtosa" "murtosa-00458"]]
 [:s
  "Sever do Vouga"
  ["aveiro" "sever-do-vouga" "sever-do-vouga-00459"]]
 [:s "Alto Minho" ["viana-do-castelo" "valenca" "alto-minho-00460"]]
 [:s
  "Alto Nível de Albergaria-a-Velha"
  ["aveiro"
   "albergaria-a-velha"
   "alto-nivel-de-albergaria-a-velha-00461"]]
 [:s
  "A Desportiva - Espinho"
  ["aveiro" "espinho" "a-desportiva-espinho-00463"]]
 [:s
  "A Desportiva – Palácio"
  ["porto" "porto" "a-desportiva-palacio-00464"]]
 [:s
  "Escola De Condução A Desportiva (Gondomar)"
  [nil "a-desportiva-gondomar-00465"]]
 [:s
  "Escola De Condução A Desportiva (Vngaia)"
  [nil "a-desportiva-vngaia-00466"]]
 [:s
  "A Desportiva- Santo Tirso"
  ["porto" "santo-tirso" "a-desportiva-santo-tirso-00467"]]
 [:s "Nova Xira" ["lisboa" "vila-franca-de-xira" "nova-xira-00468"]]
 [:s "Almodovar" ["beja" "almodovar" "almodovar-00469"]]
 [:s
  "Boavista - Feira"
  ["aveiro" "santa-maria-da-feira" "boavista-feira-00470"]]
 [:s "Barcelense" ["braga" "barcelos" "barcelense-00471"]]
 [:s
  "A .Gomes - Covilhã"
  ["castelo-branco" "covilha" "a-gomescovilha-00472"]]
 [:s
  "Figueiroense"
  ["leiria" "figueiro-dos-vinhos" "figueiroense-00473"]]
 [:s "Baião" ["porto" "baiao" "baiao-00474"]]
 [:s
  "G. Gomes – Celorico da Beira"
  ["guarda" "celorico-da-beira" "g-gomes-celorico-da-beira-00475"]]
 [:s "G. Gomes – Pinhel" ["guarda" "pinhel" "g-gomes-pinhel-00476"]]
 [:s
  "Infante de Sagres - Vila do Bispo"
  ["faro" "vila-do-bispo" "infante-sagres-vila-do-bispo-00477"]]
 [:s "De Palmela" ["setubal" "palmela" "palmela-00478"]]
 [:s
  "Guedes Vieira - Póvoa do Varzim"
  ["porto" "povoa-de-varzim" "guedes-vieira-povoa-de-varzim-00479"]]
 [:s "Arraiolense" ["evora" "arraiolos" "arraiolense-00480"]]
 [:s "Escola De Condução Via Odivelas" [nil "via-odivelas-00481"]]
 [:s "Penelense" ["coimbra" "penela" "penelense-00482"]]
 [:s
  "Auto Maria da Fonte"
  ["braga" "povoa-de-lanhoso" "maria-da-fonte-00484"]]
 [:s "Requinte" ["vila-real" "alijo" "requinte-00485"]]
 [:s "Sónia" ["viana-do-castelo" "viana-do-castelo" "sonia-00486"]]
 [:s
  "Santa Maria de Óbidos"
  ["leiria" "obidos" "santa-maria-de-obidos-00487"]]
 [:s "Flor do Cávado" ["braga" "barcelos" "flor-do-cavado-00488"]]
 [:s "Couto" ["porto" "vila-nova-de-gaia" "couto-00489"]]
 [:s "Atlântida" ["lisboa" "sintra" "atlantida-00490"]]
 [:s
  "Lago Azul –Figueiró dos Vinhos"
  ["leiria"
   "figueiro-dos-vinhos"
   "lago-azul-figueiro-dos-vinhos-00491"]]
 [:s "Linda-A-Velha" ["lisboa" "oeiras" "lindaavelha-00492"]]
 [:s
  "Coimbra da Pontinha"
  ["lisboa" "odivelas" "coimbra-da-pontinha-00493"]]
 [:s "Escola De Condução Mogadourense" [nil "mogadourense-00494"]]
 [:s
  "Fornos de Algodres"
  ["guarda" "fornos-de-algodres" "fornos-de-algodres-00495"]]
 [:s
  "Técnica do Volante"
  ["castelo-branco" "castelo-branco" "tecnica-do-volante-00496"]]
 [:s "Escola De Condução Bom Sucesso" [nil "bom-sucesso-00497"]]
 [:s "Restauração" ["lisboa" "amadora" "restauracao-00498"]]
 [:s "Senhora da Hora" ["porto" "matosinhos" "senhora-da-hora-00499"]]
 [:s "Brilhante" ["porto" "matosinhos" "brilhante-00500"]]
 [:s
  "S. Cristóvão – Penalva do Castelo"
  ["viseu"
   "penalva-do-castelo"
   "s-cristovao-penalva-do-castelo-00501"]]
 [:s "Mais" ["lisboa" "loures" "mais-00502"]]
 [:s "Bom Jesus" ["braga" "braga" "bom-jesus-00504"]]
 [:s "Mário Costa" ["braga" "fafe" "mario-costa-00505"]]
 [:s "Joanense" ["braga" "vila-nova-de-famalicao" "joanense-00506"]]
 [:s "Vizelense" ["braga" "vizela" "vizelense-00507"]]
 [:s "C.C.S." ["faro" "faro" "ccs-00508"]]
 [:s
  "Infante de Sagres - Portimão I"
  ["faro" "portimao" "infante-sagresportimao-00509"]]
 [:s "Condutor Seguro" ["porto" "penafiel" "condutor-seguro-00510"]]
 [:s "Vale de Sousa" ["porto" "penafiel" "vale-de-sousa-00511"]]
 [:s
  "Cerveirense"
  ["viana-do-castelo" "vila-nova-de-cerveira" "cerveirense-00512"]]
 [:s "Escola De Condução Da Urbe" [nil "urbe-00513"]]
 [:s "Escola De Condução La Salette" [nil "la-salette-00514"]]
 [:s "Beira Mar" ["porto" "matosinhos" "beira-mar-00515"]]
 [:s
  "Santa Luzia"
  ["viana-do-castelo" "viana-do-castelo" "santa-luzia-00516"]]
 [:s "Vale do Tâmega" ["porto" "amarante" "vale-do-tamega-00517"]]
 [:s
  "Infante de Sagres - Massamá"
  ["lisboa" "sintra" "infante-sagres-massama-00518"]]
 [:s "Bela Vista" ["braga" "vila-verde" "bela-vista-vila-verde-00519"]]
 [:s "Santa Maria" ["braga" "barcelos" "santa-maria-00520"]]
 [:s "Sátão" ["viseu" "satao" "satao-00521"]]
 [:s "Paivense" ["viseu" "vila-nova-de-paiva" "paivense-00522"]]
 [:s
  "Infante de Sagres -Barreiro"
  ["setubal" "barreiro" "infante-sagres-barreiro-00523"]]
 [:s
  "Senhora D´ Aires"
  ["evora" "viana-do-alentejo" "senhora-d-aires-00524"]]
 [:s "Portas da Sé" ["braga" "braga" "portas-da-se-00525"]]
 [:s "A. Garcia" ["leiria" "porto-de-mos" "a-garcia-00526"]]
 [:s
  "Escola De Condução Miranda Do Douro"
  [nil "miranda-do-douro-00527"]]
 [:s "Beneditense" ["leiria" "alcobaca" "beneditense-00528"]]
 [:s "Marisa" ["braganca" "carrazeda-de-ansiaes" "marisa-00529"]]
 [:s "S. Cristóvão" ["vila-real" "boticas" "s-cristovao-00530"]]
 [:s
  "Sanjoanense"
  ["aveiro" "sao-joao-da-madeira" "sanjoanense-00531"]]
 [:s "Nova Gaia" ["porto" "vila-nova-de-gaia" "nova-de-gaia-00532"]]
 [:s "Académica" ["coimbra" "coimbra" "academica-00533"]]
 [:s
  "A Nova de Estarreja"
  ["aveiro" "estarreja" "a-nova-de-estarreja-00534"]]
 [:s "Pero Pinheiro" ["lisboa" "sintra" "pero-pinheiro-00535"]]
 [:s "Costa Verde" ["aveiro" "espinho" "costa-verde-00536"]]
 [:s "Triangular" ["leiria" "pombal" "triangular-00537"]]
 [:s "Amorense" ["setubal" "seixal" "amorense-00538"]]
 [:s "Oceânica" ["leiria" "nazare" "oceanica-00539"]]
 [:s "Damaia" ["lisboa" "amadora" "damaia-00540"]]
 [:s
  "Samuel Alves Pinto"
  ["porto" "vila-nova-de-gaia" "samuel-alves-pinto-00541"]]
 [:s "S. Lázaro" ["lisboa" "lisboa" "s-lazaro-00542"]]
 [:s "Lourinhã" ["lisboa" "lourinha" "lourinha-00543"]]
 [:s "Escola De Condução Terra Nova" [nil "terra-nova-00544"]]
 [:s "O Emigrante" ["viseu" "santa-comba-dao" "emigrante-00545"]]
 [:s "Citânia" ["porto" "pacos-de-ferreira" "citania-00546"]]
 [:s
  "Cortes de Setúbal"
  ["setubal" "setubal" "cortes-de-setubal-00547"]]
 [:s "Baleia" ["leiria" "peniche" "baleia-00548"]]
 [:s "Nova Torres" ["lisboa" "torres-vedras" "nova-torres-00549"]]
 [:s "A Rotunda" ["lisboa" "amadora" "a-rotunda-00550"]]
 [:s "Nobreza" ["porto" "vila-nova-de-gaia" "nobreza-00551"]]
 [:s "Manuel Leal" ["leiria" "pombal" "manuel-leal-00552"]]
 [:s "Ideal de Lousada" ["porto" "lousada" "ideal-de-lousada-00553"]]
 [:s "O Prado" ["braganca" "alfandega-da-fe" "o-prado-00554"]]
 [:s "Carta - Auto" ["braganca" "braganca" "carta-auto-00555"]]
 [:s "Idanhense" ["castelo-branco" "idanhaanova" "idanhense-00556"]]
 [:s "Âncora" ["viana-do-castelo" "caminha" "ancora-00557"]]
 [:s
  "A Valenciana"
  ["viana-do-castelo" "valenca" "a-valenciana-00558"]]
 [:s "Saturno, Ldª" ["aveiro" "mealhada" "saturno-00559"]]
 [:s "Pedroguense" ["leiria" "pedrogao-grande" "pedroguense-00560"]]
 [:s "Escola De Condução Auto Penaguião" [nil "auto-penaguiao-00561"]]
 [:s
  "Auto Dinâmica"
  ["braga" "vieira-do-minho" "auto-dinamica-vieira-do-minho-00562"]]
 [:s
  "Colinas do Cruzeiro"
  ["lisboa" "odivelas" "colinas-do-cruzeiro-00563"]]
 [:s "Marialvas" ["coimbra" "cantanhede" "marialvas-00564"]]
 [:s "Tarouca" ["viseu" "tarouca" "tarouca-00565"]]
 [:s "Mindense" ["santarem" "alcanena" "mindense-00566"]]
 [:s
  "Moderna – Sertã"
  ["castelo-branco" "serta" "moderna-serta-00567"]]
 [:s "Reguense" ["vila-real" "peso-da-regua" "reguense-00568"]]
 [:s
  "Novo Horizonte"
  ["lisboa" "torres-vedras" "novo-horizonte-00570"]]
 [:s "O Grande Prémio" ["porto" "gondomar" "o-grande-premio-00571"]]
 [:s "Zende" ["braga" "esposende" "zende-00572"]]
 [:s "Cordeiro" ["leiria" "bombarral" "cordeiro-00573"]]
 [:s "Sampaio" ["porto" "felgueiras" "sampaio-00574"]]
 [:s "Escola de Condução Numérica" ["faro" "faro" "numerica-00575"]]
 [:s
  "Auto Dinâmica - Amares"
  ["braga" "amares" "auto-dinamina-amares-00576"]]
 [:s "Reis Tabuaço" ["viseu" "tabuaco" "reis-tabuaco-00577"]]
 [:s
  "Escola De Condução Moderna - Vila Franca Das Naves"
  [nil "moderna-vila-franca-das-naves-00581"]]
 [:s "Auto Beira Côa" ["guarda" "pinhel" "auto-beira-coa-00582"]]
 [:s
  "Senhora dos Remédios"
  ["viseu" "lamego" "senhora-dos-remedios-00583"]]
 [:s
  "Infante de Sagres - Portimão II"
  ["faro" "portimao" "infante-de-sagres-portimao-ii-00584"]]
 [:s "Paço D’ Arcos" ["lisboa" "oeiras" "paco-de-arcos-00585"]]
 [:s
  "Infante de Sagres – Borba"
  ["evora" "borba" "infante-sagres-borba-00586"]]
 [:s
  "Escola De Condução Nascente Do Ave"
  [nil "nascente-do-ave-00587"]]
 [:s
  "Auto Dinâmica do Ave"
  ["braga" "vieira-do-minho" "auto-dinamica-do-ave-00587"]]
 [:s "Batalhense" ["leiria" "batalha" "batalhense-00588"]]
 [:s
  "Volante do Lima"
  ["viana-do-castelo" "ponte-de-lima" "volante-de-lima-00590"]]
 [:s "Oleirense" ["castelo-branco" "oleiros" "oleirense-00591"]]
 [:s
  "Triunfo - Fundão"
  ["castelo-branco" "fundao" "triunfo-fundao-00592"]]
 [:s
  "Escola De Condução Infante Sagres - Meda"
  [nil "infante-sagres-meda-00593"]]
 [:s "Oliveira" ["porto" "maia" "oliveira-00594"]]
 [:s "S. Bartolomeu" ["braganca" "vimioso" "s-bartolomeu-00595"]]
 [:s "Auto Nisse" ["evora" "vila-vicosa" "autonisse-00596"]]
 [:s "Maringá" ["leiria" "leiria" "maringa-00597"]]
 [:s "Salvaterra" ["lisboa" "loures" "salvaterra-00598"]]
 [:s "Verde Minho" ["braga" "vila-verde" "verde-minho-00599"]]
 [:s
  "Rainha Santa Mafalda"
  ["aveiro" "arouca" "rainha-santa-mafalda-00600"]]
 [:s "Gavião" ["portalegre" "gaviao" "gaviao-00601"]]
 [:s "Vitória" ["aveiro" "santa-maria-da-feira" "vitoria-00602"]]
 [:s "Cidade Nova" ["lisboa" "amadora" "cidade-nova-00603"]]
 [:s
  "Barquense"
  ["viana-do-castelo" "ponte-da-barca" "barquense-00605"]]
 [:s "Escola De Condução Auto São Braz" [nil "auto-sao-braz-00606"]]
 [:s
  "Infante de Sagres - Olhão"
  ["faro" "olhao" "infante-sagres-olhao-00607"]]
 [:s
  "Stº André de Barcelinhos"
  ["braga" "barcelos" "santo-andre-de-barcelinhos-00608"]]
 [:s
  "Infante de Sagres –Tavira"
  ["faro" "tavira" "infante-sagres-tavira-00609"]]
 [:s
  "Monte Agraço"
  ["lisboa" "sobral-do-monte-agraco" "monte-agraco-00610"]]
 [:s "Castrense" ["viseu" "castro-daire" "castrense-00611"]]
 [:s
  "Senhora da Esperança"
  ["castelo-branco" "covilha" "sra-esperanca-00612"]]
 [:s "Fátima" ["santarem" "ourem" "fatima-00613"]]
 [:s "Extra" ["lisboa" "loures" "extra-00614"]]
 [:s "Rotações" ["setubal" "barreiro" "rotacoes-00615"]]
 [:s
  "Moimenta da Beira"
  ["viseu" "moimenta-da-beira" "moimenta-da-beira-00616"]]
 [:s "Escola De Condução Europa" [nil "europa-00617"]]
 [:s "Santarense" ["viseu" "nelas" "santarense-00618"]]
 [:s
  "Auto Dinâmica"
  ["braga" "povoa-de-lanhoso" "auto-dinamica-povoa-de-lanhoso-00620"]]
 [:s "Penamacor" ["castelo-branco" "penamacor" "penamacor-00621"]]
 [:s "Nova em Águeda" ["aveiro" "agueda" "nova-em-agueda-00622"]]
 [:s "Estoril" ["lisboa" "cascais" "estoril-00623"]]
 [:s "Escola De Condução J.C.Drive" [nil "jcdrive-00624"]]
 [:s "José Relvas" ["santarem" "alpiarca" "jose-relvas-00625"]]
 [:s "Celas" ["coimbra" "coimbra" "celas-00626"]]
 [:s "Siiimpletunas" ["coimbra" "coimbra" "siiimpletunas-00626"]]
 [:s "Carmo" ["beja" "moura" "do-carmo-00627"]]
 [:s "Avenida" ["leiria" "figueiro-dos-vinhos" "avenida-00628"]]
 [:s
  "Conde de Marialva"
  ["santarem" "salvaterra-de-magos" "conde-de-marialva-00629"]]
 [:s "Escola De Condução De Cavaleira" [nil "cavaleira-00630"]]
 [:s "HP Dois" ["setubal" "palmela" "hp-dois-00631"]]
 [:s "Santo António" ["leiria" "obidos" "santo-antonio-00632"]]
 [:s
  "Auto Portalegre"
  ["portalegre" "portalegre" "auto-portalegre-00633"]]
 [:s
  "Infante de Sagres - Aljustrel"
  ["beja" "aljustrel" "infante-sagres-aljustrel-00634"]]
 [:s
  "Infante de Sagres -Cascais"
  ["lisboa" "cascais" "infante-de-sagrescascais-00635"]]
 [:s
  "Infante de Sagres - Lagos"
  ["faro" "lagos" "infante-sagres-lagos-00636"]]
 [:s
  "Academia Albufeira"
  ["faro" "albufeira" "academia-albufeira-00637"]]
 [:s "S. João da Talha" ["lisboa" "lisboa" "sao-joao-da-talha-00640"]]
 [:s "Sorraia" ["santarem" "coruche" "sorraia-00641"]]
 [:s
  "Infante Sagres –Miradouro"
  ["setubal" "moita" "infante-sagres-miradouro-00643"]]
 [:s "Andanças" ["setubal" "grandola" "andancas-00644"]]
 [:s
  "Escola De Condução Infante De Sagres-Loulé"
  [nil "infante-de-sagresloule-00645"]]
 [:s
  "A Ideal de Alcácer"
  ["setubal" "alcacer-do-sal" "a-ideal-de-alcacer-00646"]]
 [:s "Aliança" ["porto" "matosinhos" "alianca-00647"]]
 [:s "Loulé Trânsito" ["faro" "loule" "loule-transito-00649"]]
 [:s
  "Escola De Condução Automóvel De Macedo"
  [nil "automovel-de-macedo-00650"]]
 [:s "Escola De Condução Auto Mira" [nil "auto-mira-00651"]]
 [:s "Escola De Condução Auto-Flor" [nil "autoflor-00652"]]
 [:s "A Minhota" ["braga" "braga" "a-minhota-00653"]]
 [:s
  "Guiante de Gonçalves e Antunes"
  ["braga" "guimaraes" "guiante-00654"]]
 [:s
  "S. Salvador de Resende"
  ["viseu" "resende" "s-salvador-de-resende-00655"]]
 [:s "Vilarealense" ["vila-real" "vila-real" "vilarealense-00656"]]
 [:s "Inovadora" ["braga" "guimaraes" "inovadora-00657"]]
 [:s "Cidade Berço" ["braga" "guimaraes" "cidade-berco-00658"]]
 [:s "Aguçadourense" ["porto" "povoa-de-varzim" "agucadourense-00660"]]
 [:s "Baía de Cascais" ["lisboa" "cascais" "baia-de-cascais-00661"]]
 [:s "Quatro Ases" ["porto" "marco-de-canavezes" "quatro-ases-00662"]]
 [:s "Plátano" ["vila-real" "alijo" "platano-00663"]]
 [:s "Inês de Castro" ["coimbra" "coimbra" "ines-de-castro-00664"]]
 [:s "Mirense" ["coimbra" "mira" "mirense-00665"]]
 [:s "Segura" ["faro" "loule" "segura-00666"]]
 [:s "Ria Formosa" ["faro" "olhao" "ria-formosa-00667"]]
 [:s "A Cereja" ["castelo-branco" "fundao" "a-cereja-00668"]]
 [:s "Palma e Dores" ["beja" "beja" "palma-dores-00669"]]
 [:s
  "Loureiro e Loureiro"
  ["braga" "guimaraes" "loureiro-loureiro-00670"]]
 [:s
  "Torre, Ldª"
  ["viana-do-castelo" "viana-do-castelo" "torre-00671"]]
 [:s "Boa Nova" ["porto" "maia" "boa-nova-00672"]]
 [:s "Abadias" ["coimbra" "figueira-da-foz" "abadias-00673"]]
 [:s
  "Volante do Neiva"
  ["viana-do-castelo" "viana-do-castelo" "volante-do-neiva-00674"]]
 [:s
  "Sucesso do Lima"
  ["viana-do-castelo" "ponte-de-lima" "sucesso-de-lima-00675"]]
 [:s "Cristo Rei" ["porto" "pacos-de-ferreira" "cristo-rei-00676"]]
 [:s
  "de Torres Vedras"
  ["lisboa" "torres-vedras" "torres-vedras-00677"]]
 [:s "Formariz" ["porto" "vila-do-conde" "formariz-00678"]]
 [:s "S. São Martinho" ["braga" "guimaraes" "s-sao-martinho-00679"]]
 [:s "S. Miguel" ["braga" "vizela" "s-miguel-00680"]]
 [:s "Carmona" ["santarem" "entroncamento" "carmona-00681"]]
 [:s
  "Escola De Condução Volante De Cristal"
  [nil "volante-de-cristal-00682"]]
 [:s "Trifafe" ["braga" "fafe" "trifafe-00683"]]
 [:s "Escola De Condução Azurém" [nil "azurem-00684"]]
 [:s
  "Escola De Condução Senhora Da Graça"
  [nil "senhora-da-graca-00685"]]
 [:s "Infantado" ["lisboa" "loures" "do-infantado-00686"]]
 [:s "Celoricense" ["braga" "celorico-de-basto" "celoricense-00687"]]
 [:s "Samorense" ["santarem" "benavente" "samorense-00688"]]
 [:s "Escola De Condução Cubista" [nil "cubista-00691"]]
 [:s "Pinheiro Manso" ["porto" "paredes" "pinheiro-manso-00692"]]
 [:s "Tamariz" ["lisboa" "cascais" "tamariz-00693"]]
 [:s "Da Maceira" ["leiria" "leiria" "maceira-00694"]]
 [:s "Rota do Sol" ["leiria" "leiria" "rota-do-sol-00695"]]
 [:s "Universal" ["porto" "povoa-de-varzim" "universal-00696"]]
 [:s
  "Cidade de Gaia"
  ["porto" "vila-nova-de-gaia" "cidade-gaia-00697"]]
 [:s "De Longra" ["porto" "felgueiras" "longra-00698"]]
 [:s
  "Escola De Condução Faciforma Gaia Centro"
  [nil "faciforma-gaia-centro-00700"]]
 [:s "Ronfense" ["braga" "guimaraes" "ronfense-00701"]]
 [:s "Opção" ["braga" "vila-nova-de-famalicao" "opcao-00702"]]
 [:s
  "Nossa Senhora da Saúde"
  ["vila-real" "valpacos" "nossa-senhora-da-saude-00703"]]
 [:s "Cidade Jardim" ["porto" "maia" "cidade-jardim-00704"]]
 [:s "Pero Rodrigues" ["evora" "montemoronovo" "pero-rodrigues-00705"]]
 [:s "Luz Verde" ["setubal" "montijo" "luz-verde-00706"]]
 [:s "Europa" ["porto" "matosinhos" "europa-00707"]]
 [:s "Santo Amaro" ["vila-real" "chaves" "santo-amaro-00708"]]
 [:s "Moutinho" ["porto" "maia" "moutinho-00709"]]
 [:s "Código & Norma" ["porto" "matosinhos" "codigo-norma-00710"]]
 [:s "Benguiados" ["porto" "vila-do-conde" "benguiados-00711"]]
 [:s "Sabrosense" ["vila-real" "sabrosa" "sabrosense-00712"]]
 [:s "Mondego" ["coimbra" "montemorovelho" "mondego-00713"]]
 [:s "Da Tocha" ["coimbra" "cantanhede" "tocha-00714"]]
 [:s "Fica" ["coimbra" "oliveira-do-hospital" "fica-00715"]]
 [:s
  "Santos Pereira e Carvalho"
  ["guarda" "guarda" "santos-pereira-e-carvalho-00716"]]
 [:s "Galáctica" ["lisboa" "loures" "galactica-00717"]]
 [:s "Escola De Condução Santa Helena" [nil "santa-helena-00718"]]
 [:s "Santa Quitéria" ["porto" "lousada" "santa-quiteria-00719"]]
 [:s "S. Gonçalo" ["porto" "amarante" "s-goncalo-00720"]]
 [:s "Terra Fria" ["braganca" "braganca" "terra-fria-00722"]]
 [:s "Douriense" ["vila-real" "peso-da-regua" "douriense-00723"]]
 [:s "Ecodauto" ["setubal" "setubal" "ecodauto-00724"]]
 [:s
  "De Cernache de Bonjardim"
  ["castelo-branco" "serta" "cernache-do-bonjardim-00725"]]
 [:s
  "Alhandra Rio"
  ["lisboa" "vila-franca-de-xira" "alhandra-rio-00726"]]
 [:s "Auto Quelfes" ["faro" "olhao" "auto-quelfes-00727"]]
 [:s "Êxito" ["braganca" "braganca" "exito-00728"]]
 [:s "Prioridade" ["aveiro" "anadia" "prioridade-00729"]]
 [:s "Baguim" ["porto" "gondomar" "baguim-00730"]]
 [:s "Croca" ["porto" "penafiel" "croca-de-penafiel-00731"]]
 [:s "Belita" ["vila-real" "alijo" "belita-00732"]]
 [:s "Norteca" ["porto" "maia" "norteca-00733"]]
 [:s "Mariana" ["braga" "guimaraes" "mariana-00734"]]
 [:s "Olivolante" ["braga" "braga" "olivolante-00735"]]
 [:s "Instrutejo" ["setubal" "almada" "instrutejo-00736"]]
 [:s
  "Auto Alpendurada"
  ["porto" "marco-de-canavezes" "autoalpendurada-00737"]]
 [:s "Fasa" ["porto" "vila-do-conde" "fasa-00739"]]
 [:s "Nobel" ["aveiro" "estarreja" "nobel-00741"]]
 [:s
  "Auto Esperança"
  ["faro" "vila-real-de-santo-antonio" "auto-esperanca-00742"]]
 [:s
  "Nova Técnica"
  ["castelo-branco" "castelo-branco" "nova-tecnica-00743"]]
 [:s "De Lobão" ["aveiro" "santa-maria-da-feira" "lobao-00744"]]
 [:s "Tyrsense" ["porto" "santo-tirso" "tyrsense-00746"]]
 [:s
  "Escola De Condução Dinâmica Do Vez"
  [nil "dinamica-do-vez-00746"]]
 [:s
  "Alto das Cerejas"
  ["viana-do-castelo"
   "vila-nova-de-cerveira"
   "alto-das-cerejas-00747"]]
 [:s "Bela Vista - Braga" ["braga" "braga" "bela-vista-braga-00748"]]
 [:s "F. Guerreiro" ["faro" "silves" "f-guerreiro-00749"]]
 [:s "Rocha e Dias" ["porto" "gondomar" "rocha-dias-00750"]]
 [:s "Montelongo" ["braga" "fafe" "montelongo-00751"]]
 [:s "Ramosauto" ["evora" "estremoz" "ramosauto-00753"]]
 [:s "Escola De Condução Mira-Lima" [nil "miralima-00754"]]
 [:s "S. Mateus" ["coimbra" "soure" "s-mateus-00756"]]
 [:s "H.L." ["faro" "faro" "hl-00757"]]
 [:s "Campelos" ["lisboa" "torres-vedras" "campelos-00758"]]
 [:s "Oceâno" ["lisboa" "torres-vedras" "oceano-00759"]]
 [:s "IP4" ["vila-real" "vila-real" "ip4-00760"]]
 [:s "Escola De Condução Auto Stop" [nil "auto-stop-00760"]]
 [:s "A Nortenha" ["porto" "lousada" "a-nortenha-00761"]]
 [:s
  "Inovação"
  ["viana-do-castelo" "viana-do-castelo" "inovacao-00762"]]
 [:s "Bonfim" ["setubal" "setubal" "bonfim-00763"]]
 [:s "Joni" ["porto" "valongo" "joni-00764"]]
 [:s
  "Prova Real - Mondim de Basto"
  ["vila-real" "vila-pouca-de-aguiar" "prova-real-00765"]]
 [:s "Esteves" ["leiria" "leiria" "esteves-00766"]]
 [:s
  "Vilameanense Nobre"
  ["porto" "amarante" "vilameanense-nobre-00768"]]
 [:s "Escola De Condução Do Livramento" [nil "do-livramento-00769"]]
 [:s "De Alfragide" ["lisboa" "amadora" "alfragide-00770"]]
 [:s "Manobras" ["setubal" "setubal" "manobras-00771"]]
 [:s "Scallabis" ["lisboa" "alenquer" "scallabis-00772"]]
 [:s "Escola De Condução Prioritária" [nil "prioritaria-00773"]]
 [:s
  "Bracarense Universitária"
  ["braga" "braga" "bracarense-universitaria-00774"]]
 [:s
  "Prova Real- Arco de Baúlhe"
  ["braga" "cabeceiras-de-basto" "prova-real-arco-de-baulhe-00775"]]
 [:s
  "Escola De Condução Reis Aguiar Da Beira"
  [nil "reis-aguiar-da-beira-00776"]]
 [:s "Meadela" ["viana-do-castelo" "viana-do-castelo" "meadela-00777"]]
 [:s
  "Terras do Bouro"
  ["braga" "terras-de-bouro" "terras-de-bouro-00778"]]
 [:s "Sara" ["braga" "barcelos" "sara-00779"]]
 [:s
  "A Nova Mondinense"
  ["vila-real" "mondim-de-basto" "a-nova-mondinense-00780"]]
 [:s "A Mourinha" ["faro" "portimao" "a-mourinha-00781"]]
 [:s "Da Guia" ["leiria" "pombal" "guia-00782"]]
 [:s "Fafecidade" ["braga" "fafe" "fafecidade-00783"]]
 [:s "Desigual" ["braga" "vila-nova-de-famalicao" "desigual-00784"]]
 [:s "Mesãofriense" ["vila-real" "mesao-frio" "mesaofriense-00785"]]
 [:s "Via Murça" ["vila-real" "murca" "via-murca-00786"]]
 [:s
  "Prova Real - Rio Tinto"
  ["porto" "gondomar" "prova-real-rio-tinto-00787"]]
 [:s "Pais Neto" ["porto" "penafiel" "pais-neto-00788"]]
 [:s "Abreu" ["braga" "barcelos" "abreu-00789"]]
 [:s "Dinâmica" ["porto" "gondomar" "dinamica-00790"]]
 [:s "Colina do Sol" ["lisboa" "amadora" "colina-do-sol-00791"]]
 [:s "Juíz de Fora" ["viseu" "mortagua" "juiz-de-fora-00792"]]
 [:s "Miradouro" ["vila-real" "peso-da-regua" "miradouro-00793"]]
 [:s "Via Verde" ["braga" "vila-nova-de-famalicao" "via-verde-00794"]]
 [:s "Nascimento" ["porto" "vila-do-conde" "nascimento-00795"]]
 [:s "Instromóvel" ["lisboa" "torres-vedras" "instrumovel-00796"]]
 [:s
  "Nova de Gervide"
  ["porto" "vila-nova-de-gaia" "nova-de-gervide-00797"]]
 [:s "Jevi" ["setubal" "sesimbra" "jevi-00799"]]
 [:s "Giraldo" ["evora" "evora" "giraldo-00800"]]
 [:s "Sobre Rodas" ["portalegre" "elvas" "sobre-rodas-00801"]]
 [:s "Siiimplesado" ["setubal" "moita" "siiimplesado-00802"]]
 [:s "Novoensino" ["setubal" "santiago-do-cacem" "novoensino-00803"]]
 [:s "Galáxia" ["setubal" "montijo" "galaxia-00804"]]
 [:s "Nova Era" ["braga" "guimaraes" "nova-era-00805"]]
 [:s "S. Pedro" ["porto" "gondomar" "s-pedro-00806"]]
 [:s "Lord" ["porto" "paredes" "lord-00807"]]
 [:s "Via Pública" ["porto" "paredes" "via-publica-00808"]]
 [:s "Auto Vinhas" ["aveiro" "castelo-de-paiva" "auto-vinhas-00809"]]
 [:s
  "Volante de Celorico"
  ["braga" "celorico-de-basto" "volante-de-celorico-00810"]]
 [:s "D. Fernando" ["porto" "gondomar" "d-fernando-00811"]]
 [:s "Bejense" ["beja" "beja" "bejense-00812"]]
 [:s "Auto Cabril" ["vila-real" "vila-real" "auto-cabril-00813"]]
 [:s "Alfa" ["faro" "albufeira" "alfa-00814"]]
 [:s "Almansor" ["lisboa" "sintra" "almansor-00815"]]
 [:s "Memorial" ["porto" "marco-de-canavezes" "memorial-00816"]]
 [:s
  "Feira Nova – Ensino da Condução Automóvel"
  ["porto" "marco-de-canavezes" "feira-nova-00817"]]
 [:s "Galo" ["braga" "barcelos" "galo-00818"]]
 [:s "Realidade" ["viseu" "lamego" "a-realidade-00819"]]
 [:s "Margaride" ["porto" "felgueiras" "margaride-00820"]]
 [:s "A Paredense" ["porto" "paredes" "a-paredense-00821"]]
 [:s "Senhora Aparecida" ["porto" "lousada" "senhora-aparecida-00822"]]
 [:s "Do Mileu" ["guarda" "guarda" "mileu-00824"]]
 [:s "Eurovia" ["braganca" "braganca" "eurovia-00825"]]
 [:s "Volante Livre" ["porto" "lousada" "volante-livre-00827"]]
 [:s
  "Da Vila de A-dos-Cunhados"
  ["lisboa" "torres-vedras" "vila-de-adoscunhados-00828"]]
 [:s "Gerês" ["braga" "terras-de-bouro" "geres-00829"]]
 [:s "Douro Sul" ["viseu" "armamar" "douro-sul-00830"]]
 [:s "Escola De Condução Reis Armamar" [nil "reis-armamar-00830"]]
 [:s
  "Dinâmica Drive"
  ["braga" "povoa-de-lanhoso" "dinamica-drive-00831"]]
 [:s "Carregado" ["lisboa" "alenquer" "carregado-00832"]]
 [:s
  "Reta Segura"
  ["braga" "vila-nova-de-famalicao" "reta-segura-00833"]]
 [:s "Viazul" ["lisboa" "mafra" "viazul-00835"]]
 [:s "O Volante" ["porto" "santo-tirso" "o-volante-00836"]]
 [:s "Terrugem" ["lisboa" "sintra" "terrugem-00837"]]
 [:s "Rosinha" ["porto" "povoa-de-varzim" "rosinha-00838"]]
 [:s "Zé Ferreira" ["braga" "braga" "ze-ferreira-00839"]]
 [:s "Avintes" ["porto" "vila-nova-de-gaia" "avintes-00840"]]
 [:s "Paionense" ["coimbra" "figueira-da-foz" "paionense-00841"]]
 [:s "Duarte" ["lisboa" "cadaval" "duarte-00842"]]
 [:s "Escola De Condução Vale Do Caima" [nil "vale-do-caima-00843"]]
 [:s "S. Gualter" ["braga" "guimaraes" "s-gualter-00844"]]
 [:s
  "S. Martinho do Bispo"
  ["coimbra" "coimbra" "s-martinho-do-bispo-00845"]]
 [:s
  "Ponte de Lima"
  ["viana-do-castelo" "ponte-de-lima" "ponte-de-lima-00846"]]
 [:s "Escola De Condução Varzim" [nil "varzim-00847"]]
 [:s
  "Escola De Condução Sargaço & Sargaço"
  [nil "sargaco-sargaco-00848"]]
 [:s "Quatro Rodas" ["porto" "felgueiras" "quatro-rodas-00849"]]
 [:s "Rodoviária" ["porto" "valongo" "rodoviaria-00850"]]
 [:s "Sousa e Batista" ["porto" "vila-do-conde" "sousa-batista-00851"]]
 [:s "Campo" ["porto" "valongo" "campo-00852"]]
 [:s "Águas Santas" ["porto" "maia" "aguas-santas-00853"]]
 [:s
  "Escola De Condução E Formação Profissional Da Marinha Grande"
  [nil "e-formacao-profissional-da-marinha-grande-00854"]]
 [:s
  "Batalhense da Marinha Grande"
  ["leiria" "marinha-grande" "batalhense-da-marinha-grande-00855"]]
 [:s "Freamundense" ["porto" "pacos-de-ferreira" "freamundense-00856"]]
 [:s "Destinus" ["santarem" "ourem" "destinus-00857"]]
 [:s "Atlântica" ["porto" "paredes" "atlantica-00858"]]
 [:s "Serrana" ["castelo-branco" "covilha" "serrana-00859"]]
 [:s
  "Da Quinta da Piedade"
  ["lisboa" "vila-franca-de-xira" "quinta-da-piedade-00861"]]
 [:s
  "Arcos de Valdevez"
  ["viana-do-castelo" "arcos-de-valdevez" "arcos-de-valdevez-00862"]]
 [:s "Portugália" ["porto" "paredes" "portugalia-00863"]]
 [:s "Trinca" ["lisboa" "vila-franca-de-xira" "trinca-00864"]]
 [:s "Princesa" ["braganca" "braganca" "princesa-00865"]]
 [:s
  "Termas de S. Vicente"
  ["porto" "penafiel" "termas-de-s-vicente-00866"]]
 [:s "Cister" ["leiria" "alcobaca" "cister-00867"]]
 [:s "D. Carlos" ["leiria" "alcobaca" "d-carlos-00868"]]
 [:s "D. Dinis" ["leiria" "leiria" "d-dinis-00869"]]
 [:s
  "Tortosendense"
  ["castelo-branco" "covilha" "do-tortosendo-00870"]]
 [:s "Atlas" ["lisboa" "loures" "atlas-00871"]]
 [:s
  "Batalhense de Leiria"
  ["leiria" "leiria" "batalhense-de-leiria-00872"]]
 [:s "Egas Moniz" ["lisboa" "cascais" "egas-moniz-00873"]]
 [:s "Escola De Condução Algarve" [nil "algarve-00874"]]
 [:s "Ermesindense" ["porto" "valongo" "ermesindense-00875"]]
 [:s "Ideal de Paredes" ["porto" "paredes" "ideal-de-paredes-00876"]]
 [:s
  "Auto Dinâmica - Ribeira de Pena"
  ["vila-real"
   "ribeira-da-pena"
   "auto-dinamica-ribeira-de-pena-00877"]]
 [:s
  "Castelo Branco"
  ["castelo-branco" "castelo-branco" "castelo-branco-00879"]]
 [:s "Monte Redondo" ["leiria" "leiria" "monte-redondo-00880"]]
 [:s
  "Coimbra do Forte"
  ["lisboa" "vila-franca-de-xira" "coimbra-do-forte-00881"]]
 [:s "Via Rápida" ["aveiro" "castelo-de-paiva" "via-rapida-00882"]]
 [:s "Alta Roda" ["lisboa" "torres-vedras" "alta-roda-00883"]]
 [:s
  "Alternativa"
  ["guarda" "vila-nova-de-foz-coa" "alternativa-00884"]]
 [:s "Milénium" ["porto" "matosinhos" "milenium-00885"]]
 [:s "Vermar" ["porto" "povoa-de-varzim" "vermar-00887"]]
 [:s
  "Coimbra da Póvoa de Santa Iria"
  ["lisboa" "vila-franca-de-xira" "coimbra-da-povoa-00889"]]
 [:s
  "Ribeirense"
  ["braga" "vila-nova-de-famalicao" "ribeirense-00890"]]
 [:s
  "Coimbra de Vialonga"
  ["lisboa" "vila-franca-de-xira" "coimbra-de-vialonga-00891"]]
 [:s "Américo e Pires" ["guarda" "almeida" "americo-e-pires-00892"]]
 [:s "X 2000" ["porto" "matosinhos" "x2000-00893"]]
 [:s
  "Auto Volante das Serras de Ansião"
  ["leiria" "ansiao" "auto-volante-das-serras-de-ansiao-00894"]]
 [:s
  "Mem Martins – D. Afonso V"
  ["lisboa" "sintra" "memmartins-d-afonso-v-00895"]]
 [:s
  "A Moderna de Lustosa"
  ["porto" "lousada" "a-moderna-de-lustosa-00896"]]
 [:s "Salizcruz" ["viseu" "carregal-do-sal" "saliscruz-00897"]]
 [:s "Semáforo" ["viseu" "viseu" "semaforo-00898"]]
 [:s
  "Soutelos"
  ["viana-do-castelo" "paredes-de-coura" "soutelos-00899"]]
 [:s
  "Escola De Condução Armando Machado Da Cruz"
  [nil "armando-machado-da-cruz-00900"]]
 [:s
  "Escola de Condução Grand Tour"
  ["viseu" "tondela" "grand-tour-00900"]]
 [:s "Armando Cruz" ["viseu" "viseu" "armando-cruz-00901"]]
 [:s "Ancorensis" ["viana-do-castelo" "caminha" "ancorensis-00902"]]
 [:s "Freamundus" ["porto" "pacos-de-ferreira" "freamundus-00903"]]
 [:s
  "Jorge Justino-Almeirim"
  ["santarem" "almeirim" "jorge-justino-almeirim-00904"]]
 [:s "Zé Manel" ["braga" "barcelos" "ze-manel-00906"]]
 [:s
  "Infante de Almancil"
  ["faro" "loule" "infante-de-almancil-00907"]]
 [:s "Roda Livre" ["porto" "pacos-de-ferreira" "roda-livre-00908"]]
 [:s "Nova de Esmoriz" ["aveiro" "ovar" "nova-de-esmoriz-00909"]]
 [:s "Escola De Condução 100%" [nil "100-00910"]]
 [:s "Margô" ["lisboa" "sintra" "margo-00911"]]
 [:s
  "Bordalo Pinheiro"
  ["leiria" "caldas-da-rainha" "bordalo-pinheiro-00913"]]
 [:s "Escola De Condução Fonseca" [nil "fonseca-00914"]]
 [:s "Nova Moita" ["setubal" "moita" "nova-moita-00915"]]
 [:s "Elite" ["lisboa" "lisboa" "elite-00916"]]
 [:s
  "Santa Luzia –Darque"
  ["viana-do-castelo" "viana-do-castelo" "santa-luzia-darque-00917"]]
 [:s "Volantiarte" ["viana-do-castelo" "melgaco" "volantiarte-00918"]]
 [:s "Miróbriga" ["setubal" "santiago-do-cacem" "mirobriga-00920"]]
 [:s
  "Maia e Ferreira"
  ["castelo-branco" "serta" "maia-e-ferreira-00921"]]
 [:s "Europeia" ["braga" "vila-nova-de-famalicao" "europeia-00923"]]
 [:s "Baixa de Lisboa" ["lisboa" "lisboa" "baixa-de-lisboa-00924"]]
 [:s "São Bernardo" ["santarem" "torres-novas" "sao-bernardo-00925"]]
 [:s "Bom Jesus - Lomar" ["braga" "braga" "bom-jesus-lomar-00926"]]
 [:s
  "A Citadina"
  ["braga" "vila-nova-de-famalicao" "a-citadina-00927"]]
 [:s "Esco 2000" ["santarem" "ourem" "esco-2000-00928"]]
 [:s
  "Auto Vilaverdense"
  ["braga" "vila-verde" "auto-vilaverdense-00929"]]
 [:s "Santa Eulália" ["braga" "vizela" "santa-eulalia-00930"]]
 [:s
  "J. Guerreiro e Batista"
  ["setubal" "santiago-do-cacem" "j-guerreio-e-batista-00931"]]
 [:s
  "Nossa Senhora da Paz"
  ["santarem" "benavente" "nossa-senhora-da-paz-00932"]]
 [:s "Tecnidrive" ["setubal" "seixal" "tecnidrive-00934"]]
 [:s "Gondomar Jovem" ["porto" "gondomar" "gondomar-jovem-00935"]]
 [:s
  "Volante do Minho"
  ["braga" "vila-verde" "volante-do-minho-00936"]]
 [:s "Pedras Rubras" ["porto" "maia" "pedras-rubras-00937"]]
 [:s "Via Douro" ["porto" "gondomar" "via-douro-00938"]]
 [:s "Paços Nova" ["porto" "pacos-de-ferreira" "pacos-nova-00939"]]
 [:s "Jardim do Radial" ["lisboa" "odivelas" "jardim-de-radial-00940"]]
 [:s
  "Cidade do Barreiro"
  ["setubal" "barreiro" "cidade-do-barreiro-00942"]]
 [:s "Terceiro Milénio" ["faro" "portimao" "terceiro-milenio-00943"]]
 [:s
  "Santa Marinha - Autoagra"
  ["porto" "marco-de-canavezes" "santa-marinha-autoagra-00944"]]
 [:s "S. Romão" ["porto" "trofa" "s-romao-00947"]]
 [:s "Infante de Évora" ["evora" "evora" "infante-de-evora-00948"]]
 [:s
  "Ideal Alcanedense"
  ["santarem" "santarem" "ideal-alcanedense-00949"]]
 [:s "Ericeirense" ["lisboa" "mafra" "ericeirense-00950"]]
 [:s "VIP" ["porto" "vila-nova-de-gaia" "vip-00951"]]
 [:s
  "S. Cristóvão do Freixo"
  ["viana-do-castelo" "ponte-de-lima" "s-cristovao-do-freixo-00952"]]
 [:s "Independente" ["lisboa" "loures" "independente-00953"]]
 [:s "Ponte Nova" ["braga" "barcelos" "ponte-nova-00954"]]
 [:s "Litoral" ["braga" "esposende" "litoral-00955"]]
 [:s "Alcaide" ["braga" "barcelos" "alcaide-00956"]]
 [:s "Cunha e Ferreira" ["faro" "silves" "cunha-e-ferreira-00957"]]
 [:s "A Gruta" ["leiria" "porto-de-mos" "a-gruta-00958"]]
 [:s
  "Nossa Senhora de Fátima"
  ["coimbra" "tabua" "nossa-senhora-de-fatima-00959"]]
 [:s "Sport" ["porto" "penafiel" "sport-00960"]]
 [:s
  "Batalhense de Alcobaça"
  ["leiria" "alcobaca" "batalhense-alcobaca-00961"]]
 [:s
  "Semáforo da Damaia"
  ["lisboa" "amadora" "semaforo-da-damaia-00963"]]
 [:s "ESCOLA DE CONDUÇÃO FLOR DO ZÊZERE" [nil "flor-do-zezere-00965"]]
 [:s "Mundial" ["braga" "barcelos" "mundial-00966"]]
 [:s
  "Guiarte de José Manuel Moreira e Carvalho"
  ["porto" "trofa" "guiarte-00967"]]
 [:s "R.Y.S" ["porto" "felgueiras" "rys-00968"]]
 [:s "Granja do Ulmeiro" ["coimbra" "soure" "granja-do-ulmeiro-00969"]]
 [:s "Euro 2000" ["porto" "vila-nova-de-gaia" "euro-2000-00970"]]
 [:s "Triângulo Azul" ["lisboa" "sintra" "triangulo-azul-00971"]]
 [:s "Recarei" ["porto" "paredes" "recarei-00972"]]
 [:s "Novais Unipessoal" ["faro" "lagos" "novais-unipessoal-00973"]]
 [:s "Conduir" ["viseu" "viseu" "conduir-00974"]]
 [:s "Vouga" ["aveiro" "albergaria-a-velha" "vouga-00976"]]
 [:s "Infante de Queluz" ["lisboa" "sintra" "infante-de-queluz-00977"]]
 [:s "Nova Almada" ["setubal" "almada" "nova-almada-00978"]]
 [:s "Rio de Mouro" ["lisboa" "sintra" "rio-de-mouro-00979"]]
 [:s "Saber Mais" ["castelo-branco" "covilha" "saber-mais-00980"]]
 [:s "AJS de Aurora e José Sereno" ["porto" "maia" "ajs-00981"]]
 [:s "Miguel Ângelo" ["viseu" "mangualde" "miguel-angelo-00982"]]
 [:s "Máxima" ["porto" "trofa" "maxima-00983"]]
 [:s "Caravela" ["lisboa" "sintra" "caravela-00984"]]
 [:s "Carbar" ["aveiro" "castelo-de-paiva" "carbar-00985"]]
 [:s "Campense" ["porto" "santo-tirso" "campense-00986"]]
 [:s "Cinfanense" ["viseu" "cinfaes" "cinfanense-00989"]]
 [:s "Cruzeiro" ["braganca" "braganca" "cruzeiro-00990"]]
 [:s "Freitas" ["porto" "vila-nova-de-gaia" "freitas-00991"]]
 [:s "Escola De Condução Vieira (Foz)" [nil "vieira-foz-01000"]]
 [:s "Auto Formadora" ["viseu" "viseu" "auto-formadora-01001"]]
 [:s
  "Mercês-Serra das Minas"
  ["lisboa" "sintra" "merces-serra-das-minas-01003"]]
 [:s "Lidador" ["porto" "maia" "lidador-01004"]]
 [:s "Escola De Condução Gilão" [nil "gilao-01005"]]
 [:s "Escola De Condução Carlos Vaz" [nil "carlos-vaz-01007"]]
 [:s "Escola De Condução Dom Pedro" [nil "dom-pedro-01008"]]
 [:s "Do Algoz" ["faro" "silves" "do-algoz-01009"]]
 [:s "Rio Vizela" ["porto" "santo-tirso" "rio-vizela-01011"]]
 [:s "Bagagem" ["leiria" "batalha" "bagagem-01012"]]
 [:s "Corroios PMR" ["setubal" "seixal" "corroios-pmr-01013"]]
 [:s "Rota da Estrela" ["guarda" "seia" "rota-da-estrela-01014"]]
 [:s "Faial" ["braga" "braga" "faial-01015"]]
 [:s "Onda" ["porto" "vila-nova-de-gaia" "onda-01016"]]
 [:s
  "Moleiro, Amaro e Oliveira"
  ["coimbra" "cantanhede" "moleiro-amaro-e-oliveira-01017"]]
 [:s
  "Lanheses"
  ["viana-do-castelo" "viana-do-castelo" "lanheses-01018"]]
 [:s "De Tires" ["lisboa" "cascais" "tires-01020"]]
 [:s "Escola De Condução Prisma" [nil "prisma-01021"]]
 [:s "Penedonense" ["viseu" "penedono" "penedonense-01022"]]
 [:s "Novo Rumo" ["viseu" "santa-comba-dao" "novo-rumo-01023"]]
 [:s "Escola De Condução Go Driving" [nil "go-driving-01024"]]
 [:s "Romana" ["braga" "guimaraes" "romana-01025"]]
 [:s
  "Estrela do Arda"
  ["aveiro" "castelo-de-paiva" "estrela-do-arda-01026"]]
 [:s "Via Net" ["lisboa" "sintra" "via-net-01027"]]
 [:s
  "Ases da Estrada"
  ["braga" "vila-nova-de-famalicao" "ases-da-estrada-01028"]]
 [:s "Oiã" ["aveiro" "oliveira-do-bairro" "oia-01029"]]
 [:s "Tadim" ["braga" "braga" "tadim-01030"]]
 [:s "Os Loios" ["setubal" "barreiro" "os-loios-01031"]]
 [:s "Fénix" ["porto" "gondomar" "fenix-01032"]]
 [:s "Portela" ["lisboa" "loures" "portela-01033"]]
 [:s "S. Bento" ["braga" "barcelos" "s-bento-01034"]]
 [:s "Águia de Aveiro" ["aveiro" "aveiro" "aguia-de-aveiro-01035"]]
 [:s "Teixoso" ["castelo-branco" "covilha" "teixoso-01036"]]
 [:s "Palma Cordeiro" ["setubal" "sesimbra" "palma-cordeiro-01037"]]
 [:s "Assunção" ["porto" "santo-tirso" "assuncao-01038"]]
 [:s "Escola De Condução A Nova" [nil "a-nova-01039"]]
 [:s "Impacto" ["aveiro" "santa-maria-da-feira" "impacto-01040"]]
 [:s "Escola De Condução Almancilense" [nil "almancilense-01041"]]
 [:s "Almancil" ["faro" "loule" "almancil-01042"]]
 [:s "Escola De Condução S Jorge" [nil "s-jorge-01043"]]
 [:s "Espinho" ["aveiro" "espinho" "espinho-01045"]]
 [:s
  "Santa Maria -Arrifana"
  ["aveiro" "santa-maria-da-feira" "santa-maria-arrifana-01046"]]
 [:s "Santa Marinhense" ["porto" "baiao" "santa-marinhense-01047"]]
 [:s
  "Boavista-Lamas"
  ["aveiro" "santa-maria-da-feira" "boavista-lamas-01048"]]
 [:s "Castêlo da Maia" ["porto" "maia" "castelo-da-maia-01049"]]
 [:s "Academia do Volante" ["faro" "faro" "academia-do-volante-01050"]]
 [:s "Projecto 4" ["porto" "gondomar" "projecto-4-01051"]]
 [:s "Good" ["lisboa" "mafra" "good-01052"]]
 [:s "Olho Azul" ["beja" "odemira" "olho-azul-01053"]]
 [:s "Quinta das Fontes" ["braga" "braga" "quinta-das-fontes-01054"]]
 [:s "O Basto" ["braga" "cabeceiras-de-basto" "o-basto-01055"]]
 [:s "D. Chama" ["vila-real" "valpacos" "d-chama-01057"]]
 [:s "Escola De Condução S Verissimo" [nil "s-verissimo-01058"]]
 [:s "Meiriformação" ["leiria" "pombal" "meiriformacao-01059"]]
 [:s
  "Madalena e Fonseca"
  ["setubal" "almada" "madalena-e-fonseca-01060"]]
 [:s "Via Maior" ["santarem" "rio-maior" "via-maior-01061"]]
 [:s "Bateira" ["viseu" "cinfaes" "bateira-01062"]]
 [:s "Júlio Dinis" ["aveiro" "ovar" "julio-dinis-01063"]]
 [:s "Oeste" ["leiria" "caldas-da-rainha" "oeste-01064"]]
 [:s "Escola De Condução S Tiago" [nil "s-tiago-01067"]]
 [:s "Visiense" ["viseu" "viseu" "visiense-01068"]]
 [:s "Zita" ["coimbra" "cantanhede" "zita-01069"]]
 [:s "S. João" ["viseu" "cinfaes" "s-joao-01070"]]
 [:s "Britense" ["braga" "guimaraes" "britense-01071"]]
 [:s
  "Euro Boavista"
  ["porto" "vila-nova-de-gaia" "euro-boavista-01072"]]
 [:s "Baptista" ["viseu" "sao-pedro-do-sul" "baptista-01073"]]
 [:s "Estrada Segura" ["viseu" "viseu" "estrada-segura-01074"]]
 [:s "Escola De Condução Auto Dão" [nil "auto-dao-01075"]]
 [:s "De Repeses" ["viseu" "viseu" "repeses-01075"]]
 [:s "Via Única" ["porto" "gondomar" "via-unica-01076"]]
 [:s
  "Ponto de Partida"
  ["vila-real" "vila-real" "ponto-de-partida-01077"]]
 [:s "Lusíada" ["braga" "amares" "lusiada-01078"]]
 [:s "Mota Galiza" ["porto" "porto" "mota-galiza-01079"]]
 [:s "Escola De Condução Prestige" [nil "prestige-01079"]]
 [:s "Marvila" ["lisboa" "lisboa" "marvila-01080"]]
 [:s "Boliqueime" ["faro" "loule" "boliqueime-01081"]]
 [:s
  "Estrela de Albergaria dos Doze"
  ["leiria" "pombal" "estrela-de-albergaria-dos-doze-01082"]]
 [:s "Moncarapachense" ["faro" "olhao" "moncarapachense-01083"]]
 [:s "Driver´s Club" ["setubal" "sesimbra" "drivers-club-01084"]]
 [:s "S. Domingos" ["santarem" "santarem" "s-domingos-01085"]]
 [:s "Lagoense" ["faro" "lagoa" "lagoense-01086"]]
 [:s "Via S" ["aveiro" "anadia" "via-s-01087"]]
 [:s
  "Cercal do Alentejo"
  ["setubal" "santiago-do-cacem" "cercal-do-alentejo-01088"]]
 [:s "Caxariense" ["santarem" "ourem" "caxariense-01089"]]
 [:s
  "Vilar do Paraíso"
  ["porto" "vila-nova-de-gaia" "vilar-paraiso-01092"]]
 [:s "Aguada de Cima" ["aveiro" "agueda" "aguada-de-cima-01093"]]
 [:s "Nova Geração" ["braga" "guimaraes" "nova-geracao-01094"]]
 [:s
  "Volante da Foz"
  ["coimbra" "figueira-da-foz" "volante-da-foz-01095"]]
 [:s "Abragonense" ["porto" "penafiel" "abragonense-01096"]]
 [:s "De Canidelo" ["porto" "vila-nova-de-gaia" "canidelo-01098"]]
 [:s "Escola De Condução Sobradense" [nil "sobradense-01099"]]
 [:s
  "Praia da Claridade"
  ["coimbra" "figueira-da-foz" "praia-da-claridade-01100"]]
 [:s
  "Sentido Único"
  ["coimbra" "figueira-da-foz" "sentido-unico-01101"]]
 [:s "Valverde" ["porto" "felgueiras" "valverde-01102"]]
 [:s "Carapeços" ["braga" "barcelos" "carapecos-01103"]]
 [:s "Escola de Condução BXB" ["setubal" "moita" "bxb-01104"]]
 [:s
  "Escola De Condução Segurança Máxima Premium"
  [nil "seguranca-maxima-premium-01105"]]
 [:s "Estádio" ["porto" "porto" "estadio-01106"]]
 [:s "Carreira" ["santarem" "tomar" "carreira-01108"]]
 [:s "Estrada Real" ["porto" "vila-nova-de-gaia" "estrada-real-01109"]]
 [:s "Escola De Condução Palhaça" [nil "palhaca-01110"]]
 [:s "Via Arrábida" ["porto" "vila-nova-de-gaia" "via-arrabida-01111"]]
 [:s "Briosa" ["coimbra" "coimbra" "briosa-01112"]]
 [:s "Escola De Condução Manuel Sampaio" [nil "manuel-sampaio-01113"]]
 [:s
  "Rota do Sol da Caranguejeira"
  ["leiria" "leiria" "rota-do-sol-da-caranguejeira-01114"]]
 [:s "Previsegur" ["setubal" "palmela" "previsegur-01115"]]
 [:s
  "Sentido Reversível"
  ["porto" "matosinhos" "sentido-reversivel-01117"]]
 [:s "Ideal de Baltar" ["porto" "paredes" "ideal-de-baltar-01118"]]
 [:s
  "Irmãos Tavares"
  ["viseu" "vila-nova-de-paiva" "irmaos-tavares-01119"]]
 [:s "Traquina" ["santarem" "abrantes" "traquina-01120"]]
 [:s "Vale do Tamel" ["braga" "barcelos" "vale-do-tamel-01121"]]
 [:s "Costa Azul" ["setubal" "seixal" "costa-azul-01122"]]
 [:s
  "Arrifanense"
  ["aveiro" "santa-maria-da-feira" "arrifanense-01123"]]
 [:s "Lordelo" ["porto" "porto" "lordelo-01124"]]
 [:s "Rio Neiva" ["braga" "esposende" "rio-neiva-01125"]]
 [:s
  "Nova da Feira"
  ["aveiro" "santa-maria-da-feira" "nova-da-feira-01126"]]
 [:s "Sandinense" ["porto" "vila-nova-de-gaia" "sandinense-01127"]]
 [:s "Verde Vila" ["braga" "vila-verde" "vila-verde-01128"]]
 [:s "Rio de Moinhos" ["porto" "penafiel" "rio-de-moinhos-01129"]]
 [:s "Stop Real" ["vila-real" "vila-real" "stop-real-01130"]]
 [:s "Miraflores" ["lisboa" "oeiras" "miraflores-01131"]]
 [:s "Escola De Condução Auto Azemeis" [nil "auto-azemeis-01132"]]
 [:s "Angeiras" ["porto" "matosinhos" "angeiras-01133"]]
 [:s "Guerra" ["porto" "vila-nova-de-gaia" "guerra-01135"]]
 [:s "Nova de Vagos" ["aveiro" "vagos" "nova-de-vagos-01136"]]
 [:s "Guifões" ["porto" "matosinhos" "guifoes-01137"]]
 [:s "Instrusol" ["setubal" "barreiro" "instrusol-01138"]]
 [:s
  "A Soberana de Portimão"
  ["faro" "portimao" "a-soberana-de-portimao-01140"]]
 [:s "Odemirense" ["beja" "odemira" "odemirense-01141"]]
 [:s
  "A Mourinha de Stº Teotónio"
  ["beja" "odemira" "a-mourinha-de-s-teotonio-01142"]]
 [:s "Aveirense" ["aveiro" "aveiro" "aveirense-01143"]]
 [:s "3 Ás" ["setubal" "setubal" "3-as-01144"]]
 [:s
  "A Ideal de Apúlia"
  ["braga" "esposende" "a-ideal-de-apulia-01145"]]
 [:s "Paranhos" ["porto" "porto" "paranhos-01146"]]
 [:s "Nova Alcoa" ["leiria" "alcobaca" "nova-alcoa-01147"]]
 [:s
  "Auto Romariz"
  ["aveiro" "santa-maria-da-feira" "auto-romariz-01148"]]
 [:s "Auto Carnaxide" ["lisboa" "oeiras" "auto-carnaxide-01149"]]
 [:s "Global" ["porto" "matosinhos" "global-01150"]]
 [:s "Vale Figueira" ["lisboa" "loures" "vale-figueira-01151"]]
 [:s "5 Quinas" ["aveiro" "santa-maria-da-feira" "5-quinas-01152"]]
 [:s "Jante Integral" ["lisboa" "odivelas" "jante-integral-01153"]]
 [:s "Ariz" ["porto" "marco-de-canavezes" "ariz-01154"]]
 [:s
  "Mira Maia Guardeiras"
  ["porto" "maia" "miramaia-guardeiras-01155"]]
 [:s
  "Ferreira e Honrado"
  ["evora" "reguengos-de-monsaraz" "ferreira-honrado-01156"]]
 [:s "Instrucosta" ["setubal" "almada" "instrucosta-01157"]]
 [:s "Fatimense" ["santarem" "ourem" "fatimense-01158"]]
 [:s "Vila Portel" ["evora" "portel" "vila-portel-01159"]]
 [:s "Cidade Florida" ["santarem" "abrantes" "cidade-florida-01161"]]
 [:s "Juncal" ["santarem" "almeirim" "do-juncal-01162"]]
 [:s "Riachense" ["leiria" "batalha" "riachense-01163"]]
 [:s "Freixieiro" ["porto" "matosinhos" "freixieiro-01164"]]
 [:s "Rodovia" ["viseu" "oliveira-de-frades" "rodovia-01165"]]
 [:s "Venda Nova" ["porto" "gondomar" "venda-nova-01166"]]
 [:s "De Livração" ["porto" "marco-de-canavezes" "livracao-01167"]]
 [:s "Canedo" ["aveiro" "santa-maria-da-feira" "canedo-01168"]]
 [:s "Boa Formação" ["porto" "paredes" "boa-formacao-01169"]]
 [:s
  "Esteves da Vieira"
  ["leiria" "marinha-grande" "esteves-da-vieira-01170"]]
 [:s "Mação" ["santarem" "macao" "macao-01171"]]
 [:s
  "Dois Volantes"
  ["porto" "pacos-de-ferreira" "dois-volantes-01172"]]
 [:s "Nova Via" ["braganca" "mirandela" "nova-via-01173"]]
 [:s "Vila Lusitano" ["evora" "evora" "vila-lusitano-01174"]]
 [:s "Santa Eugénia" ["vila-real" "chaves" "santa-eugenia-01175"]]
 [:s "Golfinho" ["setubal" "setubal" "golfinho-01176"]]
 [:s
  "S. Vicente de Alfena"
  ["porto" "valongo" "s-vicente-de-alfena-01177"]]
 [:s "O Motorista" ["porto" "felgueiras" "o-motorista-01179"]]
 [:s "Vila de Oeiras" ["lisboa" "oeiras" "vila-de-oeiras-01180"]]
 [:s "Ebenézer" ["lisboa" "odivelas" "ebenezer-01181"]]
 [:s "Rio Tinto" ["porto" "gondomar" "rio-tinto-01182"]]
 [:s
  "Das Fontes"
  ["braga" "vila-nova-de-famalicao" "das-fontes-01183"]]
 [:s
  "Viaensinauto"
  ["lisboa" "vila-franca-de-xira" "viaensinauto-01184"]]
 [:s "Todos os Santos" ["santarem" "cartaxo" "todos-os-santos-01185"]]
 [:s "Rio Ave" ["braga" "vila-nova-de-famalicao" "rio-ave-01186"]]
 [:s "Escola De Condução Chelas" [nil "chelas-01187"]]
 [:s "Tondeluir" ["viseu" "tondela" "tondeluir-01188"]]
 [:s "Freire" ["porto" "valongo" "freire-01189"]]
 [:s "Ideal de Rans" ["porto" "penafiel" "ideal-de-rans-01190"]]
 [:s "Via Principal" ["lisboa" "torres-vedras" "via-principal-01191"]]
 [:s "Coduvallis" ["porto" "valongo" "conduvallis-01192"]]
 [:s
  "Pinheiro de Loures"
  ["lisboa" "loures" "pinheiro-de-loures-01193"]]
 [:s "Arões" ["braga" "fafe" "aroes-01194"]]
 [:s "Alves" ["evora" "estremoz" "alves-01195"]]
 [:s "Convida" ["aveiro" "sever-do-vouga" "convida-01196"]]
 [:s "Um" ["braga" "braga" "um-01197"]]
 [:s "Sinal Vertical" ["aveiro" "aveiro" "sinal-vertical-01198"]]
 [:s "Leziria" ["santarem" "benavente" "leziria-01199"]]
 [:s "Nova Atitude" ["porto" "vila-nova-de-gaia" "nova-atitude-01200"]]
 [:s
  "Moncorvense"
  ["braganca" "torre-de-moncorvo" "moncorvense-01201"]]
 [:s
  "Andrade de Azeitão"
  ["setubal" "setubal" "andrade-de-azeitao-01202"]]
 [:s
  "Lagoncinha"
  ["braga" "vila-nova-de-famalicao" "lagoncinha-01203"]]
 [:s "Silvino Lopes" ["castelo-branco" "serta" "silvino-lopes-01204"]]
 [:s "Braguesa" ["braga" "braga" "braguesa-01205"]]
 [:s "Escola De Condução Evoluir" [nil "evoluir-01206"]]
 [:s "Beatriz" ["guarda" "gouveia" "beatriz-01207"]]
 [:s "Avelar" ["leiria" "ansiao" "avelar-01208"]]
 [:s "Dalvor" ["faro" "portimao" "dalvor-01209"]]
 [:s "Celeirós" ["braga" "braga" "celeiros-01210"]]
 [:s "Berlenga" ["leiria" "peniche" "berlenga-01211"]]
 [:s "Escola De Condução Cucujães" [nil "cucujaes-01212"]]
 [:s "Lazarim" ["setubal" "almada" "lazarim-01213"]]
 [:s "Prodouro" ["viseu" "sao-joao-da-pesqueira" "prodouro-01214"]]
 [:s "Nova Asseiceira" ["setubal" "almada" "nova-asseiceira-01215"]]
 [:s
  "ESCOLA DE CONDUÇÃO CALOIRA DE ESTARREJA"
  [nil "caloira-de-estarreja-01216"]]
 [:s
  "Escola De Condução Estrela Do Caima"
  [nil "estrela-do-caima-01216"]]
 [:s "Actual" ["aveiro" "arouca" "actual-01218"]]
 [:s "Maré" ["aveiro" "ovar" "mare-01219"]]
 [:s "Lobos do Mar" ["porto" "povoa-de-varzim" "lobos-do-mar-01220"]]
 [:s "Escola De Condução Odivelcartas" [nil "odivelcartas-01221"]]
 [:s "Poceirense" ["setubal" "palmela" "poceirense-01222"]]
 [:s "Pereira & Tostão" ["setubal" "seixal" "pereira-tostao-01223"]]
 [:s "Campeão" ["porto" "trofa" "campeao-01224"]]
 [:s "Defensiva" ["porto" "matosinhos" "defensiva-01225"]]
 [:s "Prior Velho" ["lisboa" "loures" "prior-velho-01226"]]
 [:s "Escola De Condução Penafiel" [nil "penafiel-01227"]]
 [:s "Preferência" ["porto" "marco-de-canavezes" "preferencia-01228"]]
 [:s "Sete Saias" ["leiria" "nazare" "sete-saias-01229"]]
 [:s "Escola De Condução Venezuela" [nil "venezuela-01230"]]
 [:s "Porto Alto" ["santarem" "entroncamento" "porto-alto-01231"]]
 [:s
  "Escola De Condução A Nova De Mozelos"
  [nil "a-nova-de-mozelos-01232"]]
 [:s
  "Granja Parque"
  ["castelo-branco" "castelo-branco" "granja-parque-01233"]]
 [:s "Lumiar" ["lisboa" "lisboa" "lumiar-01234"]]
 [:s "Gémeos" ["lisboa" "cascais" "gemeos-01235"]]
 [:s "Rio Sul" ["setubal" "seixal" "rio-sul-01236"]]
 [:s "Escola De Condução Cesarense" [nil "cesarense-01237"]]
 [:s
  "A Sul Parque"
  ["aveiro" "santa-maria-da-feira" "a-sul-parque-01238"]]
 [:s "Nova Geração" ["lisboa" "oeiras" "nova-geracao-01240"]]
 [:s "Francipaulo" ["lisboa" "cascais" "francipaulo-01241"]]
 [:s "Altamente" ["setubal" "almada" "altamente-01242"]]
 [:s "Queijas" ["lisboa" "oeiras" "queijas-01243"]]
 [:s "Escola De Condução Via Segura" [nil "via-segura-01244"]]
 [:s "Alto dos Moinhos" ["lisboa" "lisboa" "alto-dos-moinhos-01245"]]
 [:s "FRC-Lixa" ["porto" "felgueiras" "frclixa-01246"]]
 [:s "Almirante" ["lisboa" "loures" "do-almirante-01247"]]
 [:s
  "Coimbra de Santa Iria"
  ["lisboa" "loures" "coimbra-de-santa-iria-01248"]]
 [:s "Convento" ["lisboa" "mafra" "convento-01249"]]
 [:s "Globo" ["porto" "lousada" "globo-01250"]]
 [:s "Estói" ["faro" "faro" "estoi-01251"]]
 [:s
  "Sentido Obrigatório"
  ["lisboa" "cascais" "sentido-obrigatorio-01252"]]
 [:s "J. L." ["vila-real" "vila-real" "j-l-01253"]]
 [:s "Nova Expo" ["lisboa" "lisboa" "nova-expo-01254"]]
 [:s "Fidalguinhos" ["setubal" "barreiro" "fidalguinhos-01255"]]
 [:s "Campo Grande" ["lisboa" "lisboa" "campo-grande-01256"]]
 [:s "Escola De Condução Inicios" [nil "inicios-01257"]]
 [:s "ESCOLA DE CONDUÇÃO SIIIMPLETEJO" [nil "siiimpletejo-01257"]]
 [:s "Escola De Condução Espiral" [nil "espiral-01258"]]
 [:s "Topdrive" ["setubal" "seixal" "topdrive-01259"]]
 [:s "Aléu" ["vila-real" "vila-real" "aleu-01260"]]
 [:s "Areias Mar" ["faro" "albufeira" "areias-mar-01261"]]
 [:s "Júpiter" ["lisboa" "mafra" "jupiter-01262"]]
 [:s "Parque das Nações" ["lisboa" "lisboa" "parque-das-nacoes-01263"]]
 [:s "Max" ["viseu" "resende" "max-01264"]]
 [:s "Nova Imagem" ["lisboa" "sintra" "nova-imagem-01265"]]
 [:s
  "Pedras Salgadas"
  ["vila-real" "vila-pouca-de-aguiar" "pedras-salgadas-01266"]]
 [:s
  "Carristur Inovação Em Transportes Urbanos E Regionais Sociedade Unipessoal Lda"
  [nil
   "carristur-inovacao-em-transportes-urbanos-e-regionais-sociedade-unipessoal-lda-01267"]]
 [:s "Escola De Condução O Pelourinho" [nil "o-pelourinho-01268"]]
 [:s "Escola De Condução Centro Sul" [nil "centro-sul-01269"]]
 [:s "Via Vanda" ["setubal" "sesimbra" "via-vanda-01270"]]
 [:s "Belas" ["lisboa" "sintra" "belas-01271"]]
 [:s "Malvarosa" ["lisboa" "vila-franca-de-xira" "malvarosa-01272"]]
 [:s "Net Rodas" ["setubal" "montijo" "net-rodas-01273"]]
 [:s "Alcabideche" ["lisboa" "cascais" "alcabideche-01274"]]
 [:s "Cais do Sodré" ["lisboa" "lisboa" "cais-do-sodre-01275"]]
 [:s "Escola De Condução Norte" [nil "norte-01276"]]
 [:s "Hora de Ponta" ["faro" "lagos" "hora-de-ponta-01277"]]
 [:s "Auto Corgo" ["vila-real" "vila-real" "auto-corgo-01278"]]
 [:s "Seixalinho" ["setubal" "barreiro" "seixalinho-01279"]]
 [:s "Laranjeiras" ["lisboa" "lisboa" "laranjeiras-01280"]]
 [:s "Escola De Condução Belqui" [nil "belqui-01281"]]
 [:s "Vale Mourão" ["lisboa" "sintra" "vale-mourao-01282"]]
 [:s "Helder Pereira" ["setubal" "seixal" "helder-pereira-01283"]]
 [:s "Profissional" ["lisboa" "oeiras" "profissional-01284"]]
 [:s "Charneca" ["setubal" "almada" "charneca-01285"]]
 [:s "Porto Salvo" ["lisboa" "oeiras" "porto-salvo-01286"]]
 [:s "Montejunto" ["lisboa" "alenquer" "montejunto-01287"]]
 [:s "Escola De Condução X-Perfeito" [nil "xperfeito-01288"]]
 [:s "Nova de Loulé" ["faro" "loule" "nova-de-loule-01289"]]
 [:s "Escola De Condução Conduza Mais" [nil "conduza-mais-01290"]]
 [:s "Escola De Condução Oitava" [nil "oitava-01291"]]
 [:s "Gama Barros" ["lisboa" "sintra" "gama-barros-01292"]]
 [:s "Marrazes" ["leiria" "leiria" "marrazes-01293"]]
 [:s "Seven" ["porto" "amarante" "seven-01294"]]
 [:s "Planície" ["beja" "mertola" "planicie-01296"]]
 [:s "Caldas" ["leiria" "caldas-da-rainha" "caldas-01297"]]
 [:s "Cascais" ["lisboa" "cascais" "cascais-01298"]]
 [:s "Eficiência" ["porto" "santo-tirso" "eficiencia-01299"]]
 [:s "Escola De Condução Brandoa" [nil "brandoa-01300"]]
 [:s "Escola De Condução Triplo S" [nil "triplo-s-01301"]]
 [:s "Gueifães" ["porto" "maia" "gueifaes-01304"]]
 [:s "Universia" ["setubal" "almada" "universia-01305"]]
 [:s "Dinossauro" ["lisboa" "lourinha" "dinossauro-01306"]]
 [:s "Sudoeste" ["setubal" "sines" "sudoeste-01308"]]
 [:s "Granvia" ["lisboa" "azambuja" "granvia-01309"]]
 [:s "Eco Brandoa" ["lisboa" "amadora" "eco-brandoa-01310"]]
 [:s "Moliceiro" ["aveiro" "vagos" "moliceiro-01311"]]
 [:s "Guimaraescidade" ["braga" "guimaraes" "guimaraescidade-01312"]]
 [:s "Via Drive" ["viseu" "satao" "via-drive-01313"]]
 [:s "Malhoa" ["leiria" "caldas-da-rainha" "malhoa-01314"]]
 [:s "Prestige" ["leiria" "caldas-da-rainha" "prestige-01314"]]
 [:s "Solum" ["coimbra" "coimbra" "solum-01315"]]
 [:s "Escola De Condução De Barrosas" [nil "barrosas-01316"]]
 [:s "Taveiro" ["coimbra" "coimbra" "taveiro-01318"]]
 [:s "Medieval" ["aveiro" "santa-maria-da-feira" "medieval-01319"]]
 [:s
  "Conduzir em Segurança"
  ["porto" "maia" "conduzir-em-seguranca-01320"]]
 [:s "Porto Bessa" ["porto" "porto" "porto-bessa-01321"]]
 [:s "Nova de Aveiro" ["aveiro" "aveiro" "nova-de-aveiro-01322"]]
 [:s "Nova de Peniche" ["leiria" "peniche" "nova-de-peniche-01323"]]
 [:s
  "Torre da Marinha"
  ["santarem" "rio-maior" "torre-da-marinha-01324"]]
 [:s "Bruno Neves" ["porto" "paredes" "bruno-neves-01325"]]
 [:s "Escola De Condução Siiimplelegre" [nil "siiimplelegre-01326"]]
 [:s "RPM32" ["aveiro" "espinho" "rpm32-01327"]]
 [:s "Classe" ["porto" "amarante" "classe-01328"]]
 [:s
  "Novo Engenho"
  ["aveiro" "santa-maria-da-feira" "novo-engenho-01329"]]
 [:s "Aqueduto" ["portalegre" "elvas" "aqueduto-01330"]]
 [:s
  "Nova de Albergaria"
  ["aveiro" "albergaria-a-velha" "nova-de-albergaria-01331"]]
 [:s
  "Póvoa de Santo Adrião"
  ["lisboa" "odivelas" "povoa-de-santo-adriao-01332"]]
 [:s "Nova Rainha" ["leiria" "caldas-da-rainha" "nova-rainha-01333"]]
 [:s "ABS" ["setubal" "seixal" "abs-01334"]]
 [:s "Leiridrive" ["leiria" "leiria" "leiridrive-01335"]]
 [:s "Nova Paredes" ["lisboa" "alenquer" "nova-paredes-01336"]]
 [:s "Via Dinâmica" ["leiria" "leiria" "via-dinamica-01337"]]
 [:s "Limits" ["leiria" "leiria" "limits-01338"]]
 [:s "Segurança Activa" ["porto" "maia" "seguranca-activa-01339"]]
 [:s "Escola de Condução de Louzan" ["coimbra" "lousa" "louzan-01340"]]
 [:s
  "Escola de Condução Positiva"
  ["braga" "vila-nova-de-famalicao" "positiva-01341"]]
 [:s
  "Escola de Condução Casal de Cambra"
  ["lisboa" "sintra" "casal-de-cambra-01342"]]
 [:s "Castro Daire" ["viseu" "castro-daire" "castro-daire-01343"]]
 [:s "Escola De Condução Nova Marinha" [nil "nova-marinha-01345"]]
 [:s "E.C. Técnica" ["leiria" "caldas-da-rainha" "tecnica-01346"]]
 [:s
  "Escola de Condução Olidrive"
  ["guarda" "aguiar-da-beira" "olidrive-01347"]]
 [:s
  "Escola de Condução de Bustos"
  ["aveiro" "oliveira-do-bairro" "bustos-01348"]]
 [:s "Nova de Tomar" ["santarem" "tomar" "nova-de-tomar-01349"]]
 [:s "Escola De Condução Nova Mira" [nil "nova-mira-01349"]]
 [:s "Carristur" ["lisboa" "lisboa" "carristur-01350"]]
 [:s "Faro em Movimento" ["faro" "faro" "faro-em-movimento-01351"]]
 [:s "Ramalde" ["porto" "porto" "ramalde-01352"]]
 [:s "Universidade" ["coimbra" "coimbra" "universidade-01353"]]
 [:s "Escola De Condução Balasar" [nil "balasar-01354"]]
 [:s
  "Nova de Matosinhos"
  ["porto" "matosinhos" "nova-de-matosinhos-01355"]]
 [:s "Kéris" ["braganca" "carrazeda-de-ansiaes" "keris-01356"]]
 [:s
  "Nova do Bombarral"
  ["leiria" "bombarral" "nova-do-bombarral-01357"]]
 [:s "Estrela do Mar" ["faro" "faro" "estrela-do-mar-01358"]]
 [:s "Roda Segura" ["santarem" "santarem" "roda-segura-01359"]]
 [:s "Gato Preto" ["santarem" "rio-maior" "gato-preto-01360"]]
 [:s "Crystal" ["porto" "amarante" "crystal-01361"]]
 [:s "Ílhavo" ["aveiro" "ilhavo" "ilhavo-01362"]]
 [:s "Linha de Cascais" ["lisboa" "cascais" "linha-de-cascais-01363"]]
 [:s "Nova de Setúbal" ["setubal" "setubal" "nova-de-setubal-01364"]]
 [:s "Costa" ["porto" "valongo" "costa-01365"]]
 [:s
  "Marinha das Ondas"
  ["coimbra" "figueira-da-foz" "marinha-das-ondas-01366"]]
 [:s
  "Vida Nova"
  ["viana-do-castelo" "viana-do-castelo" "vida-nova-01367"]]
 [:s "Olivais" ["lisboa" "lisboa" "dos-olivais-01368"]]
 [:s "Lizauto" ["leiria" "leiria" "lizauto-01369"]]
 [:s "Clube do Condutor" ["leiria" "pombal" "clube-do-condutor-01370"]]
 [:s "Star" ["porto" "penafiel" "star-01371"]]
 [:s "Escola De Condução 5 Sentidos" [nil "5-sentidos-01372"]]
 [:s "Escola De Condução Boa Onda" [nil "boa-onda-01373"]]
 [:s "Minhota de Fraião" ["braga" "braga" "a-minhota-de-fraiao-01374"]]
 [:s "Aljubarrota" ["leiria" "alcobaca" "aljubarrota-01375"]]
 [:s "Pólo Universitário" ["porto" "porto" "polo-universitario-01376"]]
 [:s
  "Quinta das Flores"
  ["coimbra" "coimbra" "quinta-das-flores-01377"]]
 [:s "Capas Negras" ["coimbra" "coimbra" "capas-negras-01378"]]
 [:s "São Bernardo" ["aveiro" "aveiro" "sao-bernardo-01379"]]
 [:s "Monçanense" ["viana-do-castelo" "moncao" "a-moncanense-01380"]]
 [:s
  "Mira-Vez"
  ["viana-do-castelo" "arcos-de-valdevez" "miravez-01381"]]
 [:s
  "Aprendizes do Volante"
  ["lisboa" "cascais" "aprendizes-do-volante-01382"]]
 [:s "Vila Drive" ["porto" "vila-do-conde" "vila-drive-01383"]]
 [:s
  "Via Azeméis"
  ["aveiro" "oliveira-de-azemeis" "via-azemeis-01384"]]
 [:s "Prodígio" ["porto" "vila-nova-de-gaia" "prodigio-01385"]]
 [:s "Auto Drive" ["braga" "braga" "auto-drive-01386"]]
 [:s "Inovaguima" ["braga" "guimaraes" "inovaguima-01387"]]
 [:s "Nova de Viseu" ["viseu" "viseu" "nova-de-viseu-01388"]]
 [:s "Mar à Vista" ["leiria" "alcobaca" "mar-a-vista-01389"]]
 [:s "Macedo" ["braga" "vila-nova-de-famalicao" "macedo-01390"]]
 [:s "São João" ["lisboa" "cascais" "sao-joao-01391"]]
 [:s "Forus" ["setubal" "seixal" "forus-01392"]]
 [:s "Ecodrive" ["lisboa" "odivelas" "ecodrive-01393"]]
 [:s "Cardal" ["leiria" "pombal" "cardal-01394"]]
 [:s
  "Monte Gordo"
  ["faro" "vila-real-de-santo-antonio" "monte-gordo-01395"]]
 [:s "Vicentina" ["braga" "barcelos" "vicentina-01396"]]
 [:s "Ferrara" ["porto" "pacos-de-ferreira" "ferrara-01397"]]
 [:s "Estação" ["lisboa" "sintra" "estacao-01398"]]
 [:s "Escola De Condução Arca D'Água" [nil "arca-dagua-01399"]]
 [:s "A Sebastiana" ["porto" "pacos-de-ferreira" "a-sebastiana-01400"]]
 [:s
  "Alverca Rio"
  ["lisboa" "vila-franca-de-xira" "alverca-rio-01401"]]
 [:s "Origens" ["santarem" "alcanena" "origens-01403"]]
 [:s "5 Estrelas" ["aveiro" "santa-maria-da-feira" "5-estrelas-01404"]]
 [:s "Azurva" ["aveiro" "aveiro" "azurva-01405"]]
 [:s "Quinta do Conde" ["setubal" "sesimbra" "quinta-do-conde-01406"]]
 [:s "Vila Serena" ["setubal" "palmela" "vila-serena-01407"]]
 [:s "Novabela" ["aveiro" "oliveira-de-azemeis" "novabela-01408"]]
 [:s "75AGV" ["porto" "porto" "75agv-01410"]]
 [:s "Fim da Linha" ["porto" "povoa-de-varzim" "fim-da-linha-01411"]]
 [:s
  "Castanheira do Ribatejo"
  ["lisboa" "vila-franca-de-xira" "castanheira-do-ribatejo-01412"]]
 [:s "NovaZêzere" ["santarem" "ferreira-do-zezere" "novazezere-01413"]]
 [:s "Lombos" ["lisboa" "oeiras" "dos-lombos-01414"]]
 [:s "Arede" ["coimbra" "tabua" "arede-01415"]]
 [:s "Nova Fafe" ["braga" "fafe" "nova-fafe-01416"]]
 [:s "Royal" ["porto" "paredes" "royal-01417"]]
 [:s "Escola de Condução Nova Caldense" [nil "nova-caldense-01418"]]
 [:s "Casquilhos" ["setubal" "barreiro" "casquilhos-01419"]]
 [:s "Carapalha" ["castelo-branco" "castelo-branco" "carapalha-01420"]]
 [:s "Escola De Condução Road Safety" [nil "road-safety-01421"]]
 [:s "Escola De Condução São José" [nil "sao-jose-01422"]]
 [:s
  "Santa Luzia - Paços de Ferreira"
  ["porto" "pacos-de-ferreira" "santa-luzia-pacos-de-ferreira-01423"]]
 [:s "Cacém" ["lisboa" "sintra" "cacem-01424"]]
 [:s "Escola De Condução Gondomar Douro" [nil "gondomar-douro-01425"]]
 [:s "Escola de Condução Via Prática" [nil "via-pratica-01427"]]
 [:s "Verde Minho 2" ["braga" "vila-verde" "verde-minho-2-01428"]]
 [:s "D’El Rei" ["evora" "evora" "del-rei-01429"]]
 [:s "Escola de Condução Nisense" [nil "nisense-01430"]]
 [:s "Escola de Condução Serra Ativa" [nil "serra-ativa-01431"]]
 [:s "Escola de Condução Bom Condutor" [nil "bom-condutor-01432"]]
 [:s "Tomar Drive" ["santarem" "tomar" "tomar-drive-01433"]]
 [:s "Vitor Arede" ["viseu" "nelas" "vitor-arede-01434"]]
 [:s
  "Ivo’s Driving Academy"
  ["porto" "pacos-de-ferreira" "ivos-driving-academy-01435"]]
 [:s
  "Escola de Condução Alta de Oliveira"
  [nil "alta-de-oliveira-01437"]]
 [:s "ABC da Estrada" ["guarda" "trancoso" "abc-da-estrada-01438"]]
 [:s "Circuito" ["vila-real" "vila-real" "circuito-01439"]]
 [:s "Smart Road" ["viseu" "mortagua" "smart-road-01440"]]
 [:s "Pôr-do-Sol" ["braga" "barcelos" "pordosol-01441"]]
 [:s "Volante Dourado" ["lisboa" "amadora" "volante-dourado-01443"]]
 [:s "A1 Norte" ["porto" "porto" "a1-norte-01444"]]
 [:s
  "Escola de Condução Nossa Senhora da Conceição"
  [nil "nossa-senhora-da-conceicao-01445"]]
 [:s "Escola de Condução Six" [nil "six-01446"]]
 [:s "Irmãos Gonçalves" ["coimbra" "tabua" "irmaos-goncalves-01448"]]
 [:s "Autopropostos APEC" [nil "autopropostos-apec-03004"]]
 [:s
  "Escola Do Regimento De Sapadores Bombeiros De Lisboa"
  [nil "regimento-de-sapadores-bombeiros-de-lisboa-03006"]]]

)