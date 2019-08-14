//Adicionar camada
function AddMap(){
    var lyr = document.getElementById('tema').value;
    if (lyr != 'Tema'){
            var newLayer = L.tileLayer.wms(dataurl+'/cgi-bin/qgis_mapserv.fcgi',{
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
	    
	    control.addOverlay(newLayer,lyr)
    	    map.fitBounds([[extentLayers[lyr][1],extentLayers[lyr][0]],[extentLayers[lyr][3],extentLayers[lyr][2]]])  
     }
}        
 
function getInformation(){
    
    if (buttonInformation==0){
        
        document.getElementById('information').style.background = "rgba(21,21,21,1)";
        document.getElementById('map').style.cursor = "help";    
        
        document.getElementById('basemap').style.background = "rgba(16,114,163,1)"
        document.getElementById('modalbase').style.display='none'
        buttonBase = 0

        document.getElementById('addata').style.background = "rgba(16,114,163,1)"
        document.getElementById('modaldata').style.display='none'
        buttondata = 0

        document.getElementById('point').style.background = "rgba(16,114,163,1)"
        document.getElementById('modalpoint').style.display='none'
        buttonpoint = 0

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
            
            header = "<select style='font-size:11px' onchange='getValue(this)'><option>Escolha a camada</option>"
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
    var wms = dataurl+'/cgi-bin/qgis_mapserv.fcgi'
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
    var textcontent  = "<table style='font-size:10px' border-collapse='collapse'>"
    var id = 0
    $.ajax({    
        url:url,
        datatype: "xml",
        type: "GET",
        success: function(data,error) {
     	    
         
         
 	 try{ 
           id =  data.getElementsByTagName('Feature')[0].id
	   var a  =  data.getElementsByTagName('Feature')[0]
    	   
	   var b = a.getElementsByTagName("Attribute")
           for(var a = 0;a < b.length;a++){
	            var feature = b[a].getAttribute('value');	
    		    var prop =b[a].getAttribute('name');
		    console.log(feature)	
                      if(prop!='maptip'){
		    		
                                textcontent += "<tr><th style='background-color: #f2f2f2;padding-right:5px'>"+prop+"</th><th>"
                   		+ feature+"</th></tr>";

		    	}
			
            }	
         }
         catch(err){
               textcontent += "<tr><th style='background-color: #f2f2f2'>"
	       +"Não possui atributo nesta localização</th></tr>"	
	 }
         textcontent +="</table>"
         content = textcontent
         popup.setContent(header+content)
	 document.getElementById('map').style.cursor = "help"
	 map.eachLayer(function(lyr){
		if('wmsParams' in lyr){
			if(lyr.wmsParams.layers == form.options[form.selectedIndex].innerHTML){
				//console.log(lyr.wmsParams.layers)
				var sql = 'SELECTTION:'+String(lyr.wmsParams.layers)+':'+String(id)
				console.log(sql)
				//lyr.setParams({SELECTION:String(lyr.wmsParams.layers)+':'+String(id)},0)
				console.log(lyr)				
			}
			
			
		} 
		
	 })        
	 
           
        }
    });
    	        
}


//Funcoes de mapas base
function getBingRoads(){
    map.removeLayer(basedefault)
    basedefault = BingR;
    basedefault.addTo(map);
    base = 'bingmaps'
}
function getBingSatellite(){
    map.removeLayer(basedefault)
    basedefault = BingA;
    basedefault.addTo(map);
    base = 'bingsat'
}
function getGoogleRoads(){
    map.removeLayer(basedefault)
    basedefault = GoogleR;
    basedefault.addTo(map);
    base = 'googlemaps'
}
function getGoogleSatellite(){
    map.removeLayer(basedefault);
    basedefault = GoogleA;
    basedefault.addTo(map);
    base = 'googlesat'
}
function getOpenStreetMap(){
    map.removeLayer(basedefault)
    basedefault = OSM;
    basedefault.addTo(map);
    base = 'googlemaps'
}
