var map,BingA,BingR,GoogleA,GoogleR,OSM,Topographic,Relevo,overlayers,control,Geocoder,popup,icon,basedefault,printMap;
var onbuttonAdd = 0;
var onbuttonRem = 0;
var buttonGeocoder = 0;
var buttonInformation = 0;
var buttonBase = 0;
var buttonZoomBox = 0;
var buttonPrint = 0
var buttonStat = 0
var buttonTools = 0
var buttondata = 0
var buttonpoint = 0
var X,Y;
var header,content,template,divToPrint,local

//----------------------------------------------------------Lista dos temas--------------------------------------------------------------------------//
var ae = ['Areas prioritarias para conserva\u00e7\u00e3o', 'Cavernas', 'Parques federais estaduais', 'Parque municipal serra da areia'
            , 'Reservas particulares do patrimonio natural', 'Unidade de uso sustent\u00e1vel'];

var bc = ['Areas inundadas', 'Curvas de n\u00edvel', 'Drenagem', 'Edifica\u00e7\u00e3o', 'Hipsometria', 'Massa de agua'
            , 'Munic\u00edpios (2017)', 'Perimetro urbano', 'Pontos cotados e referencia de n\u00edvel', 'Povoados'
            , 'Regi\u00e3o de planejamento','Sedes e outras localidades-pol\u00edgonos', 'Sedes e outras localidades-pontos', 'Serras']

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
            , 'Folhas cartogr\u00e1ficas 50K', 'IKONOS'];


var inf = ['Abastecimento de \u00e1gua', 'Aer\u00f3dromos 2009', 'Aer\u00f3dromos 2014', 'Aterro', 'Bairros com esgoto', 'Bairros sem esgoto'
            , 'Balsas', 'Barragens', 'Cemit\u00e9rios', 'Cisternas', 'Etes', 'Linhas de transmiss\u00e3o', 'Malha vi\u00e1ria atualizada'
            , 'Postos rodovi\u00e1rios', 'Sub-esta\u00e7\u00e3o', 'UHE e PCH']

var rec = ['Aqu\u00edferos fraturados', 'Aqu\u00edferos porosos', 'Bacias hidrogr\u00e1ficas', 'Ensaios de infiltra\u00e7\u00e3o'
            , 'Esta\u00e7\u00f5es de capta\u00e7\u00f5es de \u00e1gua', 'Fontes sulfurosas', 'Fontes termais'
            , 'Kts', 'Po\u00e7os termais', 'Po\u00e7os tubulares', 'Sistemas aqu\u00edferos'];


var ped = ['Perfis de solos', 'Solos'];


//-------------------------------------------------------Configuracao inicial do mapa---------------------------------------------------------------//
function Initial(){
        
        //Tema default
        //var Municipios = L.tileLayer.wms('http://www.sieg.go.gov.br/cgi-bin/qgis_mapserv.fcgi',{
        //    map:'project.qgs',
        //    layers: 'Munic\u00edpios (2017)',
        //    format: 'image/png',
        //    transparent: true,
        //    attribution:'qgis_server', 
        //    version:'1.3.0'
        //});
           
               
        //Adicionando Mapas de base
        GoogleR = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
                   subdomains:['mt0']
        })
        
        //Configurando o mapa de visualização
        map = L.map('map', {
            measureControl:true,
            zoomControl:false, 
            doubleClickZoom:false,
            boxZoom:false,
            attributionControl:false,
        }).fitBounds([[-19.55,-54.06],[-12.26,-45.24]]);
        
        
        // Inserindo informações de mapa base e tema no mapa
        basedefault = GoogleR;      
        basedefault.addTo(map);
        //Municipios.addTo(map); 
        
        
        //criando o tema a ser inserido no mapa
        //overlayers = {"Municipios":Municipios}
        
        
        //Criando a ferramentas de controle (Zoom, Escala e Informação de coordenadas do cursor - Mouse)
        L.control.mousePosition().addTo(map);
        L.control.scale().addTo(map);    
        L.control.zoom({position:'bottomright'}).addTo(map);
        

        //Configura a popup da informação de todas as camadas
        popup = L.popup({
            maxHeight:150,
            maxWidth:110,
            closeButton:true,
            closeOnClick:true,
        })               
        
        //Definindo a caixa do plano de informação
        control = L.control.orderlayers("",overlayers,
                  {
                    collapsed:false,
                    title:'',
                    download:false,
                    transparent:false
                  }).addTo(map);
       // map.addControl(new L.Control.ZoomMin())

}

//----------------------------------------------Configuracao das Ferramentas-----------------------------------------------//

function selectTema(){
      console.log('Aqui')
      if (document.getElementById('assunto').value =='ae'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < ae.length;i++){
                var opt = document.createElement('option')
                opt.value=ae[i];
                opt.innerHTML=ae[i]
                select.appendChild(opt)
            }
        }
      if (document.getElementById('assunto').value =='bc'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < bc.length;i++){
                var opt = document.createElement('option')
                opt.value = bc[i];
                opt.innerHTML = bc[i]
                select.appendChild(opt)
            }
        }
      if (document.getElementById('assunto').value =='bio'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < bio.length;i++){
                var opt = document.createElement('option')
                opt.value = bio[i];
                opt.innerHTML = bio[i]
                select.appendChild(opt)
            }
        }
      
      if (document.getElementById('assunto').value =='cli'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            
            for (var i = 0; i < cli.length;i++){
                var opt = document.createElement('option')
                opt.value = cli[i];
                opt.innerHTML = cli[i]
                select.appendChild(opt)
            }
        }  
       if (document.getElementById('assunto').value =='uso'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < uso.length;i++){
                var opt = document.createElement('option')
                opt.value = uso[i];
                opt.innerHTML = uso[i]
                select.appendChild(opt)
            }
        } 
        if (document.getElementById('assunto').value =='dia'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < dia.length;i++){
                var opt = document.createElement('option')
                opt.value = dia[i];
                opt.innerHTML = dia[i]
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='edu'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < edu.length;i++){
                var opt = document.createElement('option')
                opt.value = edu[i];
                opt.innerHTML = edu[i]
                select.appendChild(opt)
            }
        }    
        if (document.getElementById('assunto').value =='geo'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < geo.length;i++){
                var opt = document.createElement('option')
                opt.value = geo[i];
                opt.innerHTML = geo[i]
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='geom'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < geom.length;i++){
                var opt = document.createElement('option')
                opt.value = geom[i];
                opt.innerHTML = geom[i]
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='ind'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < ind.length;i++){
                var opt = document.createElement('option')
                opt.value = ind[i];
                opt.innerHTML = ind[i]
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='inf'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < inf.length;i++){
                var opt = document.createElement('option')
                opt.value = inf[i];
                opt.innerHTML = inf[i]
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='rec'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < rec.length;i++){
                var opt = document.createElement('option')
                opt.value = rec[i];
                opt.innerHTML = rec[i]
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='ped'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
            for (var i = 0; i < ped.length;i++){
                var opt = document.createElement('option')
                opt.value = ped[i];
                opt.innerHTML = ped[i]
                select.appendChild(opt)
            }
        }
        if (document.getElementById('assunto').value =='Escolha o assunto'){
            var select = document.getElementById('tema');
            for (var i = 1; i < select.length;i){
                select.remove(i)
                }
        }
}

//Mostrar adicionar data
function Showadd(){
    
    var modal = document.getElementById('modaldata')
    
    if (buttondata==0){
        document.getElementById('addata').style.background = "rgba(0,0,0,0.9)";
        modal.style.display='block'
        
        document.getElementById('information').style.background = "rgba(16,114,163,1)"
        buttonInformation = 0;
        map.off('click')
        document.getElementById('map').style.cursor = "";

        buttondata = 1;
        
        
    }else{
        document.getElementById('addata').style.background = "rgba(16,114,163,0.9)";
        modal.style.display='none'
        buttondata = 0;
    }
}

//Adicionar camada
function AddMap(){
    var lyr = document.getElementById('tema').value;
    if (lyr != 'Escolha o tema'){
            var newLayer = L.tileLayer.wms('http://www.sieg.go.gov.br/cgi-bin/qgis_mapserv.fcgi',{
                map:'project.qgs',
                layers: lyr,
                format: 'image/png',
                transparent: true,
                attribution:'qgis_server', 
                version:'1.3.0'
             });
           
            newLayer.addTo(map)
                
            
            try{
            map.eachLayer(function(layer){
                   layer.setOpacity(1.0);
                });
            }
        catch(err){
        }
        console.log(lyr)
        control.addOverlay(newLayer,lyr)
    
    }        
}  

function getInformation(){
    
    if (buttonInformation==0){
        
        document.getElementById('information').style.background = "rgba(21,21,21,1)";
        document.getElementById('map').style.cursor = "help";    
        
        
        document.getElementById('addata').style.background = "rgba(16,114,163,1)"
        document.getElementById('modaldata').style.display='none'
        buttondata = 0

        
        buttonInformation = 1
        
        var SelectLayer = document.createElement('select');
        SelectLayer.id='cb';
        map.on('click',function (evt){
            
            var OptionsLayer = document.createElement('option')
            var cb = document.getElementById('cb')
            for (var j = 0; j < SelectLayer.length;j){
                SelectLayer.remove(j)
            }
                
        map.eachLayer(function(layer){
                    
                        
                        if('wmsParams' in layer){
                            var OptionsLayer = document.createElement('option')
                               
                            OptionsLayer.value = layer.wmsParams.layers ;
                            OptionsLayer.innerHTML = layer.wmsParams.layers ;
                            SelectLayer.appendChild(OptionsLayer)
                          
                    }
            });
            
        
            X = map.layerPointToContainerPoint(evt.layerPoint).x;
            Y = Math.round(map.layerPointToContainerPoint(evt.layerPoint).y);
            
            header = "<select style='font-size:9px;width:100px' onchange='getValue(this)'><option>Escolha a camada</option>"
                     +SelectLayer.innerHTML+'</select><br>';
            
            popup.setLatLng(evt.latlng);
            popup.setContent(header)
            map.openPopup(popup)
                         
         });
    }else{
        document.getElementById('information').style.background = "rgba(16,114,163,1)";;
        
        document.getElementById('map').style.cursor = "";
        buttonInformation = 0;
        map.off('click')
    }    
}

function getValue(form){
    document.getElementById('map').style.cursor = "progress"
    form.options[form.selectedIndex].innerHTML;
    var wms = 'http://www.sieg.go.gov.br/cgi-bin/qgis_mapserv.fcgi'
    var defaultparameters = {
        service : 'WMS',
        request : 'GetFeatureInfo', 
        Version : '1.1.1',
        layers : form.options[form.selectedIndex].innerHTML ,   
        style:'',
        map:'project.qgs',
        format:'image/png',
        info_format : 'text/xml',
        tiled:false,
        width : map.getSize().x,
        height : map.getSize().y,
        srs : 'EPSG:4326',
        bbox : map.getBounds().toBBoxString(),
        query_layers : form.options[form.selectedIndex].innerHTML ,
        X : X,
        Y : Y
    };          
    var parameters = L.Util.extend(defaultparameters)
    var url = wms + L.Util.getParamString(parameters)            
    //console.log(url)
    $.ajax({    
        url:url,
        datatype: "xml",
        type: "GET",
        success: function(data) {
         
         var a  =  data.getElementsByTagName('Feature')[0]
         var b = a.getElementsByTagName("Attribute")
        
         
         var textcontent  = "<table style='font-size:10px' border-collapse='collapse'>"

         if (b.length >= 1){
        for(var a = 0;a < b.length;a++){
                var feature = b[a].getAttribute('value');   
                var prop =b[a].getAttribute('name');
            textcontent += "<tr><th style='background-color: #f2f2f2'>"+prop+"</th><th>"
                    + feature+"</th></tr>";                 
            }   
         }else{
               textcontent += "<tr><th style='background-color: #f2f2f2'>"
           +"Não possui atributo nesta localização</th></tr>"   
     }
         textcontent +="</table>"
         content = textcontent
         popup.setContent(header+content)
     document.getElementById('map').style.cursor = "help"
   
           
        }
    });
                
}


