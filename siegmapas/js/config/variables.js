var dataurl = 'http://'+window.location.host

//----------------------------------------------------------Lista dos temas--------------------------------------------------------------------------//
var ae = ['Areas prioritarias para conserva\u00e7\u00e3o', 'Cavernas', 'Parques federais estaduais', 'Parque municipal serra da areia'
            , 'Reservas particulares do patrimonio natural', 'Unidade de uso sustent\u00e1vel'];

var bc = ['Areas inundadas', 'Curvas de n\u00edvel', 'Drenagens', 'Edifica\u00e7\u00e3o', 'Hipsometria', 'Massa de \u00e1gua'
            , 'Munic\u00edpios (2017)','Regi\u00e3o Geogr\u00e1fica Imediata', 'Regi\u00e3o Geogr\u00e1fica Intermediaria','Pontos cotados e referencia de n\u00edvel', 'Povoados'
            , 'Regi\u00e3o de planejamento','Sedes e outras localidades-pol\u00edgonos', 'Sedes e outras localidades-pontos', 'Serras','Comunidade Kalungas'];
			
var bc100 = ['Aglomerado Rural Isolado','Arruamento', 'Banco de Areia', 'Barragem (Pol\u00edgono)', 'Barragem (Linha)', 'Capital', 'Cemit\u00e9rio', 'Cemit\u00e9rio (Ponto)', 'Cidade', 'Corredeira (Pol\u00edgono)', 'Corredeira (Linha)','Corredeira (Ponto)', 'Drenagem 1:100.000',  
				'Edifica\u00e7\u00e3o Agrop. e Extr. Vegetal','Edifica\u00e7\u00e3o Ensino', 'Grupo de Transformadores (Ponto)', 'Grupo de Transformadores (Pol\u00edgono)', 
				'Hidrel\u00e9trica', 'Ilha', 'Ilha (Linha)', 'Ilha (Ponto)', "Massa d'\u00e1gua", 'Passagem Elevada Viaduto (Linha)',
				'Pista Pouso (Linha)', 'Pista Pouso (Ponto)', 'Ponte (Ponto)', 'Ponte (Linha)', 'Queda de \u00e1gua', 'Queda de \u00e1gua (Ponto)', 
				'Sumidouro e Vertedouro', 'Travessia', 'Trecho de Energia','Trecho Massa de \u00e1gua', 'Trecho Ferrovi\u00e1rio', 'Trecho Rodovi\u00e1rio', 'T\u00fanel', 'Unidade de Federação',
				'Vila', 'Viaduto (Ponto)'];

var bio = ['Fauna', 'Flora'];

var cli = ['Esta\u00e7\u00f5es chuvas', 'Esta\u00e7\u00f5es climatologicas', 'Esta\u00e7\u00f5es deficit e excendente hidrico'
            , 'Esta\u00e7\u00f5es temperatura', 'Esta\u00e7\u00f5es umidade-evapotranspira\u00e7\u00e3o'];

var uso = ['Cobertura e uso do solo - 2002','Cobertura e uso do solo - 2011','Cobertura e uso do solo - 2013', 'Cobertura e uso do solo - 2014' ,'Manchas urbanas 1991', 'Manchas urbanas 2000'
            ,'Manchas urbanas 2002', 'Manchas urbanas 2010', 'Piv\u00f4s centrais (2000)', 'Piv\u00f4s centrais (2001)'
            , 'Piv\u00f4s centrais (2003)', 'Piv\u00f4s centrais (2006) IMB-SEMARH', 'Piv\u00f4s centrais (2006) SEFAZ'
            , 'Piv\u00f4s centrais (2012)', 'Piv\u00f4s centrais (2013)','Piv\u00f4s centrais (2015)','Piv\u00f4s centrais (2016)', 'Perda de vegeta\u00e7\u00e3o']

var dia = ['Diagn\u00f3stico ambiental', 'Suscetibilidade a eros\u00e3o', 'Uso vulnerabilidade', 'Zoneamento agroecol\u00f3gico'];

var edu = ['Escolas p\u00fablicas'];

var geo = ['Afloramentos', 'Eixos de dobra', 'Empreendimento mineiro', 'Estruturas', 'Falhas', 'Gemas', 'Geocronologia'
            , 'Geodiversidade', 'Geoqu\u00edmica de sedimento de ativo de corrente', 'Insumos na agricultura'
            , 'Levantamentos geof\u00edsicos', 'Levantamentos trabalhos de gradua\u00e7\u00e3o', 'Levantamento bibliogr\u00e1fico escala 100000'
            , 'Levantamento bibliogr\u00e1fico escala 250000', 'Levantamento bibliogr\u00e1fico escala maior que 100000'
            , 'Levantamento bibliogr\u00e1fico escala menor que 250000', 'Levantamento geoqu\u00edmicos', 'Levantamento tese e disserta\u00e7\u00e3o'
            , 'Lineamentos', 'Materiais empregados na constru\u00e7\u00e3o civil', 'Materiais energ\u00e9ticos', 'Minerais met\u00e1licos'
            , 'Outros minerais industriais', 'Petrografia', 'Potencial mineral', 'Recursos mineral', 'Rochas ornamentais'
            , 'Unidades geol\u00f3gicas'];

var geom = ['Unidades geomorfol\u00f3gicas'];

var ind = ['CBERS CCD', 'Cenas imagens LANDSAT7 ETM', 'Folhas cartogr\u00e1ficas 100K', 'Folhas cartogr\u00e1ficas 250K'
            , 'Folhas cartogr\u00e1ficas 50K', 'IKONOS', 'Palsar'];


var inf = ['Abastecimento de \u00e1gua', 'Aer\u00f3dromos 2009', 'Aer\u00f3dromos 2014', 'Aterro', 'Bairros com esgoto', 'Bairros sem esgoto'
            , 'Balsas', 'Barragens', 'Cemit\u00e9rios', 'Cisternas', 'Etes', 'Linhas de transmiss\u00e3o', 'Malha vi\u00e1ria atualizada'
            , 'Postos rodovi\u00e1rios', 'Sub-esta\u00e7\u00e3o', 'UHE e PCH']

var rec = ['Aqu\u00edferos fraturados', 'Aqu\u00edferos porosos', 'Bacias hidrogr\u00e1ficas', 'Ensaios de infiltra\u00e7\u00e3o'
            , 'Espelhos d\u0027\u00e1gua artificiais (2015)','Espelhos d\u0027\u00e1gua artificiais (2016)','Esta\u00e7\u00f5es de capta\u00e7\u00f5es de \u00e1gua', 'Fontes sulfurosas', 'Fontes termais'
            , 'Kts', 'Po\u00e7os termais', 'Po\u00e7os tubulares', 'Sistemas aqu\u00edferos'];


var ped = ['Perfis de solos', 'Solos','Solos (1:250.000)'];

var objectbasemaps = {
        'googlemaps': "L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{subdomains:['mt0']}).addTo(map);",
        'bingmaps': "new L.BingLayer('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L',{type:'Road'}).addTo(map);",
        'googlesat': "L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);",
        'bingsat':"new L.BingLayer('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L',{type:'Aerial'}).addTo(map);"

};


