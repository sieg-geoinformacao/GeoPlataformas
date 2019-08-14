var data = 0;
var legend

function init(){
  
  var BingR = new L.BingLayer('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L',{
    type:'Road'
  })
  
  var Municipios = L.tileLayer.wms('http://www.sieg.go.gov.br/cgi-bin/qgis_mapserv.fcgi',{
     map:'project_downloads.qgs',
     version:'1.3.0',
     layers: 'Municipios',
     transparent: true,
     format:'image/png',
  });

  //Configurando o mapa de visualização
  map = L.map('map', {
      zoomControl:false, 
      doubleClickZoom:false,
      boxZoom:false,
      attributionControl:false,
      scrollWheelZoom:false,
      dragging:false
      
  }).fitBounds([[-19.4834,-53.2483],[-12.7962,-45.907]]);
  BingR.addTo(map)
  Municipios.addTo(map)
};

function backSieg(content){
    window.open('http://www.sieg.go.gov.br','_self')
};

function getDown(value){
    var layer = value
    console.log(cod[layer])
    var url = 'http://www.sieg.go.gov.br/produtosIMB.asp?cod='+cod[layer]
    window.open(url,'Download das camadas','height=550,width=620,menubar=no,status=no');
};    

function getView(value){
  console.log(value)
  var listimage = ['L8','Sentinel','IRS','Alos']
  var layer = value
  var imgLayer = layer.split(" ")  
  if(listimage.indexOf(imgLayer[0]) > 0){
  	layer = imgLayer[2]
  }
  if(data != 0){
      map.removeLayer(data)
      map.removeControl(legend)
  }
  var url = 'http://www.sieg.go.gov.br/cgi-bin/qgis_mapserv.fcgi'
      data = L.tileLayer.wms(url,{
          map:'project_downloads.qgs',
          version:'1.3.0',
          layers: layer,
          transparent: true,
          format:'image/png',
      })
      
  var defaultparametersLegend = {
                  map:'project_downloads.qgs',
                  service:'WMS',
                  Version : '1.1.0',
                  Request : 'GetLegendGraphic',
                  LAYER : layer,
                  FORMAT :'image/png',
                  TRANSPARENT : true,
                  LAYERTITLE: true,
                  LAYERFONTSIZE:10,
                  SYMBOLWIDTH:4,
                  SYMBOLHEIGHT:4,
                  SYMBOLSPACE:0,
                  LAYERTITLESPACE:0,
                  LAYERSPACE:0,
                  ICONLABELSPACE:2,
                  BOXSPACE:2,
                  ITEMFONTFAMILY:'ebrima',
                  ITEMFONTSIZE:6,
                  ITEMFONTBOLD:false,
                  ITEMFONTCOLOR:'black'
              };   
  var paramLegend = L.Util.extend(defaultparametersLegend)
  var urllegend =  url + L.Util.getParamString(paramLegend) 
      
      legend = L.control({position: "topleft"})
      legend.onAdd = function(map) {
                var div = L.DomUtil.create("div", "info legend");
                div.innerHTML ="<label style='font-weight:bold'>LEGENDA</label><br><img src='"+urllegend+"'>";
                return div;
      };
      legend.addTo(map);  
      data.addTo(map)
   
}