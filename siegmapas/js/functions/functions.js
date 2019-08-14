var map,control,Geocoder,popup,icon,basedefault,printMap;
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
var header,content,template,local
var base


//-------------------------------------------------------Configuracao inicial do mapa---------------------------------------------------------------//
function Initial(){
        
        document.getElementById('map').style.top = document.getElementById('header').clientHeight+'px'
              
        //Configurando o mapa de visualização
        map = L.map('map', {
            zoomControl:false, 
            doubleClickZoom:false,
            boxZoom:false,
            attributionControl:false,
            
        }).fitBounds([[-19.4834,-53.2483],[-12.3962,-45.907]]);
        
        
              
        basedefault.addTo(map);
        base = 'googlemaps'
        Reg.addTo(map);
        Municipios.addTo(map); 
        
            
        //Criando a ferramentas de controle (Zoom, Escala e Informa��es de coordenadas do cursor - Mouse)
        L.control.mousePosition({position:'bottomleft'}).addTo(map);
        L.control.scale().addTo(map);    
        L.control.zoom({position:'topleft'}).addTo(map);

        //Configura a popup da informação de todas as camadas
        popup = L.popup({
            maxHeight:200,
            closeButton:true,
            closeOnClick:true,
        })               
        
        //Definindo a caixa do plano de informação
        control = L.control.orderlayers(null,overlayers,
                  {
                    collapsed:false,
                    title:'',
                  }).addTo(map);
        
        var zoomrect = L.control.zoomBox({
                 modal: true 
        });
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit:'kilometers',
            primaryAreaUnit: 'hectares',
            secondaryAreaUnit: 'sqmeters',
            activeColor: '#ABE67E',
            completedColor: '#C8F2BE',
            className: 'leaflet-measure-resultpopup',
            autoPanPadding: [5, 5],

        });

        map.addControl(new L.Control.ZoomMin())
        map.addControl(zoomrect);
        map.addControl(measureControl);
        var osmGeocoder = new L.Control.OSMGeocoder({
           collapsed: true,
           position: 'topleft',
           text: 'Pesquisar cidade',
        });
        osmGeocoder.addTo(map);
        L.Control.FileLayerLoad.LABEL = '<img class="icon" src="images/folder.png" alt="file icon"/>';
        L.Control.fileLayerLoad({
            fitBounds: true,
            layer: L.geoJson,
            layerOptions: {style: {color:'yellow',fillColor:'blue',fillOpacity:0.6,opacity:0.9}},
                 
        }).addTo(map);
   
        var buttonremove = L.control({position: "topleft"}) 
            buttonremove.onAdd = function(map) {
                var divremove = L.DomUtil.create("div","leaflet-control-zoom leaflet-bar prMap");
                    divremove.innerHTML = "<img title='Remover arquivos inseridos' onclick='remove()' src='images/remove_layer.png'>";
                    return divremove;
        }
        buttonremove.addTo(map)
    
        
}





