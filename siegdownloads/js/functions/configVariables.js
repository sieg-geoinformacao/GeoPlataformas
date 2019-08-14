var listnome = {
      "ae":['\u00c1reas Especiais'],
      "bc":['Base Cartografica'],
      "bc100":['Base Cartografica - IBGE (1:100.000)'],
      "bio":['Biodiversidade'],
      "c":['Clima'],
      "cs":['Cobertura e Uso do Solo'],
      "diag":['Diagn\u00f3stico'],
      "edu":['Educa\u00e7ão'],
      "geo":['Geologia','Geologia'],
      "geom":['Geomorfologia','Geomorfologia'],
      "is":['Imagens de Sat\u00e9lite'],
      "i":['Índice'],
      "infra":['Infraestrutura'],
      "macrocar":['MacroZAEE Cartografia'],
      "marcrohid":['MacroZAEE Hidrografia'],
      "macrobio":['MacroZAEE Meio Bi\u00f3tico'],
      "macromf":['MacroZAEE Meio F\u00edsico'],
      "macropm":['MacroZAEE Produtos do Macrozaee'],
      "macrozo":['MacroZAEE Zoneamentos'],
      "rs":['Recursos H\u00eddricos'],
      "s":['Solo']
}
var listMicro = [
                  'Microrregi\u00e3o An\u00e1polis','Microrregi\u00e3o Anicuns','Microrregi\u00e3o Aragar\u00e7as','Microrregi\u00e3o Catal\u00e3o','Microrregi\u00e3o Ceres','Microrregi\u00e3o Chapada dos Veadeiros',
                  'Microrregi\u00e3o Entorno de Bras\u00edlia','Microrregi\u00e3o Goi\u00e2nia','Microrregi\u00e3o Ipor\u00e1','Microrregi\u00e3o Meia Ponte','Microrregi\u00e3o Pires do Rio',
                  'Microrregi\u00e3o Porangatu','Microrregi\u00e3o Quirin\u00f3polis','Microrregi\u00e3o Rio Vermelho','Microrregi\u00e3o S\u00e3o Miguel do Araguaia',
                  'Microrregi\u00e3o Sudoeste de Goi\u00e1s','Microrregi\u00e3o Vale do Rio dos Bois','Microrregi\u00e3o V\u00e3o do Paran\u00e3'
                ]

var listCarta = [
                    'sd22xa','sd22xb','sd22xc','sd22xd','sd22yb','sd22yd','sd22za','sd22zb','sd22zc','sd22zd','sd23va','sd23vb','sd23vc','sd23vd','sd23ya',
                    'sd23yb','sd23yc','se22va','se22vb','se22vc','se22vd','se22xa','se22xb','se22xc','se22xd','se22ya','se22yb','se22yd',
                    'se22za','se22zb','se22zc','se23va','se23vc','se23ya'
                  ]


var Temas = {
           "ae":[
                        'Areas prioritarias para conserva\u00e7\u00e3o','Cavernas', 'Parques federais estaduais', 'Parque municipal serra da areia'
                        ,'Reservas particulares do patrimonio natural', 'Unidade de uso sustent\u00e1vel'
                 ],     
           "bc":[
                        'Areas inundadas', 'Curvas de n\u00edvel', 'Drenagens', 'Edifica\u00e7\u00e3o', 'Hipsometria', 'Massa de \u00e1gua'
                        ,'Munic\u00edpios (2017)', 'Pontos cotados e referencia de n\u00edvel', 'Povoados'
                        ,'Regi\u00e3o de planejamento','Sedes e outras localidades-pol\u00edgonos', 'Sedes e outras localidades-pontos', 'Serras'
                  ],
           "bc100":[
                      'Aglomerado Rural Isolado','Arruamento', 'Banco de Areia', 'Barragem (Pol\u00edgono)', 'Barragem (Linha)', 'Capital', 'Cemit\u00e9rio', 'Cemit\u00e9rio (Ponto)'
                      ,'Cidade', 'Corredeira (Pol\u00edgono)', 'Corredeira (Linha)','Corredeira (Ponto)', 'Drenagem 1:100.000','Edifica\u00e7\u00e3o Agrop. e Extr. Vegetal'
                      ,'Edifica\u00e7\u00e3o Ensino', 'Grupo de Transformadores (Ponto)', 'Grupo de Transformadores (Pol\u00edgono)','Hidrel\u00e9trica', 'Ilha', 'Ilha (Linha)'
                      ,'Ilha (Ponto)', "Massa d'\u00e1gua", 'Passagem Elevada Viaduto (Linha)','Pista Pouso (Linha)', 'Pista Pouso (Ponto)', 'Ponte (Ponto)', 'Ponte (Linha)'
                      ,'Queda de \u00e1gua', 'Queda de \u00e1gua (Ponto)','Sumidouro e Vertedouro', 'Travessia', 'Trecho de Energia','Trecho Massa de \u00e1gua', 'Trecho Ferrovi\u00e1rio'
                      ,'Trecho Rodovi\u00e1rio', 'T\u00fanel', 'Unidade de Federa\u00e7\u00e3o','Vila', 'Viaduto (Ponto)'
                      ], 
           "bio":['Fauna','Flora'],
           "c":[        'Estações chuvas','Esta\u00e7\u00f5es climatologicas','Esta\u00e7\u00f5es deficit e excendente hidrico','Esta\u00e7\u00f5es temperatura',
                        'Esta\u00e7\u00f5es umidade-evapotranspira\u00e7\u00e3o'],
           "cs":[       'Cobertura e uso do solo - 2013','Cobertura e uso do solo - 2014','Manchas urbanas 1991','Manchas urbanas 2000',
                        'Manchas urbanas 2010','Piv\u00f4s centrais (2000)','Piv\u00f4s centrais (2001)','Piv\u00f4s centrais (2003)','Piv\u00f4s centrais (2006) IMB-SEMARH',
                        'Piv\u00f4s centrais (2006) SEFAZ','Piv\u00f4s centrais (2012)','Piv\u00f4s centrais (2013)','Perda de vegeta\u00e7\u00e3o','Piv\u00f4s centrais (2015)',
                        'Piv\u00f4s centrais (2016)'
           ],
           "diag":[     'Aglomerado Urbano de Goi\u00e2nia','Micro-Regi\u00e3o Meia-Ponte','Regiao do Entorno do Distrito Federal'],
           "edu":[      'Escolas p\u00fablicas'],
           "geo":[      'Gemas','Materiais empregados na construç\u00e3o civil','Materiais energ\u00e9ticos','Insumos na agricultura','Minerais met\u00e1licos','Outros minerais industriais',
                        'Rochas ornamentais','Eixos de dobra','Empreendimento mineiro','Estruturas','Falhas','Geocronologia','Geodiversidade','Geoqu\u00edmica de sedimento de ativo de corrente',
                        'Levantamento bibliogr\u00e1fico escala 100000','Levantamento bibliogr\u00e1fico escala 250000','Levantamentos geof\u00edsicos','Levantamento geoqu\u00edmicos',
                        'Levantamento tese e dissertaç\u00e3o','Levantamentos trabalhos de graduaç\u00e3o','Lineamentos','Petrografia','Potencial mineral','Recursos minerais','Unidades geol\u00f3gicas'],
           "geom":[     'Unidades geomorfol\u00f3gicas'],
           "is":[
                  {
                    'Alos-Sensor AVNIR2':{
                                          'avnir2':listMicro
                                          }
                  },
                  {
                    'Alos-Sensor Palsar':{
                                          'palsar':['Estado de Goias']

                                        }
                  },
                  {
                    'CBERS2 - CCD':{
                                    'cbers':{
                                            '2004':listCarta,
                                            '2005':listCarta,
                                            '2006':listCarta,
                                            '2008':listCarta
                                          }
                                   }
                  },
                  {
                    'Landsat7 ETM':{
                                    'landsat7':{
                                                '2001':listCarta,
                                                '2002_2003':listCarta
                                              }
                                    }
                  },
                  {
                    'Landsat8 Sensor OLI':{
                                          'Landsat8':{
                                                      '2013':listMicro,
                                                      '2015':listMicro,
                                                      '2016':listMicro,
                                                      '2017':listMicro
                                                    }
                                          }
                  },
                  {
                    'Resourcesat 2':{
                                      'resourcesat':{
                                                      '2015':listMicro,
                                                      '2016':listMicro,
                                                      '2017':listMicro
                                                    }
                                    }
                  },
                  {
                    'SRTM':{
                            'srtm':['Estado de Goias']
                          }
                  },
                  {
                    'Sentinel - 2':{
                            'sentinel2':{
                                                '2016':listMicro,
                                                '2017':listMicro
                                          }
                                  }
                  },
                  {
                    'MODIS':{
                              'modis':{
                                        '2017':['Land Surface Temperature']

                                      }
                            }
                  }
                ],
           "i":['CBERS CCD','Cenas imagens LANDSAT7 ETM','Folhas cartogr\u00e1ficas 100K','Folhas cartogr\u00e1ficas 250K','IKONOS','\u00d3rbita Ponto imagem Landsat 7 ETM'],
           "infra":['Abastecimento de \u00e1gua','Aer\u00f3dromos 2009','Aer\u00f3dromos 2014','Aterro','Bairros com esgoto','Bairros com esgoto','Balsas','Barragens','Cemit\u00e9rios','Cisternas',
                        'Etes','Linhas de transmiss\u00e3o','Malha vi\u00e1ria 2009','Malha vi\u00e1ria 2012','Malha vi\u00e1ria atualizada','Postos rodovi\u00e1rios','Sub-estaç\u00e3o','UHE e PCH'],
           "macrocar":['Altimetria','Limite estadual de Goi\u00e1s','Limite municipal do estado de Goi\u00e1s','Per\u00edmetro urbano','Ponto altim\u00e9trico'],
           "marcrohid":['Drenagem zaee','Massa de \u00e1gua','Otto bacias hidrogr\u00e1ficas','Sistemas aqu\u00edferos-zaee'],
           "macrobio":['Fauna-zaee','Flora-zaee'],
           "macromf":['Geologia-zaee','Geomorfologia-zaee','Solos-zaee','Vulnerabilidade ambiental-zaee'],
           "macropm":['Desenvolvimento socioecon\u00f4mico municipal','Macrozonas ecol\u00f3gico e econ\u00f4micas','Uso do solo-zaee','Vulnerabilidade ambiental-zaee'],
           "macrozo":['\u00c1reas Priorit\u00e1rias para conserv. da biodiversidade','DIARIA','ZAECANA','ZAENE','ZEEMP','ZENAG','ZENDF'],
           "rs":['Aqu\u00edferos fraturados','Aqu\u00edferos porosos','Bacias hidrogr\u00e1ficas','Ensaios de infiltra\u00e7\u00e3o','Espelhos d\u0027\u00e1gua artificiais (2015)',
                        'Espelhos d\u0027\u00e1gua artificiais (2016)','Esta\u00e7\u00f5es de capta\u00e7\u00f5es de \u00e1gua','Fontes sulfurosas','Fontes termais','Kts','Po\u00e7os termais',
                        'Poços tubulares','Sistemas aqu\u00edferos'
           ],
           "s":['Perfis de solos','Solos','Solos (1:100.000)','Solos (1:250.000)'],
      }






//var diagOp = {
      //"1":['Diagnóstico - Zoneamento Ecológico - Econômico']
//}
//
//var imgsatOp = {
      //"1":['Imagens de Satélite - Alos-Sensor AVNIR2'],
      //"2":['Imagens de Satélite - CBERS2 - CCD - 2004'],
      //"3":['Imagens de Satélite - CBERS2 - CCD - 2005'],
      //"4":['Imagens de Satélite - CBERS2 - CCD - 2006'],
      //"5":['Imagens de Satélite - CBERS2 - CCD - 2008'],
      //"6":['Imagens de Satélite - Landsat7 ETM - 2001'],
      //"7":['Imagens de Satélite - Landsat7 ETM - 2002_2003'],
      //"8":['Imagens de Satélite - Landsat8 Sensor OLI - 2013'],
      //"9":['Imagens de Satélite - Landsat8 Sensor OLI - 2015'],
      //"10":['Imagens de Satélite - Landsat8 Sensor OLI - 2016'],
      //"11":['Imagens de Satélite - Landsat8 Sensor OLI - 2017'],
      //"12":['Imagens de Satélite - Landsat8 Sensor OLI - 2018'],
      //"13":['Imagens de Satélite - Resourcesat 2 - 2015'],
      //"14":['Imagens de Satélite - Resourcesat 2 - 2016'],
      //"15":['Imagens de Satélite - SRTM'],
      //"16":['Imagens de Satélite - Sentinel - 2 - 2016'],
      //"17":['Imagens de Satélite - Sentinel - 2 - 2017'],
      //"18":['Imagens de Satélite - Sentinel - 2 - 2018'],
      //"19":['Imagens de Satélite - Alos Palsar 12.5m']
//	
//	
//}

