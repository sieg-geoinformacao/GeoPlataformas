//----------------------------------------Lista dos temas-----------------------------------------------------//
var cod = {'Areas prioritarias para conserva\u00e7\u00e3o':2178, 'Cavernas':1334, 'Parques federais estaduais':2130
		, 'Parque municipal serra da areia':2074, 'Reservas particulares do patrimonio natural':2132
        , 'Unidade de uso sustent\u00e1vel':2133,'Areas inundadas':369, 'Curvas de n\u00edvel':1158, 'Drenagem':1171, 'Edifica\u00e7\u00e3o':479
        , 'Hipsometria':1343, 'Massa de agua':2711,'Munic\u00edpios (2017)':4626, 'Pontos cotados e referencia de n\u00edvel':1168
        , 'Povoados':4095,'Regi\u00e3o de planejamento':'','Sedes e outras localidades-pol\u00edgonos':4399
        , 'Sedes e outras localidades-pontos':1169, 'Serras':1170,'Fauna':1335, 'Flora':1336,'Esta\u00e7\u00f5es chuvas':1959
        ,'Esta\u00e7\u00f5es climatologicas':1179, 'Esta\u00e7\u00f5es deficit e excendente hidrico':1960
        , 'Esta\u00e7\u00f5es temperatura':1961, 'Esta\u00e7\u00f5es umidade-evapotranspira\u00e7\u00e3o':1962
        ,'Cobertura e uso do solo - 2002':1340,'Cobertura e uso do solo - 2011':4459,'Manchas urbanas 1991':4511
        , 'Manchas urbanas 2000':4513, 'Manchas urbanas 2002':1167,'Manchas urbanas 2010':4515
        , 'Piv\u00f4s centrais (2000)':4098, 'Piv\u00f4s centrais (2001)':2107, 'Piv\u00f4s centrais (2003)':2108
        , 'Piv\u00f4s centrais (2006) IMB-SEMARH':4100, 'Piv\u00f4s centrais (2006) SEFAZ':2109, 'Piv\u00f4s centrais (2012)':4102
        , 'Piv\u00f4s centrais (2013)':4104,'Piv\u00f4s centrais (2015)':4628,'Piv\u00f4s centrais (2016)':4628,'Diagn\u00f3stico ambiental':432
	, 'Suscetibilidade a eros\u00e3o':2067, 'Uso vulnerabilidade':1342, 'Zoneamento agroecol\u00f3gico':978,'Escolas p\u00fablicas':4462
	,'Afloramentos':2631,'Eixos de dobra':2333, 'Empreendimento mineiro':2355, 'Estruturas':2396, 'Falhas':2403, 'Gemas':2317
        , 'Geocronologia':2632, 'Geodiversidade':2429, 'Geoqu\u00edmica de sedimento de ativo de corrente':2633
        , 'Insumos na agricultura':2319,'Levantamentos geof\u00edsicos':2638, 'Levantamentos trabalhos de gradua\u00e7\u00e3o':2641
        , 'Levantamento bibliogr\u00e1fico escala 100000':2634, 'Levantamento bibliogr\u00e1fico escala 250000':2635
        , 'Levantamento bibliogr\u00e1fico escala maior que 100000':2636, 'Levantamento bibliogr\u00e1fico escala menor que 250000':2637
        , 'Levantamento geoqu\u00edmicos':2639, 'Levantamento tese e disserta\u00e7\u00e3o':2640,'Lineamentos':2464
        , 'Materiais empregados na constru\u00e7\u00e3o civil':2322, 'Materias energ\u00e9ticos':2323, 'Minerais met\u00e1licos':2320
        ,'Outros minerais industriais':2321, 'Petrografia':2642, 'Potencial mineral':2543, 'Recursos mineral':2583, 'Rochas ornamentais':2318
        ,'Unidades geol\u00f3gicas':2613,'Unidades geomorfol\u00f3gicas':1344,'CBERS CCD':1978, 'Cenas imagens LANDSAT7 ETM':1173
        , 'Folhas cartogr\u00e1ficas 100K':1964, 'Folhas cartogr\u00e1ficas 250K':1977, 'Folhas cartogr\u00e1ficas 50K':1965
        , 'IKONOS':1966,'Abastecimento de \u00e1gua':2093, 'Aer\u00f3dromos 2009':1157, 'Aer\u00f3dromos 2014':4097, 'Aterro':2062
        , 'Bairros com esgoto':2065, 'Bairros sem esgoto':2075,'Balsas':1159, 'Barragens':1160, 'Cemit\u00e9rios':2063, 'Cisternas':2064
        , 'Etes':2068, 'Linhas de transmiss\u00e3o':1180, 'Malha vi\u00e1ria atualizada':4093,'Postos rodovi\u00e1rios':1262
        , 'Sub-esta\u00e7\u00e3o':1181, 'UHE e PCH':3918,'Aqu\u00edferos fraturados':2070, 'Aqu\u00edferos porosos':1970, 'Bacias hidrogr\u00e1ficas':1949
        , 'Ensaios de infiltra\u00e7\u00e3o':2077, 'Esta\u00e7\u00f5es de capta\u00e7\u00f5es de \u00e1gua':2281,'Espelhos d\u0027\u00e1gua':4577
        , 'Fontes sulfurosas':1972, 'Fontes termais':1967, 'Kts':1973, 'Po\u00e7os termais':1968, 'Po\u00e7os tubulares':1969
        , 'Sistemas aqu\u00edferos':1971,'Perfis de solos':1012, 'Solos':1339, 'Cemit\u00e9rio':4580, 'Cemit\u00e9rio (Ponto)':4585, 'Edifica\u00e7\u00e3o Agrop. e Extr. Vegetal':4586
	,'Edifica\u00e7\u00e3o Ensino':4587, 'Grupo de Transformadores ponto':4589, 'Grupo de Transformadores poligono':4588, 'Hidrel\u00e9trica':4590, 'Trecho de Energia':4591
	,'Banco de Areia':4592, 'Barragem (Pol\u00edgono)':4593, 'Barragem (Linha)':4594, 'Corredeira (Pol\u00edgono)':4595, 'Corredeira (Linha)':4596
	,'Corredeira (Ponto)':4597,'Ilha':4598, 'Ilha (Linha)':4599, 'Ilha (Ponto)':4601, "Massa d'\u00e1gua":4603
	,'Queda dagua':4604, 'Queda dagua ponto':4605, 'Sumidouro e Vertedouro':4606, 'Trecho Massa dagua':4608, 'Unidade de Federa\u00e7\u00e3o':4609
	,'Aglomerado Rural Isolado':4610, 'Capital':4611, 'Cidade':4612, 'Vila':4613, 'Arruamento':4614, 'Passagem Elevada Viaduto (Linha)':4615
	,'Viaduto (Ponto)':4616, 'Pista Pouso (Linha)':4617, 'Pista Pouso (Ponto)':4618, 'Ponte (Ponto)':4619, 'Ponte (Linha)':4625, 'Travessia':4620 
	,'Trecho Ferrovi\u00e1rio':4621, 'Trecho Rodovi\u00e1rio':4622, 'T\u00fanel':4623,'Espelhos d\u0027\u00e1gua artificiais (2015)':4577
	,'Espelhos d\u0027\u00e1gua artificiais (2016)':4630,'Munic\u00edpios (2017)':4627,'Drenagem 1:100.000':4578, 'Perda de vegeta\u00e7\u00e3o':4685,'Solos (1:250.000)':4715, 'Palsar':4716
	,'Comunidade Kalungas':4729,'Cobertura e uso do solo - 2014':4725,'Cobertura e uso do solo - 2013':4726
}

//--------------------------------------------------Lista de shapes pontuais------------------------------------------------------//
var listPoints = ['Cavernas','Reservas particulares do patrimonio natural','Edifica\u00e7\u00e3o','Povoados'
				  ,'Sedes e outras localidades-pontos','Fauna','Flora','Estacoes Chuvas', 'Esta\u00e7\u00f5es climatologicas'
				  , 'Esta\u00e7\u00f5es deficit e excendente Hidrico', 'Esta\u00e7\u00f5es temperatura'
				  , 'Esta\u00e7\u00f5es umidade-evapotranspira\u00e7\u00e3o','Esta\u00e7\u00f5es de capta\u00e7\u00e3o'
				  ,'Escolas p\u00fablicas','Afloramentos','Empreendimento mineiro','Aer\u00f3dromos 2009', 'Aer\u00f3dromos 2014'
				  ,'Balsas','Cemiterios','Etes','Postos rodovi\u00e1rios', 'Sub-esta\u00e7\u00e3o', 'UHE e PCH'
				  ,'Ensaios de infiltra\u00e7\u00e3o', 'Esta\u00e7\u00f5es de captacEsta\u00e7\u00f5es de \u00e1gua'
				  ,'Fontes sulfurosas', 'Fontes termais','Kts'
				  ,'Po\u00e7os termais','Po\u00e7os tubulares','Perfis de solos'] 
