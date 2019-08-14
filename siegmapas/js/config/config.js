//--------------------------------------------------------Configurando mapa de fundo-----------------------------------------------
//Adicionando Mapas de base
var BingA = new L.BingLayer('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L',{
    type:'Aerial'
})

var BingR = new L.BingLayer('AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L',{
    type:'Road'
})
        
var GoogleA = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']    
})

var GoogleR = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    subdomains:['mt0']
})

// Inserindo mapa base e tema no mapa
basedefault = GoogleR; 

//-------------------------------------------------------Configurando as camadas----------------------------------------------------
var Municipios = L.tileLayer.wms(dataurl+'/cgi-bin/qgis_mapserv.fcgi',{
    map:'project.qgs',
    layers: 'Munic\u00edpios (2017)',
    format: 'image/png',
    transparent: true,
    attribution:'qgis_server', 
    version:'1.3.0'
});
        
var Reg = L.tileLayer.wms(dataurl+'/cgi-bin/qgis_mapserv.fcgi',{
    map:'project.qgs',
    layers: 'Regi\u00e3o de planejamento',
    format: 'image/png',
    transparent: true,
    attribution:'qgis_server', 
    version:'1.3.0'
});




//----------------------------------------------Criando o tema a ser inserido no mapa------------------------------------------------
//criando o tema a ser inserido no mapa
var overlayers = {"Regi&atildeo de planejamento":Reg,"Munic&iacutepios (2017)":Municipios}






