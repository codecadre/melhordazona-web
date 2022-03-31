(ns bb-passrates.backend.places)

(def places
  [{:name "Tondela", :k :municipality/tondela, :search-items ["tondela"]}
 {:name "Entroncamento",
  :k :municipality/entroncamento,
  :search-items ["entroncamento"]}
 {:name "Boticas", :k :municipality/boticas, :search-items ["boticas"]}
 {:name "Soure", :k :municipality/soure, :search-items ["soure"]}
 {:name "Setúbal", :k :municipality/setubal, :search-items ["setubal"]}
 {:name "Évora", :k :municipality/evora, :search-items ["evora"]}
 {:name "Alfandega da Fé",
  :k :municipality/alfandega-da-fe,
  :search-items ["alfandega" "da" "fe"]}
 {:name "Idanha a Nova",
  :k :municipality/idanha-a-nova,
  :search-items ["idanha" "a" "nova"]}
 {:name "Vila Flor",
  :k :municipality/vila-flor,
  :search-items ["vila" "flor"]}
 {:name "Batalha", :k :municipality/batalha, :search-items ["batalha"]}
 {:name "Peso da Régua",
  :k :municipality/peso-da-regua,
  :search-items ["peso" "da" "regua"]}
 {:name "Grandola",
  :k :municipality/grandola,
  :search-items ["grandola"]}
 {:name "Proença a Nova",
  :k :municipality/proenca-a-nova,
  :search-items ["proenca" "a" "nova"]}
 {:name "Portalegre",
  :k :municipality/portalegre,
  :search-items ["portalegre"]}
 {:name "Celorico Basto",
  :k :municipality/celorico-basto,
  :search-items ["celorico" "basto"]}
 {:name "Castanheira Pera",
  :k :municipality/castanheira-pera,
  :search-items ["castanheira" "pera"]}
 {:name "Alcanena",
  :k :municipality/alcanena,
  :search-items ["alcanena"]}
 {:name "Castro Marim",
  :k :municipality/castro-marim,
  :search-items ["castro" "marim"]}
 {:name "Braga", :k :municipality/braga, :search-items ["braga"]}
 {:name "Viana do Alentejo",
  :k :municipality/viana-do-alentejo,
  :search-items ["viana" "do" "alentejo"]}
 {:name "Alvito", :k :municipality/alvito, :search-items ["alvito"]}
 {:name "Albergaria a Velha",
  :k :municipality/albergaria-a-velha,
  :search-items ["albergaria" "a" "velha"]}
 {:name "Alcobaça",
  :k :municipality/alcobaca,
  :search-items ["alcobaca"]}
 {:name "Azambuja",
  :k :municipality/azambuja,
  :search-items ["azambuja"]}
 {:name "Penacova",
  :k :municipality/penacova,
  :search-items ["penacova"]}
 {:name "Gondomar",
  :k :municipality/gondomar,
  :search-items ["gondomar"]}
 {:name "Condeixa a Nova",
  :k :municipality/condeixa-a-nova,
  :search-items ["condeixa" "a" "nova"]}
 {:name "Lagos", :k :municipality/lagos, :search-items ["lagos"]}
 {:name "Vila Nova Cerveira",
  :k :municipality/vila-nova-cerveira,
  :search-items ["vila" "nova" "cerveira"]}
 {:name "Coimbra", :k :municipality/coimbra, :search-items ["coimbra"]}
 {:name "Mesão Frio",
  :k :municipality/mesao-frio,
  :search-items ["mesao" "frio"]}
 {:name "Almodovar",
  :k :municipality/almodovar,
  :search-items ["almodovar"]}
 {:name "Vendas Novas",
  :k :municipality/vendas-novas,
  :search-items ["vendas" "novas"]}
 {:name "Vouzela", :k :municipality/vouzela, :search-items ["vouzela"]}
 {:name "Santiago do Cacém",
  :k :municipality/santiago-do-cacem,
  :search-items ["santiago" "do" "cacem"]}
 {:name "Trofa", :k :municipality/trofa, :search-items ["trofa"]}
 {:name "Chaves", :k :municipality/chaves, :search-items ["chaves"]}
 {:name "Vila Nova Gaia",
  :k :municipality/vila-nova-gaia,
  :search-items ["vila" "nova" "gaia"]}
 {:name "Amadora", :k :municipality/amadora, :search-items ["amadora"]}
 {:name "Montemor o Novo",
  :k :municipality/montemor-o-novo,
  :search-items ["montemor" "o" "novo"]}
 {:name "Mira", :k :municipality/mira, :search-items ["mira"]}
 {:name "Porto de Mós",
  :k :municipality/porto-de-mos,
  :search-items ["porto" "de" "mos"]}
 {:name "Alter do Chão",
  :k :municipality/alter-do-chao,
  :search-items ["alter" "do" "chao"]}
 {:name "Almeirim",
  :k :municipality/almeirim,
  :search-items ["almeirim"]}
 {:name "Santo Tirso",
  :k :municipality/santo-tirso,
  :search-items ["santo" "tirso"]}
 {:name "Paredes", :k :municipality/paredes, :search-items ["paredes"]}
 {:name "Aljezur", :k :municipality/aljezur, :search-items ["aljezur"]}
 {:name "Fronteira",
  :k :municipality/fronteira,
  :search-items ["fronteira"]}
 {:name "Vila Verde",
  :k :municipality/vila-verde,
  :search-items ["vila" "verde"]}
 {:name "Ponte da Barca",
  :k :municipality/ponte-da-barca,
  :search-items ["ponte" "da" "barca"]}
 {:name "Lousã", :k :municipality/lousa, :search-items ["lousa"]}
 {:name "Oliveira Bairro",
  :k :municipality/oliveira-bairro,
  :search-items ["oliveira" "bairro"]}
 {:name "Castelo de Paiva",
  :k :municipality/castelo-de-paiva,
  :search-items ["castelo" "de" "paiva"]}
 {:name "Oleiros", :k :municipality/oleiros, :search-items ["oleiros"]}
 {:name "Peniche", :k :municipality/peniche, :search-items ["peniche"]}
 {:name "Olhão", :k :municipality/olhao, :search-items ["olhao"]}
 {:name "Moita", :k :municipality/moita, :search-items ["moita"]}
 {:name "Vila Nova Barquinha",
  :k :municipality/vila-nova-barquinha,
  :search-items ["vila" "nova" "barquinha"]}
 {:name "Montijo", :k :municipality/montijo, :search-items ["montijo"]}
 {:name "Cadaval", :k :municipality/cadaval, :search-items ["cadaval"]}
 {:name "Estremoz",
  :k :municipality/estremoz,
  :search-items ["estremoz"]}
 {:name "Loures", :k :municipality/loures, :search-items ["loures"]}
 {:name "Alcoutim",
  :k :municipality/alcoutim,
  :search-items ["alcoutim"]}
 {:name "Felgueiras",
  :k :municipality/felgueiras,
  :search-items ["felgueiras"]}
 {:name "Pedrogão Grande",
  :k :municipality/pedrogao-grande,
  :search-items ["pedrogao" "grande"]}
 {:name "Vila Nova Famalicão",
  :k :municipality/vila-nova-famalicao,
  :search-items ["vila" "nova" "famalicao"]}
 {:name "Estoril", :k :municipality/estoril, :search-items ["estoril"]}
 {:name "Anadia", :k :municipality/anadia, :search-items ["anadia"]}
 {:name "Oliveira de Frades",
  :k :municipality/oliveira-de-frades,
  :search-items ["oliveira" "de" "frades"]}
 {:name "Espinho", :k :municipality/espinho, :search-items ["espinho"]}
 {:name "Marco Canavezes",
  :k :municipality/marco-canavezes,
  :search-items ["marco" "canavezes"]}
 {:name "Macedo Cavaleiros",
  :k :municipality/macedo-cavaleiros,
  :search-items ["macedo" "cavaleiros"]}
 {:name "Aljustrel",
  :k :municipality/aljustrel,
  :search-items ["aljustrel"]}
 {:name "Porto", :k :municipality/porto, :search-items ["porto"]}
 {:name "Vila Franca Xira",
  :k :municipality/vila-franca-xira,
  :search-items ["vila" "franca" "xira"]}
 {:name "Lamego", :k :municipality/lamego, :search-items ["lamego"]}
 {:name "Borba", :k :municipality/borba, :search-items ["borba"]}
 {:name "Tomar", :k :municipality/tomar, :search-items ["tomar"]}
 {:name "Sátão", :k :municipality/satao, :search-items ["satao"]}
 {:name "Alenquer",
  :k :municipality/alenquer,
  :search-items ["alenquer"]}
 {:name "Ponte de Sor",
  :k :municipality/ponte-de-sor,
  :search-items ["ponte" "de" "sor"]}
 {:name "S. João da Pesqueira",
  :k :municipality/s-joao-da-pesqueira,
  :search-items ["s" "joao" "da" "pesqueira"]}
 {:name "Sardoal", :k :municipality/sardoal, :search-items ["sardoal"]}
 {:name "Golegã", :k :municipality/golega, :search-items ["golega"]}
 {:name "Palmela", :k :municipality/palmela, :search-items ["palmela"]}
 {:name "Esposende",
  :k :municipality/esposende,
  :search-items ["esposende"]}
 {:name "Monchique",
  :k :municipality/monchique,
  :search-items ["monchique"]}
 {:name "Alcochete",
  :k :municipality/alcochete,
  :search-items ["alcochete"]}
 {:name "Maia", :k :municipality/maia, :search-items ["maia"]}
 {:name "Portel", :k :municipality/portel, :search-items ["portel"]}
 {:name "Mora", :k :municipality/mora, :search-items ["mora"]}
 {:name "Tabuaço", :k :municipality/tabuaco, :search-items ["tabuaco"]}
 {:name "Elvas", :k :municipality/elvas, :search-items ["elvas"]}
 {:name "Vila do Bispo",
  :k :municipality/vila-do-bispo,
  :search-items ["vila" "do" "bispo"]}
 {:name "Moura", :k :municipality/moura, :search-items ["moura"]}
 {:name "Castro Verde",
  :k :municipality/castro-verde,
  :search-items ["castro" "verde"]}
 {:name "Mortágua",
  :k :municipality/mortagua,
  :search-items ["mortagua"]}
 {:name "Cabeiras Basto",
  :k :municipality/cabeiras-basto,
  :search-items ["cabeiras" "basto"]}
 {:name "Penafiel",
  :k :municipality/penafiel,
  :search-items ["penafiel"]}
 {:name "Vila Conde",
  :k :municipality/vila-conde,
  :search-items ["vila" "conde"]}
 {:name "Vale de Cambra",
  :k :municipality/vale-de-cambra,
  :search-items ["vale" "de" "cambra"]}
 {:name "Estarreja",
  :k :municipality/estarreja,
  :search-items ["estarreja"]}
 {:name "Tarouca", :k :municipality/tarouca, :search-items ["tarouca"]}
 {:name "Marinha Grande",
  :k :municipality/marinha-grande,
  :search-items ["marinha" "grande"]}
 {:name "Leiria", :k :municipality/leiria, :search-items ["leiria"]}
 {:name "Alvaiazere",
  :k :municipality/alvaiazere,
  :search-items ["alvaiazere"]}
 {:name "Carregal do Sal",
  :k :municipality/carregal-do-sal,
  :search-items ["carregal" "do" "sal"]}
 {:name "Avis", :k :municipality/avis, :search-items ["avis"]}
 {:name "Cartaxo", :k :municipality/cartaxo, :search-items ["cartaxo"]}
 {:name "Faro", :k :municipality/faro, :search-items ["faro"]}
 {:name "Cascais", :k :municipality/cascais, :search-items ["cascais"]}
 {:name "Barcelos",
  :k :municipality/barcelos,
  :search-items ["barcelos"]}
 {:name "Bragança",
  :k :municipality/braganca,
  :search-items ["braganca"]}
 {:name "Viana Castelo",
  :k :municipality/viana-castelo,
  :search-items ["viana" "castelo"]}
 {:name "Miranda do Corvo",
  :k :municipality/miranda-do-corvo,
  :search-items ["miranda" "do" "corvo"]}
 {:name "Penela", :k :municipality/penela, :search-items ["penela"]}
 {:name "Seixal", :k :municipality/seixal, :search-items ["seixal"]}
 {:name "Vizela", :k :municipality/vizela, :search-items ["vizela"]}
 {:name "Sabrosa", :k :municipality/sabrosa, :search-items ["sabrosa"]}
 {:name "Murtosa", :k :municipality/murtosa, :search-items ["murtosa"]}
 {:name "Vidigueira",
  :k :municipality/vidigueira,
  :search-items ["vidigueira"]}
 {:name "Sever do Vouga",
  :k :municipality/sever-do-vouga,
  :search-items ["sever" "do" "vouga"]}
 {:name "Barreiro",
  :k :municipality/barreiro,
  :search-items ["barreiro"]}
 {:name "Rio Maior",
  :k :municipality/rio-maior,
  :search-items ["rio" "maior"]}
 {:name "Ferreira do Alentejo",
  :k :municipality/ferreira-do-alentejo,
  :search-items ["ferreira" "do" "alentejo"]}
 {:name "Sobral Monte Agraço",
  :k :municipality/sobral-monte-agraco,
  :search-items ["sobral" "monte" "agraco"]}
 {:name "Castelo Branco",
  :k :municipality/castelo-branco,
  :search-items ["castelo" "branco"]}
 {:name "Sines", :k :municipality/sines, :search-items ["sines"]}
 {:name "Crato", :k :municipality/crato, :search-items ["crato"]}
 {:name "Alcacer do Sal",
  :k :municipality/alcacer-do-sal,
  :search-items ["alcacer" "do" "sal"]}
 {:name "Mealhada",
  :k :municipality/mealhada,
  :search-items ["mealhada"]}
 {:name "Coruche", :k :municipality/coruche, :search-items ["coruche"]}
 {:name "Chamusca",
  :k :municipality/chamusca,
  :search-items ["chamusca"]}
 {:name "Ourique", :k :municipality/ourique, :search-items ["ourique"]}
 {:name "Aguiar da Beira",
  :k :municipality/aguiar-da-beira,
  :search-items ["aguiar" "da" "beira"]}
 {:name "Figueiró dos Vinhos",
  :k :municipality/figueiro-dos-vinhos,
  :search-items ["figueiro" "dos" "vinhos"]}
 {:name "Arganil", :k :municipality/arganil, :search-items ["arganil"]}
 {:name "Valença", :k :municipality/valenca, :search-items ["valenca"]}
 {:name "Pinhel", :k :municipality/pinhel, :search-items ["pinhel"]}
 {:name "Vagos", :k :municipality/vagos, :search-items ["vagos"]}
 {:name "Figueira Castelo Rodrigo",
  :k :municipality/figueira-castelo-rodrigo,
  :search-items ["figueira" "castelo" "rodrigo"]}
 {:name "Sousel", :k :municipality/sousel, :search-items ["sousel"]}
 {:name "Arruda dos Vinhos",
  :k :municipality/arruda-dos-vinhos,
  :search-items ["arruda" "dos" "vinhos"]}
 {:name "Vila Nova de Paiva",
  :k :municipality/vila-nova-de-paiva,
  :search-items ["vila" "nova" "de" "paiva"]}
 {:name "Santarém",
  :k :municipality/santarem,
  :search-items ["santarem"]}
 {:name "Trancoso",
  :k :municipality/trancoso,
  :search-items ["trancoso"]}
 {:name "Odemira", :k :municipality/odemira, :search-items ["odemira"]}
 {:name "Sernancelhe",
  :k :municipality/sernancelhe,
  :search-items ["sernancelhe"]}
 {:name "Bombarral",
  :k :municipality/bombarral,
  :search-items ["bombarral"]}
 {:name "Penalva de Castelo",
  :k :municipality/penalva-de-castelo,
  :search-items ["penalva" "de" "castelo"]}
 {:name "Santa Comba Dão",
  :k :municipality/santa-comba-dao,
  :search-items ["santa" "comba" "dao"]}
 {:name "Belmonte",
  :k :municipality/belmonte,
  :search-items ["belmonte"]}
 {:name "Fundão", :k :municipality/fundao, :search-items ["fundao"]}
 {:name "Gavião", :k :municipality/gaviao, :search-items ["gaviao"]}
 {:name "Melgaço", :k :municipality/melgaco, :search-items ["melgaco"]}
 {:name "Alandroal",
  :k :municipality/alandroal,
  :search-items ["alandroal"]}
 {:name "Carrazeda Ansães",
  :k :municipality/carrazeda-ansaes,
  :search-items ["carrazeda" "ansaes"]}
 {:name "Figueira da Foz",
  :k :municipality/figueira-da-foz,
  :search-items ["figueira" "da" "foz"]}
 {:name "Paredes de Coura",
  :k :municipality/paredes-de-coura,
  :search-items ["paredes" "de" "coura"]}
 {:name "Murça", :k :municipality/murca, :search-items ["murca"]}
 {:name "Ponte de Lima",
  :k :municipality/ponte-de-lima,
  :search-items ["ponte" "de" "lima"]}
 {:name "Alpiarça",
  :k :municipality/alpiarca,
  :search-items ["alpiarca"]}
 {:name "Beja", :k :municipality/beja, :search-items ["beja"]}
 {:name "Celorico da Beira",
  :k :municipality/celorico-da-beira,
  :search-items ["celorico" "da" "beira"]}
 {:name "Odivelas",
  :k :municipality/odivelas,
  :search-items ["odivelas"]}
 {:name "Penedono",
  :k :municipality/penedono,
  :search-items ["penedono"]}
 {:name "Redondo", :k :municipality/redondo, :search-items ["redondo"]}
 {:name "Paços de Ferreira",
  :k :municipality/pacos-de-ferreira,
  :search-items ["pacos" "de" "ferreira"]}
 {:name "Valongo", :k :municipality/valongo, :search-items ["valongo"]}
 {:name "Cinfães", :k :municipality/cinfaes, :search-items ["cinfaes"]}
 {:name "Oliveira Hospital",
  :k :municipality/oliveira-hospital,
  :search-items ["oliveira" "hospital"]}
 {:name "Sertã", :k :municipality/serta, :search-items ["serta"]}
 {:name "Santa Maria da Feira",
  :k :municipality/santa-maria-da-feira,
  :search-items ["santa" "maria" "da" "feira"]}
 {:name "Águeda", :k :municipality/agueda, :search-items ["agueda"]}
 {:name "Almeida", :k :municipality/almeida, :search-items ["almeida"]}
 {:name "Lisboa", :k :municipality/lisboa, :search-items ["lisboa"]}
 {:name "Lourinhã",
  :k :municipality/lourinha,
  :search-items ["lourinha"]}
 {:name "Ourém", :k :municipality/ourem, :search-items ["ourem"]}
 {:name "Amarante",
  :k :municipality/amarante,
  :search-items ["amarante"]}
 {:name "Ferreira do Zêzere",
  :k :municipality/ferreira-do-zezere,
  :search-items ["ferreira" "do" "zezere"]}
 {:name "Abrantes",
  :k :municipality/abrantes,
  :search-items ["abrantes"]}
 {:name "Salvaterra Magos",
  :k :municipality/salvaterra-magos,
  :search-items ["salvaterra" "magos"]}
 {:name "Nelas", :k :municipality/nelas, :search-items ["nelas"]}
 {:name "Armamar", :k :municipality/armamar, :search-items ["armamar"]}
 {:name "Cantanhede",
  :k :municipality/cantanhede,
  :search-items ["cantanhede"]}
 {:name "Póvoa de Varzim",
  :k :municipality/povoa-de-varzim,
  :search-items ["povoa" "de" "varzim"]}
 {:name "Campo Maior",
  :k :municipality/campo-maior,
  :search-items ["campo" "maior"]}
 {:name "Ansião", :k :municipality/ansiao, :search-items ["ansiao"]}
 {:name "Alijó", :k :municipality/alijo, :search-items ["alijo"]}
 {:name "Torres Novas",
  :k :municipality/torres-novas,
  :search-items ["torres" "novas"]}
 {:name "Lousada", :k :municipality/lousada, :search-items ["lousada"]}
 {:name "Arouca", :k :municipality/arouca, :search-items ["arouca"]}
 {:name "Terras Bouro",
  :k :municipality/terras-bouro,
  :search-items ["terras" "bouro"]}
 {:name "Mondim Basto",
  :k :municipality/mondim-basto,
  :search-items ["mondim" "basto"]}
 {:name "Vila Real",
  :k :municipality/vila-real,
  :search-items ["vila" "real"]}
 {:name "Tavira", :k :municipality/tavira, :search-items ["tavira"]}
 {:name "Guarda", :k :municipality/guarda, :search-items ["guarda"]}
 {:name "Vieira do Minho",
  :k :municipality/vieira-do-minho,
  :search-items ["vieira" "do" "minho"]}
 {:name "Serpa", :k :municipality/serpa, :search-items ["serpa"]}
 {:name "Caminha", :k :municipality/caminha, :search-items ["caminha"]}
 {:name "Gouveia", :k :municipality/gouveia, :search-items ["gouveia"]}
 {:name "Meda", :k :municipality/meda, :search-items ["meda"]}
 {:name "Seia", :k :municipality/seia, :search-items ["seia"]}
 {:name "Loulé", :k :municipality/loule, :search-items ["loule"]}
 {:name "Matosinhos",
  :k :municipality/matosinhos,
  :search-items ["matosinhos"]}
 {:name "Mangualde",
  :k :municipality/mangualde,
  :search-items ["mangualde"]}
 {:name "Fornos de Algodres",
  :k :municipality/fornos-de-algodres,
  :search-items ["fornos" "de" "algodres"]}
 {:name "Aveiro", :k :municipality/aveiro, :search-items ["aveiro"]}
 {:name "V. R. Stº António",
  :k :municipality/v-r-st-antonio,
  :search-items ["v" "r" "st" "antonio"]}
 {:name "Oeiras", :k :municipality/oeiras, :search-items ["oeiras"]}
 {:name "Sintra", :k :municipality/sintra, :search-items ["sintra"]}
 {:name "Moimenta da Beira",
  :k :municipality/moimenta-da-beira,
  :search-items ["moimenta" "da" "beira"]}
 {:name "Ovar", :k :municipality/ovar, :search-items ["ovar"]}
 {:name "Nazaré", :k :municipality/nazare, :search-items ["nazare"]}
 {:name "Óbidos", :k :municipality/obidos, :search-items ["obidos"]}
 {:name "Ilhavo", :k :municipality/ilhavo, :search-items ["ilhavo"]}
 {:name "Nisa", :k :municipality/nisa, :search-items ["nisa"]}
 {:name "Caldas da Rainha",
  :k :municipality/caldas-da-rainha,
  :search-items ["caldas" "da" "rainha"]}
 {:name "Vila Nova Foz Coa",
  :k :municipality/vila-nova-foz-coa,
  :search-items ["vila" "nova" "foz" "coa"]}
 {:name "Mogadouro",
  :k :municipality/mogadouro,
  :search-items ["mogadouro"]}
 {:name "Miranda Douro",
  :k :municipality/miranda-douro,
  :search-items ["miranda" "douro"]}
 {:name "Castro Daire",
  :k :municipality/castro-daire,
  :search-items ["castro" "daire"]}
 {:name "Vila Pouca Aguiar",
  :k :municipality/vila-pouca-aguiar,
  :search-items ["vila" "pouca" "aguiar"]}
 {:name "Reguengos Monsaraz",
  :k :municipality/reguengos-monsaraz,
  :search-items ["reguengos" "monsaraz"]}
 {:name "Vila Nova Poiares",
  :k :municipality/vila-nova-poiares,
  :search-items ["vila" "nova" "poiares"]}
 {:name "Viseu", :k :municipality/viseu, :search-items ["viseu"]}
 {:name "S. Pedro do Sul",
  :k :municipality/s-pedro-do-sul,
  :search-items ["s" "pedro" "do" "sul"]}
 {:name "Portimão",
  :k :municipality/portimao,
  :search-items ["portimao"]}
 {:name "Torres Vedras",
  :k :municipality/torres-vedras,
  :search-items ["torres" "vedras"]}
 {:name "Silves", :k :municipality/silves, :search-items ["silves"]}
 {:name "Monção", :k :municipality/moncao, :search-items ["moncao"]}
 {:name "Resende", :k :municipality/resende, :search-items ["resende"]}
 {:name "Vimioso", :k :municipality/vimioso, :search-items ["vimioso"]}
 {:name "Sabugal", :k :municipality/sabugal, :search-items ["sabugal"]}
 {:name "Mafra", :k :municipality/mafra, :search-items ["mafra"]}
 {:name "Benavente",
  :k :municipality/benavente,
  :search-items ["benavente"]}
 {:name "Sesimbra",
  :k :municipality/sesimbra,
  :search-items ["sesimbra"]}
 {:name "Arcos Valdevez",
  :k :municipality/arcos-valdevez,
  :search-items ["arcos" "valdevez"]}
 {:name "Torre de Moncorvo",
  :k :municipality/torre-de-moncorvo,
  :search-items ["torre" "de" "moncorvo"]}
 {:name "Mirandela",
  :k :municipality/mirandela,
  :search-items ["mirandela"]}
 {:name "S. João da Madeira",
  :k :municipality/s-joao-da-madeira,
  :search-items ["s" "joao" "da" "madeira"]}
 {:name "Albufeira",
  :k :municipality/albufeira,
  :search-items ["albufeira"]}
 {:name "Pombal", :k :municipality/pombal, :search-items ["pombal"]}
 {:name "Manteigas",
  :k :municipality/manteigas,
  :search-items ["manteigas"]}
 {:name "Arraiolos",
  :k :municipality/arraiolos,
  :search-items ["arraiolos"]}
 {:name "Amares", :k :municipality/amares, :search-items ["amares"]}
 {:name "Almada", :k :municipality/almada, :search-items ["almada"]}
 {:name "Montemor o Velho",
  :k :municipality/montemor-o-velho,
  :search-items ["montemor" "o" "velho"]}
 {:name "Póvoa Lanhoso",
  :k :municipality/povoa-lanhoso,
  :search-items ["povoa" "lanhoso"]}
 {:name "Vila Viçosa",
  :k :municipality/vila-vicosa,
  :search-items ["vila" "vicosa"]}
 {:name "Baião", :k :municipality/baiao, :search-items ["baiao"]}
 {:name "Penamacor",
  :k :municipality/penamacor,
  :search-items ["penamacor"]}
 {:name "Fafe", :k :municipality/fafe, :search-items ["fafe"]}
 {:name "Ribeira de Pena",
  :k :municipality/ribeira-de-pena,
  :search-items ["ribeira" "de" "pena"]}
 {:name "Guimarães",
  :k :municipality/guimaraes,
  :search-items ["guimaraes"]}
 {:name "Covilhã", :k :municipality/covilha, :search-items ["covilha"]}
 {:name "Valpaços",
  :k :municipality/valpacos,
  :search-items ["valpacos"]}
 {:name "Lagoa", :k :municipality/lagoa, :search-items ["lagoa"]}
 {:name "Tábua", :k :municipality/tabua, :search-items ["tabua"]}
 {:name "Tondela", :k :city/tondela, :search-items ["tondela"]}
 {:name "Pedroso", :k :city/pedroso, :search-items ["pedroso"]}
 {:name "Entroncamento",
  :k :city/entroncamento,
  :search-items ["entroncamento"]}
 {:name "Boticas", :k :city/boticas, :search-items ["boticas"]}
 {:name "Avioso Santa Maria",
  :k :city/avioso-santa-maria,
  :search-items ["avioso" "santa" "maria"]}
 {:name "A dos Cunhados",
  :k :city/a-dos-cunhados,
  :search-items ["a" "dos" "cunhados"]}
 {:name "Marinhais", :k :city/marinhais, :search-items ["marinhais"]}
 {:name "Terrugem", :k :city/terrugem, :search-items ["terrugem"]}
 {:name "Soure", :k :city/soure, :search-items ["soure"]}
 {:name "Prior Velho",
  :k :city/prior-velho,
  :search-items ["prior" "velho"]}
 {:name "Setúbal", :k :city/setubal, :search-items ["setubal"]}
 {:name "Évora", :k :city/evora, :search-items ["evora"]}
 {:name "Idanha a Nova",
  :k :city/idanha-a-nova,
  :search-items ["idanha" "a" "nova"]}
 {:name "Pampilhosa do Botão",
  :k :city/pampilhosa-do-botao,
  :search-items ["pampilhosa" "do" "botao"]}
 {:name "Arcozelo", :k :city/arcozelo, :search-items ["arcozelo"]}
 {:name "Vila Flor", :k :city/vila-flor, :search-items ["vila" "flor"]}
 {:name "Batalha", :k :city/batalha, :search-items ["batalha"]}
 {:name "Rio Tinto", :k :city/rio-tinto, :search-items ["rio" "tinto"]}
 {:name "Peso da Régua",
  :k :city/peso-da-regua,
  :search-items ["peso" "da" "regua"]}
 {:name "Oliveira do Bairro",
  :k :city/oliveira-do-bairro,
  :search-items ["oliveira" "do" "bairro"]}
 {:name "Vidago", :k :city/vidago, :search-items ["vidago"]}
 {:name "Santana", :k :city/santana, :search-items ["santana"]}
 {:name "Benedita", :k :city/benedita, :search-items ["benedita"]}
 {:name "Portalegre",
  :k :city/portalegre,
  :search-items ["portalegre"]}
 {:name "Lanheses", :k :city/lanheses, :search-items ["lanheses"]}
 {:name "São Lourenço (Vila Nogueira de Azeitão)",
  :k :city/sao-lourenco-vila-nogueira-de-azeitao,
  :search-items ["sao" "lourenco" "vila" "nogueira" "de" "azeitao"]}
 {:name "Condeixa-a-Nova",
  :k :city/condeixaanova,
  :search-items ["condeixaanova"]}
 {:name "Alcanena", :k :city/alcanena, :search-items ["alcanena"]}
 {:name "Castro Marim",
  :k :city/castro-marim,
  :search-items ["castro" "marim"]}
 {:name "Caminho Novo",
  :k :city/caminho-novo,
  :search-items ["caminho" "novo"]}
 {:name "Braga", :k :city/braga, :search-items ["braga"]}
 {:name "Olho Marinho",
  :k :city/olho-marinho,
  :search-items ["olho" "marinho"]}
 {:name "Mafamude", :k :city/mafamude, :search-items ["mafamude"]}
 {:name "Apúlia", :k :city/apulia, :search-items ["apulia"]}
 {:name "Souselo", :k :city/souselo, :search-items ["souselo"]}
 {:name "Viana do Alentejo",
  :k :city/viana-do-alentejo,
  :search-items ["viana" "do" "alentejo"]}
 {:name "Cuba", :k :city/cuba, :search-items ["cuba"]}
 {:name "Ataíde", :k :city/ataide, :search-items ["ataide"]}
 {:name "Sapataria", :k :city/sapataria, :search-items ["sapataria"]}
 {:name "Barcarena", :k :city/barcarena, :search-items ["barcarena"]}
 {:name "São Bartolomeu de Messines",
  :k :city/sao-bartolomeu-de-messines,
  :search-items ["sao" "bartolomeu" "de" "messines"]}
 {:name "Ramada", :k :city/ramada, :search-items ["ramada"]}
 {:name "Vialonga", :k :city/vialonga, :search-items ["vialonga"]}
 {:name "Freiriz", :k :city/freiriz, :search-items ["freiriz"]}
 {:name "Alcobaça", :k :city/alcobaca, :search-items ["alcobaca"]}
 {:name "Azambuja", :k :city/azambuja, :search-items ["azambuja"]}
 {:name "Penacova", :k :city/penacova, :search-items ["penacova"]}
 {:name "Marinhas", :k :city/marinhas, :search-items ["marinhas"]}
 {:name "Taveiro", :k :city/taveiro, :search-items ["taveiro"]}
 {:name "Gondomar", :k :city/gondomar, :search-items ["gondomar"]}
 {:name "Vila Nova de Milfontes",
  :k :city/vila-nova-de-milfontes,
  :search-items ["vila" "nova" "de" "milfontes"]}
 {:name "Miranda do Douro Municipality",
  :k :city/miranda-do-douro-municipality,
  :search-items ["miranda" "do" "douro" "municipality"]}
 {:name "Lagos", :k :city/lagos, :search-items ["lagos"]}
 {:name "Coimbra", :k :city/coimbra, :search-items ["coimbra"]}
 {:name "Paião", :k :city/paiao, :search-items ["paiao"]}
 {:name "Mesão Frio",
  :k :city/mesao-frio,
  :search-items ["mesao" "frio"]}
 {:name "Meadela", :k :city/meadela, :search-items ["meadela"]}
 {:name "Buraca", :k :city/buraca, :search-items ["buraca"]}
 {:name "Terras de Bouro",
  :k :city/terras-de-bouro,
  :search-items ["terras" "de" "bouro"]}
 {:name "São Cosme", :k :city/sao-cosme, :search-items ["sao" "cosme"]}
 {:name "Vendas Novas",
  :k :city/vendas-novas,
  :search-items ["vendas" "novas"]}
 {:name "Vila Nova de Cerveira",
  :k :city/vila-nova-de-cerveira,
  :search-items ["vila" "nova" "de" "cerveira"]}
 {:name "Avintes", :k :city/avintes, :search-items ["avintes"]}
 {:name "Vouzela", :k :city/vouzela, :search-items ["vouzela"]}
 {:name "Lanhoso", :k :city/lanhoso, :search-items ["lanhoso"]}
 {:name "Ílhavo", :k :city/ilhavo, :search-items ["ilhavo"]}
 {:name "Freamunde", :k :city/freamunde, :search-items ["freamunde"]}
 {:name "Cruz Quebrada",
  :k :city/cruz-quebrada,
  :search-items ["cruz" "quebrada"]}
 {:name "Febres", :k :city/febres, :search-items ["febres"]}
 {:name "Santiago do Cacém",
  :k :city/santiago-do-cacem,
  :search-items ["santiago" "do" "cacem"]}
 {:name "Riachos", :k :city/riachos, :search-items ["riachos"]}
 {:name "Queijas", :k :city/queijas, :search-items ["queijas"]}
 {:name "Viana do Castelo",
  :k :city/viana-do-castelo,
  :search-items ["viana" "do" "castelo"]}
 {:name "Póvoa do Lanhoso",
  :k :city/povoa-do-lanhoso,
  :search-items ["povoa" "do" "lanhoso"]}
 {:name "Castelões", :k :city/casteloes, :search-items ["casteloes"]}
 {:name "Trofa", :k :city/trofa, :search-items ["trofa"]}
 {:name "Chaves", :k :city/chaves, :search-items ["chaves"]}
 {:name "Belas", :k :city/belas, :search-items ["belas"]}
 {:name "Oliveira de Azeméis",
  :k :city/oliveira-de-azemeis,
  :search-items ["oliveira" "de" "azemeis"]}
 {:name "Amadora", :k :city/amadora, :search-items ["amadora"]}
 {:name "São Martinho do Porto",
  :k :city/sao-martinho-do-porto,
  :search-items ["sao" "martinho" "do" "porto"]}
 {:name "São Marcos",
  :k :city/sao-marcos,
  :search-items ["sao" "marcos"]}
 {:name "Várzea", :k :city/varzea, :search-items ["varzea"]}
 {:name "Mira", :k :city/mira, :search-items ["mira"]}
 {:name "Porto de Mós",
  :k :city/porto-de-mos,
  :search-items ["porto" "de" "mos"]}
 {:name "Covilha", :k :city/covilha, :search-items ["covilha"]}
 {:name "Estômbar", :k :city/estombar, :search-items ["estombar"]}
 {:name "Alter do Chão",
  :k :city/alter-do-chao,
  :search-items ["alter" "do" "chao"]}
 {:name "Almeirim", :k :city/almeirim, :search-items ["almeirim"]}
 {:name "Santo Tirso",
  :k :city/santo-tirso,
  :search-items ["santo" "tirso"]}
 {:name "Melres", :k :city/melres, :search-items ["melres"]}
 {:name "Sobral de Monte Agraço",
  :k :city/sobral-de-monte-agraco,
  :search-items ["sobral" "de" "monte" "agraco"]}
 {:name "Paredes", :k :city/paredes, :search-items ["paredes"]}
 {:name "Aljezur", :k :city/aljezur, :search-items ["aljezur"]}
 {:name "Alverca do Ribatejo",
  :k :city/alverca-do-ribatejo,
  :search-items ["alverca" "do" "ribatejo"]}
 {:name "Carcavelos",
  :k :city/carcavelos,
  :search-items ["carcavelos"]}
 {:name "Fronteira", :k :city/fronteira, :search-items ["fronteira"]}
 {:name "Rebordosa", :k :city/rebordosa, :search-items ["rebordosa"]}
 {:name "Costa da Caparica",
  :k :city/costa-da-caparica,
  :search-items ["costa" "da" "caparica"]}
 {:name "Vila Verde",
  :k :city/vila-verde,
  :search-items ["vila" "verde"]}
 {:name "Ponte da Barca",
  :k :city/ponte-da-barca,
  :search-items ["ponte" "da" "barca"]}
 {:name "Fernão Ferro",
  :k :city/fernao-ferro,
  :search-items ["fernao" "ferro"]}
 {:name "Lousã", :k :city/lousa, :search-items ["lousa"]}
 {:name "Sacavém", :k :city/sacavem, :search-items ["sacavem"]}
 {:name "Cabeceiras de Basto",
  :k :city/cabeceiras-de-basto,
  :search-items ["cabeceiras" "de" "basto"]}
 {:name "Tocha", :k :city/tocha, :search-items ["tocha"]}
 {:name "Caldas de Vizela",
  :k :city/caldas-de-vizela,
  :search-items ["caldas" "de" "vizela"]}
 {:name "Lavegadas do Meio",
  :k :city/lavegadas-do-meio,
  :search-items ["lavegadas" "do" "meio"]}
 {:name "Castelo de Paiva",
  :k :city/castelo-de-paiva,
  :search-items ["castelo" "de" "paiva"]}
 {:name "Oleiros", :k :city/oleiros, :search-items ["oleiros"]}
 {:name "Peniche", :k :city/peniche, :search-items ["peniche"]}
 {:name "Gandra", :k :city/gandra, :search-items ["gandra"]}
 {:name "Olhão", :k :city/olhao, :search-items ["olhao"]}
 {:name "Moita", :k :city/moita, :search-items ["moita"]}
 {:name "Guimaraes", :k :city/guimaraes, :search-items ["guimaraes"]}
 {:name "Meixomil", :k :city/meixomil, :search-items ["meixomil"]}
 {:name "Montijo", :k :city/montijo, :search-items ["montijo"]}
 {:name "Silveira", :k :city/silveira, :search-items ["silveira"]}
 {:name "Cadaval", :k :city/cadaval, :search-items ["cadaval"]}
 {:name "Pedrógão Grande",
  :k :city/pedrogao-grande,
  :search-items ["pedrogao" "grande"]}
 {:name "Estremoz", :k :city/estremoz, :search-items ["estremoz"]}
 {:name "Loures", :k :city/loures, :search-items ["loures"]}
 {:name "Baltar", :k :city/baltar, :search-items ["baltar"]}
 {:name "Mem Martins",
  :k :city/mem-martins,
  :search-items ["mem" "martins"]}
 {:name "Almancil", :k :city/almancil, :search-items ["almancil"]}
 {:name "Felgueiras",
  :k :city/felgueiras,
  :search-items ["felgueiras"]}
 {:name "Guilhufe", :k :city/guilhufe, :search-items ["guilhufe"]}
 {:name "Repeses", :k :city/repeses, :search-items ["repeses"]}
 {:name "Estoril", :k :city/estoril, :search-items ["estoril"]}
 {:name "Parede", :k :city/parede, :search-items ["parede"]}
 {:name "Anadia", :k :city/anadia, :search-items ["anadia"]}
 {:name "Rio de Moinhos",
  :k :city/rio-de-moinhos,
  :search-items ["rio" "de" "moinhos"]}
 {:name "Oliveira de Frades",
  :k :city/oliveira-de-frades,
  :search-items ["oliveira" "de" "frades"]}
 {:name "São Domingos de Rana",
  :k :city/sao-domingos-de-rana,
  :search-items ["sao" "domingos" "de" "rana"]}
 {:name "Alvalade", :k :city/alvalade, :search-items ["alvalade"]}
 {:name "Espinho", :k :city/espinho, :search-items ["espinho"]}
 {:name "Aljustrel", :k :city/aljustrel, :search-items ["aljustrel"]}
 {:name "Charneca de Caparica",
  :k :city/charneca-de-caparica,
  :search-items ["charneca" "de" "caparica"]}
 {:name "Porto", :k :city/porto, :search-items ["porto"]}
 {:name "Lamego", :k :city/lamego, :search-items ["lamego"]}
 {:name "Borba", :k :city/borba, :search-items ["borba"]}
 {:name "Tomar", :k :city/tomar, :search-items ["tomar"]}
 {:name "Sátão", :k :city/satao, :search-items ["satao"]}
 {:name "Malveira", :k :city/malveira, :search-items ["malveira"]}
 {:name "Santa Iria de Azoia",
  :k :city/santa-iria-de-azoia,
  :search-items ["santa" "iria" "de" "azoia"]}
 {:name "Alenquer", :k :city/alenquer, :search-items ["alenquer"]}
 {:name "Alvor", :k :city/alvor, :search-items ["alvor"]}
 {:name "Montemor-o-Velho",
  :k :city/montemorovelho,
  :search-items ["montemorovelho"]}
 {:name "Evora", :k :city/evora, :search-items ["evora"]}
 {:name "Ericeira", :k :city/ericeira, :search-items ["ericeira"]}
 {:name "Sardoal", :k :city/sardoal, :search-items ["sardoal"]}
 {:name "Golegã", :k :city/golega, :search-items ["golega"]}
 {:name "Palmela", :k :city/palmela, :search-items ["palmela"]}
 {:name "Moreira de Cónegos",
  :k :city/moreira-de-conegos,
  :search-items ["moreira" "de" "conegos"]}
 {:name "Esposende", :k :city/esposende, :search-items ["esposende"]}
 {:name "São Pedro do Sul",
  :k :city/sao-pedro-do-sul,
  :search-items ["sao" "pedro" "do" "sul"]}
 {:name "Monchique", :k :city/monchique, :search-items ["monchique"]}
 {:name "Gonçalo", :k :city/goncalo, :search-items ["goncalo"]}
 {:name "Alcochete", :k :city/alcochete, :search-items ["alcochete"]}
 {:name "Maia", :k :city/maia, :search-items ["maia"]}
 {:name "Gafanha da Nazaré",
  :k :city/gafanha-da-nazare,
  :search-items ["gafanha" "da" "nazare"]}
 {:name "Proença-a-Nova",
  :k :city/proencaanova,
  :search-items ["proencaanova"]}
 {:name "Alcanede", :k :city/alcanede, :search-items ["alcanede"]}
 {:name "Portel", :k :city/portel, :search-items ["portel"]}
 {:name "São Pedro da Cova",
  :k :city/sao-pedro-da-cova,
  :search-items ["sao" "pedro" "da" "cova"]}
 {:name "Mora", :k :city/mora, :search-items ["mora"]}
 {:name "Figueiró", :k :city/figueiro, :search-items ["figueiro"]}
 {:name "Refojos de Basto",
  :k :city/refojos-de-basto,
  :search-items ["refojos" "de" "basto"]}
 {:name "Vilar Formoso",
  :k :city/vilar-formoso,
  :search-items ["vilar" "formoso"]}
 {:name "Tabuaço", :k :city/tabuaco, :search-items ["tabuaco"]}
 {:name "Alvaiázere",
  :k :city/alvaiazere,
  :search-items ["alvaiazere"]}
 {:name "Carrazeda de Ansiães",
  :k :city/carrazeda-de-ansiaes,
  :search-items ["carrazeda" "de" "ansiaes"]}
 {:name "Elvas", :k :city/elvas, :search-items ["elvas"]}
 {:name "Lourosa", :k :city/lourosa, :search-items ["lourosa"]}
 {:name "Moura", :k :city/moura, :search-items ["moura"]}
 {:name "Pinhal Novo",
  :k :city/pinhal-novo,
  :search-items ["pinhal" "novo"]}
 {:name "Cete", :k :city/cete, :search-items ["cete"]}
 {:name "Mortágua", :k :city/mortagua, :search-items ["mortagua"]}
 {:name "Grândola", :k :city/grandola, :search-items ["grandola"]}
 {:name "Penafiel", :k :city/penafiel, :search-items ["penafiel"]}
 {:name "Vale de Cambra",
  :k :city/vale-de-cambra,
  :search-items ["vale" "de" "cambra"]}
 {:name "Vila Nova de Poiares",
  :k :city/vila-nova-de-poiares,
  :search-items ["vila" "nova" "de" "poiares"]}
 {:name "Estarreja", :k :city/estarreja, :search-items ["estarreja"]}
 {:name "Ponte", :k :city/ponte, :search-items ["ponte"]}
 {:name "São João da Pesqueira",
  :k :city/sao-joao-da-pesqueira,
  :search-items ["sao" "joao" "da" "pesqueira"]}
 {:name "Tarouca", :k :city/tarouca, :search-items ["tarouca"]}
 {:name "Damaia", :k :city/damaia, :search-items ["damaia"]}
 {:name "Figueira de Castelo Rodrigo",
  :k :city/figueira-de-castelo-rodrigo,
  :search-items ["figueira" "de" "castelo" "rodrigo"]}
 {:name "Esgueira", :k :city/esgueira, :search-items ["esgueira"]}
 {:name "Armação de Pêra",
  :k :city/armacao-de-pera,
  :search-items ["armacao" "de" "pera"]}
 {:name "Marinha Grande",
  :k :city/marinha-grande,
  :search-items ["marinha" "grande"]}
 {:name "Santo António da Charneca",
  :k :city/santo-antonio-da-charneca,
  :search-items ["santo" "antonio" "da" "charneca"]}
 {:name "Mértola", :k :city/mertola, :search-items ["mertola"]}
 {:name "Leiria", :k :city/leiria, :search-items ["leiria"]}
 {:name "Pedrouços", :k :city/pedroucos, :search-items ["pedroucos"]}
 {:name "Carregal do Sal",
  :k :city/carregal-do-sal,
  :search-items ["carregal" "do" "sal"]}
 {:name "Avis", :k :city/avis, :search-items ["avis"]}
 {:name "Canelas", :k :city/canelas, :search-items ["canelas"]}
 {:name "Algoz", :k :city/algoz, :search-items ["algoz"]}
 {:name "Cartaxo", :k :city/cartaxo, :search-items ["cartaxo"]}
 {:name "Tortosendo",
  :k :city/tortosendo,
  :search-items ["tortosendo"]}
 {:name "Gilmonde", :k :city/gilmonde, :search-items ["gilmonde"]}
 {:name "Faro", :k :city/faro, :search-items ["faro"]}
 {:name "Sobrosa", :k :city/sobrosa, :search-items ["sobrosa"]}
 {:name "Cascais", :k :city/cascais, :search-items ["cascais"]}
 {:name "Vila Nova de Gaia",
  :k :city/vila-nova-de-gaia,
  :search-items ["vila" "nova" "de" "gaia"]}
 {:name "Viatodos", :k :city/viatodos, :search-items ["viatodos"]}
 {:name "Vila Nova de Famalicão",
  :k :city/vila-nova-de-famalicao,
  :search-items ["vila" "nova" "de" "famalicao"]}
 {:name "Barcelos", :k :city/barcelos, :search-items ["barcelos"]}
 {:name "Alcoentre", :k :city/alcoentre, :search-items ["alcoentre"]}
 {:name "Bragança", :k :city/braganca, :search-items ["braganca"]}
 {:name "Vila Pouca de Aguiar",
  :k :city/vila-pouca-de-aguiar,
  :search-items ["vila" "pouca" "de" "aguiar"]}
 {:name "Carregado", :k :city/carregado, :search-items ["carregado"]}
 {:name "Moscavide", :k :city/moscavide, :search-items ["moscavide"]}
 {:name "Miranda do Corvo",
  :k :city/miranda-do-corvo,
  :search-items ["miranda" "do" "corvo"]}
 {:name "Guifões", :k :city/guifoes, :search-items ["guifoes"]}
 {:name "Santarem", :k :city/santarem, :search-items ["santarem"]}
 {:name "Penela", :k :city/penela, :search-items ["penela"]}
 {:name "Mêda", :k :city/meda, :search-items ["meda"]}
 {:name "Montalegre",
  :k :city/montalegre,
  :search-items ["montalegre"]}
 {:name "Vila de Prado",
  :k :city/vila-de-prado,
  :search-items ["vila" "de" "prado"]}
 {:name "Sabrosa", :k :city/sabrosa, :search-items ["sabrosa"]}
 {:name "Vila Franca de Xira",
  :k :city/vila-franca-de-xira,
  :search-items ["vila" "franca" "de" "xira"]}
 {:name "Caparica", :k :city/caparica, :search-items ["caparica"]}
 {:name "Lavra", :k :city/lavra, :search-items ["lavra"]}
 {:name "Vidigueira",
  :k :city/vidigueira,
  :search-items ["vidigueira"]}
 {:name "Sever do Vouga",
  :k :city/sever-do-vouga,
  :search-items ["sever" "do" "vouga"]}
 {:name "Barreiro", :k :city/barreiro, :search-items ["barreiro"]}
 {:name "Rio Maior", :k :city/rio-maior, :search-items ["rio" "maior"]}
 {:name "Ferreira do Alentejo",
  :k :city/ferreira-do-alentejo,
  :search-items ["ferreira" "do" "alentejo"]}
 {:name "Delães", :k :city/delaes, :search-items ["delaes"]}
 {:name "Penha Garcia",
  :k :city/penha-garcia,
  :search-items ["penha" "garcia"]}
 {:name "Fânzeres", :k :city/fanzeres, :search-items ["fanzeres"]}
 {:name "Arrifana", :k :city/arrifana, :search-items ["arrifana"]}
 {:name "Castelo Branco",
  :k :city/castelo-branco,
  :search-items ["castelo" "branco"]}
 {:name "Torno", :k :city/torno, :search-items ["torno"]}
 {:name "Castanheira de Pêra",
  :k :city/castanheira-de-pera,
  :search-items ["castanheira" "de" "pera"]}
 {:name "Carvalhosa",
  :k :city/carvalhosa,
  :search-items ["carvalhosa"]}
 {:name "Celorico de Basto",
  :k :city/celorico-de-basto,
  :search-items ["celorico" "de" "basto"]}
 {:name "Sines", :k :city/sines, :search-items ["sines"]}
 {:name "Crato", :k :city/crato, :search-items ["crato"]}
 {:name "Barbudo", :k :city/barbudo, :search-items ["barbudo"]}
 {:name "Odeceixe", :k :city/odeceixe, :search-items ["odeceixe"]}
 {:name "Póvoa de Lanhoso",
  :k :city/povoa-de-lanhoso,
  :search-items ["povoa" "de" "lanhoso"]}
 {:name "São João da Talha",
  :k :city/sao-joao-da-talha,
  :search-items ["sao" "joao" "da" "talha"]}
 {:name "Forte da Casa",
  :k :city/forte-da-casa,
  :search-items ["forte" "da" "casa"]}
 {:name "Alcains", :k :city/alcains, :search-items ["alcains"]}
 {:name "Mealhada", :k :city/mealhada, :search-items ["mealhada"]}
 {:name "Mozelos", :k :city/mozelos, :search-items ["mozelos"]}
 {:name "São Tomé", :k :city/sao-tome, :search-items ["sao" "tome"]}
 {:name "Coruche", :k :city/coruche, :search-items ["coruche"]}
 {:name "Chamusca", :k :city/chamusca, :search-items ["chamusca"]}
 {:name "Ourique", :k :city/ourique, :search-items ["ourique"]}
 {:name "Vila Nova da Baronia",
  :k :city/vila-nova-da-baronia,
  :search-items ["vila" "nova" "da" "baronia"]}
 {:name "Aguiar da Beira",
  :k :city/aguiar-da-beira,
  :search-items ["aguiar" "da" "beira"]}
 {:name "Figueiró dos Vinhos",
  :k :city/figueiro-dos-vinhos,
  :search-items ["figueiro" "dos" "vinhos"]}
 {:name "Sagres", :k :city/sagres, :search-items ["sagres"]}
 {:name "Arganil", :k :city/arganil, :search-items ["arganil"]}
 {:name "Ponte de Sôr",
  :k :city/ponte-de-sor,
  :search-items ["ponte" "de" "sor"]}
 {:name "Valença", :k :city/valenca, :search-items ["valenca"]}
 {:name "Granja do Ulmeiro",
  :k :city/granja-do-ulmeiro,
  :search-items ["granja" "do" "ulmeiro"]}
 {:name "Pinhel", :k :city/pinhel, :search-items ["pinhel"]}
 {:name "Vagos", :k :city/vagos, :search-items ["vagos"]}
 {:name "Perafita", :k :city/perafita, :search-items ["perafita"]}
 {:name "Esmoriz", :k :city/esmoriz, :search-items ["esmoriz"]}
 {:name "Encarnação",
  :k :city/encarnacao,
  :search-items ["encarnacao"]}
 {:name "Paço de Arcos",
  :k :city/paco-de-arcos,
  :search-items ["paco" "de" "arcos"]}
 {:name "Carapeços", :k :city/carapecos, :search-items ["carapecos"]}
 {:name "Sousel", :k :city/sousel, :search-items ["sousel"]}
 {:name "Aveiras de Baixo",
  :k :city/aveiras-de-baixo,
  :search-items ["aveiras" "de" "baixo"]}
 {:name "Marco de Canaveses",
  :k :city/marco-de-canaveses,
  :search-items ["marco" "de" "canaveses"]}
 {:name "Bobadela", :k :city/bobadela, :search-items ["bobadela"]}
 {:name "Vinhais", :k :city/vinhais, :search-items ["vinhais"]}
 {:name "Carnaxide", :k :city/carnaxide, :search-items ["carnaxide"]}
 {:name "Arruda dos Vinhos",
  :k :city/arruda-dos-vinhos,
  :search-items ["arruda" "dos" "vinhos"]}
 {:name "Vila Nova de Paiva",
  :k :city/vila-nova-de-paiva,
  :search-items ["vila" "nova" "de" "paiva"]}
 {:name "Barroselas",
  :k :city/barroselas,
  :search-items ["barroselas"]}
 {:name "Alcabideche",
  :k :city/alcabideche,
  :search-items ["alcabideche"]}
 {:name "Santarém", :k :city/santarem, :search-items ["santarem"]}
 {:name "Trancoso", :k :city/trancoso, :search-items ["trancoso"]}
 {:name "Maxial", :k :city/maxial, :search-items ["maxial"]}
 {:name "Sernancelhe",
  :k :city/sernancelhe,
  :search-items ["sernancelhe"]}
 {:name "Caneças", :k :city/canecas, :search-items ["canecas"]}
 {:name "Bombarral", :k :city/bombarral, :search-items ["bombarral"]}
 {:name "Valado dos Frades",
  :k :city/valado-dos-frades,
  :search-items ["valado" "dos" "frades"]}
 {:name "Caranguejeira",
  :k :city/caranguejeira,
  :search-items ["caranguejeira"]}
 {:name "Santa Comba Dão",
  :k :city/santa-comba-dao,
  :search-items ["santa" "comba" "dao"]}
 {:name "Jovim", :k :city/jovim, :search-items ["jovim"]}
 {:name "Belmonte", :k :city/belmonte, :search-items ["belmonte"]}
 {:name "Fundão", :k :city/fundao, :search-items ["fundao"]}
 {:name "Gavião", :k :city/gaviao, :search-items ["gaviao"]}
 {:name "Melgaço", :k :city/melgaco, :search-items ["melgaco"]}
 {:name "Alandroal", :k :city/alandroal, :search-items ["alandroal"]}
 {:name "Almodôvar", :k :city/almodovar, :search-items ["almodovar"]}
 {:name "Figueira da Foz",
  :k :city/figueira-da-foz,
  :search-items ["figueira" "da" "foz"]}
 {:name "Paredes de Coura",
  :k :city/paredes-de-coura,
  :search-items ["paredes" "de" "coura"]}
 {:name "Juncal", :k :city/juncal, :search-items ["juncal"]}
 {:name "Murça", :k :city/murca, :search-items ["murca"]}
 {:name "Ponte de Lima",
  :k :city/ponte-de-lima,
  :search-items ["ponte" "de" "lima"]}
 {:name "Recarei", :k :city/recarei, :search-items ["recarei"]}
 {:name "Couço", :k :city/couco, :search-items ["couco"]}
 {:name "Britelo", :k :city/britelo, :search-items ["britelo"]}
 {:name "Alpiarça", :k :city/alpiarca, :search-items ["alpiarca"]}
 {:name "São Félix da Marinha",
  :k :city/sao-felix-da-marinha,
  :search-items ["sao" "felix" "da" "marinha"]}
 {:name "Vila Praia de Âncora",
  :k :city/vila-praia-de-ancora,
  :search-items ["vila" "praia" "de" "ancora"]}
 {:name "Beja", :k :city/beja, :search-items ["beja"]}
 {:name "Barcelinhos",
  :k :city/barcelinhos,
  :search-items ["barcelinhos"]}
 {:name "Celorico da Beira",
  :k :city/celorico-da-beira,
  :search-items ["celorico" "da" "beira"]}
 {:name "Orgens", :k :city/orgens, :search-items ["orgens"]}
 {:name "Odivelas", :k :city/odivelas, :search-items ["odivelas"]}
 {:name "Vila Real de Santo António",
  :k :city/vila-real-de-santo-antonio,
  :search-items ["vila" "real" "de" "santo" "antonio"]}
 {:name "Linda-a-Velha",
  :k :city/lindaavelha,
  :search-items ["lindaavelha"]}
 {:name "Padrão da Légua",
  :k :city/padrao-da-legua,
  :search-items ["padrao" "da" "legua"]}
 {:name "Brito", :k :city/brito, :search-items ["brito"]}
 {:name "Penedono", :k :city/penedono, :search-items ["penedono"]}
 {:name "Redondo", :k :city/redondo, :search-items ["redondo"]}
 {:name "Albergaria dos Doze",
  :k :city/albergaria-dos-doze,
  :search-items ["albergaria" "dos" "doze"]}
 {:name "Canidelo", :k :city/canidelo, :search-items ["canidelo"]}
 {:name "Rio de Mouro",
  :k :city/rio-de-mouro,
  :search-items ["rio" "de" "mouro"]}
 {:name "Borba de Godim",
  :k :city/borba-de-godim,
  :search-items ["borba" "de" "godim"]}
 {:name "Tadim", :k :city/tadim, :search-items ["tadim"]}
 {:name "Vila Franca das Naves",
  :k :city/vila-franca-das-naves,
  :search-items ["vila" "franca" "das" "naves"]}
 {:name "Paços de Ferreira",
  :k :city/pacos-de-ferreira,
  :search-items ["pacos" "de" "ferreira"]}
 {:name "Valongo", :k :city/valongo, :search-items ["valongo"]}
 {:name "Cinfães", :k :city/cinfaes, :search-items ["cinfaes"]}
 {:name "Amora", :k :city/amora, :search-items ["amora"]}
 {:name "Sertã", :k :city/serta, :search-items ["serta"]}
 {:name "Tamel (São Veríssimo)",
  :k :city/tamel-sao-verissimo,
  :search-items ["tamel" "sao" "verissimo"]}
 {:name "Oliveira do Hospital",
  :k :city/oliveira-do-hospital,
  :search-items ["oliveira" "do" "hospital"]}
 {:name "Buarcos", :k :city/buarcos, :search-items ["buarcos"]}
 {:name "Santa Maria da Feira",
  :k :city/santa-maria-da-feira,
  :search-items ["santa" "maria" "da" "feira"]}
 {:name "Águeda", :k :city/agueda, :search-items ["agueda"]}
 {:name "Alfena", :k :city/alfena, :search-items ["alfena"]}
 {:name "Ribeirão", :k :city/ribeirao, :search-items ["ribeirao"]}
 {:name "Campo", :k :city/campo, :search-items ["campo"]}
 {:name "Monte de Caparica",
  :k :city/monte-de-caparica,
  :search-items ["monte" "de" "caparica"]}
 {:name "Povoa de Varzim",
  :k :city/povoa-de-varzim,
  :search-items ["povoa" "de" "varzim"]}
 {:name "Lisboa", :k :city/lisboa, :search-items ["lisboa"]}
 {:name "Lourinhã", :k :city/lourinha, :search-items ["lourinha"]}
 {:name "Ourém", :k :city/ourem, :search-items ["ourem"]}
 {:name "Amarante", :k :city/amarante, :search-items ["amarante"]}
 {:name "Martim", :k :city/martim, :search-items ["martim"]}
 {:name "Ferreira do Zêzere",
  :k :city/ferreira-do-zezere,
  :search-items ["ferreira" "do" "zezere"]}
 {:name "Santa Marta de Penaguião",
  :k :city/santa-marta-de-penaguiao,
  :search-items ["santa" "marta" "de" "penaguiao"]}
 {:name "Abrantes", :k :city/abrantes, :search-items ["abrantes"]}
 {:name "Nelas", :k :city/nelas, :search-items ["nelas"]}
 {:name "Casal de Cambra",
  :k :city/casal-de-cambra,
  :search-items ["casal" "de" "cambra"]}
 {:name "Pegões", :k :city/pegoes, :search-items ["pegoes"]}
 {:name "Armamar", :k :city/armamar, :search-items ["armamar"]}
 {:name "Cantanhede",
  :k :city/cantanhede,
  :search-items ["cantanhede"]}
 {:name "Bairros", :k :city/bairros, :search-items ["bairros"]}
 {:name "Póvoa de Varzim",
  :k :city/povoa-de-varzim,
  :search-items ["povoa" "de" "varzim"]}
 {:name "Gove", :k :city/gove, :search-items ["gove"]}
 {:name "Rinchoa", :k :city/rinchoa, :search-items ["rinchoa"]}
 {:name "Campo Maior",
  :k :city/campo-maior,
  :search-items ["campo" "maior"]}
 {:name "Montemor-o-Novo",
  :k :city/montemoronovo,
  :search-items ["montemoronovo"]}
 {:name "Campos", :k :city/campos, :search-items ["campos"]}
 {:name "Penalva do Castelo",
  :k :city/penalva-do-castelo,
  :search-items ["penalva" "do" "castelo"]}
 {:name "Venda da Pedra",
  :k :city/venda-da-pedra,
  :search-items ["venda" "da" "pedra"]}
 {:name "Ansião", :k :city/ansiao, :search-items ["ansiao"]}
 {:name "Alcácer do Sal",
  :k :city/alcacer-do-sal,
  :search-items ["alcacer" "do" "sal"]}
 {:name "Oiã", :k :city/oia, :search-items ["oia"]}
 {:name "Celeirós", :k :city/celeiros, :search-items ["celeiros"]}
 {:name "Agualva", :k :city/agualva, :search-items ["agualva"]}
 {:name "Alijó", :k :city/alijo, :search-items ["alijo"]}
 {:name "Torres Novas",
  :k :city/torres-novas,
  :search-items ["torres" "novas"]}
 {:name "Arco de Baúlhe",
  :k :city/arco-de-baulhe,
  :search-items ["arco" "de" "baulhe"]}
 {:name "Corroios", :k :city/corroios, :search-items ["corroios"]}
 {:name "Palhaça", :k :city/palhaca, :search-items ["palhaca"]}
 {:name "Lousada", :k :city/lousada, :search-items ["lousada"]}
 {:name "Samora Correia",
  :k :city/samora-correia,
  :search-items ["samora" "correia"]}
 {:name "Arouca", :k :city/arouca, :search-items ["arouca"]}
 {:name "Baixa da Banheira",
  :k :city/baixa-da-banheira,
  :search-items ["baixa" "da" "banheira"]}
 {:name "Macedo de Cavaleiros",
  :k :city/macedo-de-cavaleiros,
  :search-items ["macedo" "de" "cavaleiros"]}
 {:name "Santo António dos Cavaleiros",
  :k :city/santo-antonio-dos-cavaleiros,
  :search-items ["santo" "antonio" "dos" "cavaleiros"]}
 {:name "São João da Madeira",
  :k :city/sao-joao-da-madeira,
  :search-items ["sao" "joao" "da" "madeira"]}
 {:name "Cepelos", :k :city/cepelos, :search-items ["cepelos"]}
 {:name "Joane", :k :city/joane, :search-items ["joane"]}
 {:name "Quarteira", :k :city/quarteira, :search-items ["quarteira"]}
 {:name "Reguengos de Monsaraz",
  :k :city/reguengos-de-monsaraz,
  :search-items ["reguengos" "de" "monsaraz"]}
 {:name "Santo André",
  :k :city/santo-andre,
  :search-items ["santo" "andre"]}
 {:name "Vila Real", :k :city/vila-real, :search-items ["vila" "real"]}
 {:name "Queluz", :k :city/queluz, :search-items ["queluz"]}
 {:name "Sernande", :k :city/sernande, :search-items ["sernande"]}
 {:name "S.Teotónio", :k :city/steotonio, :search-items ["steotonio"]}
 {:name "Tavira", :k :city/tavira, :search-items ["tavira"]}
 {:name "São Mamede de Infesta",
  :k :city/sao-mamede-de-infesta,
  :search-items ["sao" "mamede" "de" "infesta"]}
 {:name "Guarda", :k :city/guarda, :search-items ["guarda"]}
 {:name "Vieira do Minho",
  :k :city/vieira-do-minho,
  :search-items ["vieira" "do" "minho"]}
 {:name "Leça da Palmeira",
  :k :city/leca-da-palmeira,
  :search-items ["leca" "da" "palmeira"]}
 {:name "Serpa", :k :city/serpa, :search-items ["serpa"]}
 {:name "Caminha", :k :city/caminha, :search-items ["caminha"]}
 {:name "Gouveia", :k :city/gouveia, :search-items ["gouveia"]}
 {:name "Seia", :k :city/seia, :search-items ["seia"]}
 {:name "Campelos", :k :city/campelos, :search-items ["campelos"]}
 {:name "Vila Nova de Foz Côa",
  :k :city/vila-nova-de-foz-coa,
  :search-items ["vila" "nova" "de" "foz" "coa"]}
 {:name "Algueirão-Mem Martins",
  :k :city/algueiraomem-martins,
  :search-items ["algueiraomem" "martins"]}
 {:name "Loulé", :k :city/loule, :search-items ["loule"]}
 {:name "Matosinhos",
  :k :city/matosinhos,
  :search-items ["matosinhos"]}
 {:name "Valbom", :k :city/valbom, :search-items ["valbom"]}
 {:name "Serzedelo", :k :city/serzedelo, :search-items ["serzedelo"]}
 {:name "Mangualde", :k :city/mangualde, :search-items ["mangualde"]}
 {:name "Moncarapacho",
  :k :city/moncarapacho,
  :search-items ["moncarapacho"]}
 {:name "Fornos de Algodres",
  :k :city/fornos-de-algodres,
  :search-items ["fornos" "de" "algodres"]}
 {:name "Aveiro", :k :city/aveiro, :search-items ["aveiro"]}
 {:name "Milharado", :k :city/milharado, :search-items ["milharado"]}
 {:name "Freixo", :k :city/freixo, :search-items ["freixo"]}
 {:name "Avelar", :k :city/avelar, :search-items ["avelar"]}
 {:name "Oeiras", :k :city/oeiras, :search-items ["oeiras"]}
 {:name "Sintra", :k :city/sintra, :search-items ["sintra"]}
 {:name "Moimenta da Beira",
  :k :city/moimenta-da-beira,
  :search-items ["moimenta" "da" "beira"]}
 {:name "Ovar", :k :city/ovar, :search-items ["ovar"]}
 {:name "Canas de Senhorim",
  :k :city/canas-de-senhorim,
  :search-items ["canas" "de" "senhorim"]}
 {:name "Nazaré", :k :city/nazare, :search-items ["nazare"]}
 {:name "Vermelha", :k :city/vermelha, :search-items ["vermelha"]}
 {:name "Alhandra", :k :city/alhandra, :search-items ["alhandra"]}
 {:name "Margaride (Santa Eulália)",
  :k :city/margaride-santa-eulalia,
  :search-items ["margaride" "santa" "eulalia"]}
 {:name "Agualva-Cacém",
  :k :city/agualvacacem,
  :search-items ["agualvacacem"]}
 {:name "Óbidos", :k :city/obidos, :search-items ["obidos"]}
 {:name "Moreira", :k :city/moreira, :search-items ["moreira"]}
 {:name "Vale de Açores",
  :k :city/vale-de-acores,
  :search-items ["vale" "de" "acores"]}
 {:name "Nisa", :k :city/nisa, :search-items ["nisa"]}
 {:name "Forjães", :k :city/forjaes, :search-items ["forjaes"]}
 {:name "Caldas da Rainha",
  :k :city/caldas-da-rainha,
  :search-items ["caldas" "da" "rainha"]}
 {:name "Canedo", :k :city/canedo, :search-items ["canedo"]}
 {:name "Brandoa", :k :city/brandoa, :search-items ["brandoa"]}
 {:name "Palhais", :k :city/palhais, :search-items ["palhais"]}
 {:name "Algés", :k :city/alges, :search-items ["alges"]}
 {:name "Riba d'Ave",
  :k :city/riba-dave,
  :search-items ["riba" "dave"]}
 {:name "Oliveira do Douro",
  :k :city/oliveira-do-douro,
  :search-items ["oliveira" "do" "douro"]}
 {:name "Mogadouro", :k :city/mogadouro, :search-items ["mogadouro"]}
 {:name "Bornes de Aguiar",
  :k :city/bornes-de-aguiar,
  :search-items ["bornes" "de" "aguiar"]}
 {:name "Lustosa", :k :city/lustosa, :search-items ["lustosa"]}
 {:name "Castro Daire",
  :k :city/castro-daire,
  :search-items ["castro" "daire"]}
 {:name "Caxarias", :k :city/caxarias, :search-items ["caxarias"]}
 {:name "São Félix da M.nha",
  :k :city/sao-felix-da-mnha,
  :search-items ["sao" "felix" "da" "mnha"]}
 {:name "Teixoso", :k :city/teixoso, :search-items ["teixoso"]}
 {:name "Campo de Besteiros",
  :k :city/campo-de-besteiros,
  :search-items ["campo" "de" "besteiros"]}
 {:name "Sandim", :k :city/sandim, :search-items ["sandim"]}
 {:name "Viseu", :k :city/viseu, :search-items ["viseu"]}
 {:name "Águas Santas",
  :k :city/aguas-santas,
  :search-items ["aguas" "santas"]}
 {:name "Abrigada", :k :city/abrigada, :search-items ["abrigada"]}
 {:name "Ferreiros", :k :city/ferreiros, :search-items ["ferreiros"]}
 {:name "Vila Cova à Coelheira",
  :k :city/vila-cova-a-coelheira,
  :search-items ["vila" "cova" "a" "coelheira"]}
 {:name "São Brás de Alportel",
  :k :city/sao-bras-de-alportel,
  :search-items ["sao" "bras" "de" "alportel"]}
 {:name "Portimão", :k :city/portimao, :search-items ["portimao"]}
 {:name "Coronado", :k :city/coronado, :search-items ["coronado"]}
 {:name "Lordelo", :k :city/lordelo, :search-items ["lordelo"]}
 {:name "Gulpilhares",
  :k :city/gulpilhares,
  :search-items ["gulpilhares"]}
 {:name "Pinheiro", :k :city/pinheiro, :search-items ["pinheiro"]}
 {:name "Fazendas de Almeirim",
  :k :city/fazendas-de-almeirim,
  :search-items ["fazendas" "de" "almeirim"]}
 {:name "Torres Vedras",
  :k :city/torres-vedras,
  :search-items ["torres" "vedras"]}
 {:name "Bencatel", :k :city/bencatel, :search-items ["bencatel"]}
 {:name "Silves", :k :city/silves, :search-items ["silves"]}
 {:name "Monção", :k :city/moncao, :search-items ["moncao"]}
 {:name "Venda do Pinheiro",
  :k :city/venda-do-pinheiro,
  :search-items ["venda" "do" "pinheiro"]}
 {:name "Fátima", :k :city/fatima, :search-items ["fatima"]}
 {:name "Resende", :k :city/resende, :search-items ["resende"]}
 {:name "Vimioso", :k :city/vimioso, :search-items ["vimioso"]}
 {:name "Sabugal", :k :city/sabugal, :search-items ["sabugal"]}
 {:name "Currelos", :k :city/currelos, :search-items ["currelos"]}
 {:name "Ronfe", :k :city/ronfe, :search-items ["ronfe"]}
 {:name "Arrentela", :k :city/arrentela, :search-items ["arrentela"]}
 {:name "Mafra", :k :city/mafra, :search-items ["mafra"]}
 {:name "Vila do Conde",
  :k :city/vila-do-conde,
  :search-items ["vila" "do" "conde"]}
 {:name "Alfândega da Fé",
  :k :city/alfandega-da-fe,
  :search-items ["alfandega" "da" "fe"]}
 {:name "Nevogilde", :k :city/nevogilde, :search-items ["nevogilde"]}
 {:name "Camarate", :k :city/camarate, :search-items ["camarate"]}
 {:name "Laranjeiro",
  :k :city/laranjeiro,
  :search-items ["laranjeiro"]}
 {:name "Pontinha", :k :city/pontinha, :search-items ["pontinha"]}
 {:name "Albergaria-a-Velha",
  :k :city/albergariaavelha,
  :search-items ["albergariaavelha"]}
 {:name "Benavente", :k :city/benavente, :search-items ["benavente"]}
 {:name "Sesimbra", :k :city/sesimbra, :search-items ["sesimbra"]}
 {:name "Santa Marinha do Zêzere",
  :k :city/santa-marinha-do-zezere,
  :search-items ["santa" "marinha" "do" "zezere"]}
 {:name "Torre de Moncorvo",
  :k :city/torre-de-moncorvo,
  :search-items ["torre" "de" "moncorvo"]}
 {:name "Mirandela", :k :city/mirandela, :search-items ["mirandela"]}
 {:name "Telões", :k :city/teloes, :search-items ["teloes"]}
 {:name "Mondim de Basto",
  :k :city/mondim-de-basto,
  :search-items ["mondim" "de" "basto"]}
 {:name "Vila das Aves",
  :k :city/vila-das-aves,
  :search-items ["vila" "das" "aves"]}
 {:name "Godim", :k :city/godim, :search-items ["godim"]}
 {:name "Pêro Pinheiro",
  :k :city/pero-pinheiro,
  :search-items ["pero" "pinheiro"]}
 {:name "Santa Eulália",
  :k :city/santa-eulalia,
  :search-items ["santa" "eulalia"]}
 {:name "Albufeira", :k :city/albufeira, :search-items ["albufeira"]}
 {:name "Santa Maria",
  :k :city/santa-maria,
  :search-items ["santa" "maria"]}
 {:name "Pombal", :k :city/pombal, :search-items ["pombal"]}
 {:name "Alpendurada e Matos",
  :k :city/alpendurada-e-matos,
  :search-items ["alpendurada" "e" "matos"]}
 {:name "Arraiolos", :k :city/arraiolos, :search-items ["arraiolos"]}
 {:name "Croca", :k :city/croca, :search-items ["croca"]}
 {:name "Amares", :k :city/amares, :search-items ["amares"]}
 {:name "Senhora da Hora",
  :k :city/senhora-da-hora,
  :search-items ["senhora" "da" "hora"]}
 {:name "Almada", :k :city/almada, :search-items ["almada"]}
 {:name "Quelfes", :k :city/quelfes, :search-items ["quelfes"]}
 {:name "Quinta do Conde",
  :k :city/quinta-do-conde,
  :search-items ["quinta" "do" "conde"]}
 {:name "Lousado", :k :city/lousado, :search-items ["lousado"]}
 {:name "Baião", :k :city/baiao, :search-items ["baiao"]}
 {:name "Paul", :k :city/paul, :search-items ["paul"]}
 {:name "Reboleira", :k :city/reboleira, :search-items ["reboleira"]}
 {:name "Vila Nova da Barquinha",
  :k :city/vila-nova-da-barquinha,
  :search-items ["vila" "nova" "da" "barquinha"]}
 {:name "Fafe", :k :city/fafe, :search-items ["fafe"]}
 {:name "Baguim do Monte",
  :k :city/baguim-do-monte,
  :search-items ["baguim" "do" "monte"]}
 {:name "Ribeira de Pena",
  :k :city/ribeira-de-pena,
  :search-items ["ribeira" "de" "pena"]}
 {:name "Vilar do Paraíso",
  :k :city/vilar-do-paraiso,
  :search-items ["vilar" "do" "paraiso"]}
 {:name "Póvoa de Santa Iria",
  :k :city/povoa-de-santa-iria,
  :search-items ["povoa" "de" "santa" "iria"]}
 {:name "Guimarães", :k :city/guimaraes, :search-items ["guimaraes"]}
 {:name "Vieira de Leiria",
  :k :city/vieira-de-leiria,
  :search-items ["vieira" "de" "leiria"]}
 {:name "Arcos de Valdevez",
  :k :city/arcos-de-valdevez,
  :search-items ["arcos" "de" "valdevez"]}
 {:name "Modivas", :k :city/modivas, :search-items ["modivas"]}
 {:name "Salvaterra de Magos",
  :k :city/salvaterra-de-magos,
  :search-items ["salvaterra" "de" "magos"]}
 {:name "Valpaços", :k :city/valpacos, :search-items ["valpacos"]}
 {:name "Lagoa", :k :city/lagoa, :search-items ["lagoa"]}
 {:name "Ermesinde", :k :city/ermesinde, :search-items ["ermesinde"]}
 {:name "Caldelas", :k :city/caldelas, :search-items ["caldelas"]}
 {:name "Sobrado", :k :city/sobrado, :search-items ["sobrado"]}
 {:name "Tábua", :k :city/tabua, :search-items ["tabua"]}
 {:name "CasteloBranco",
  :k :district/castelobranco,
  :search-items ["castelobranco"]}
 {:name "Setúbal", :k :district/setubal, :search-items ["setubal"]}
 {:name "Évora", :k :district/evora, :search-items ["evora"]}
 {:name "Portalegre",
  :k :district/portalegre,
  :search-items ["portalegre"]}
 {:name "Braga", :k :district/braga, :search-items ["braga"]}
 {:name "Coimbra", :k :district/coimbra, :search-items ["coimbra"]}
 {:name "Viana do Castelo",
  :k :district/viana-do-castelo,
  :search-items ["viana" "do" "castelo"]}
 {:name "Porto", :k :district/porto, :search-items ["porto"]}
 {:name "Leiria", :k :district/leiria, :search-items ["leiria"]}
 {:name "Faro", :k :district/faro, :search-items ["faro"]}
 {:name "Bragança", :k :district/braganca, :search-items ["braganca"]}
 {:name "Santarém", :k :district/santarem, :search-items ["santarem"]}
 {:name "Beja", :k :district/beja, :search-items ["beja"]}
 {:name "Lisboa", :k :district/lisboa, :search-items ["lisboa"]}
 {:name "Vila Real",
  :k :district/vila-real,
  :search-items ["vila" "real"]}
 {:name "Guarda", :k :district/guarda, :search-items ["guarda"]}
 {:name "Aveiro", :k :district/aveiro, :search-items ["aveiro"]}
 {:name "Viseu", :k :district/viseu, :search-items ["viseu"]}])
