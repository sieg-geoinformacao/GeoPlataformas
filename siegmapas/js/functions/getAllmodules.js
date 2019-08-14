$(window).ready(function(){
	
	var listfunctions = [
						"js/modules/leaflet-filelayer.js"
    			    	,"js/modules/togeojson.js"
    			    	,"js/modules/leaflet-Bing.js"
    			    	,"js/config/variables.js"
				,"js/config/layers.js"
    			    	,"js/config/config.js"
    			    	,"js/config/LayersExtent.js"
    			    	,"js/functions/functions.js"
    			    	,"js/functions/combotools.js"
    			    	,"js/functions/maptools.js"
    			    	,"js/functions/printtools.js"
    			    	,"js/functions/showtools.js"
    			    	,"js/functions/zoomtools.js"
    			    	,"js/modules/leaflet.draw.js"
    			    	,"js/modules/leaflet.control.orderlayers.js"
    			    	,"http://maps.google.com/maps/api/js?v=3.2&sensor=false"
    			    	,"js/modules/L.Control.MousePosition.js"
    			    	,"js/modules/bootstrap.min.js"
    			    	,"js/modules/L.Control.ZoomMin.js",
    			    	,"js/modules/L.Control.ZoomBox.min.js",
    			    	,"js/modules/leaflet-measure.js"
    			    	,"js/modules/tokml.js"
    			    	,"js/modules/Control.OSMGeocoder.js"
    			    	,"js/functions/remove.js"
	]

	var listStyle = [
					"css/bootstrap.min.css"
        				,"css/leaflet.css"
        				,"css/main.css"
        				,"css/label.css"
        				,"css/leaflet.control.orderlayers.css"
        				,"css/L.Control.MousePosition.css"
        				,"css/L.Control.ZoomMin.css"
        				,"css/L.Control.ZoomBox.css"
        				,"css/leaflet-measure.css"
        				,"css/Control.OSMGeocoder.css"
	]
	
	//Carregando os modulos
	function getModules(modules){
		
		var script = document.createElement('script');
		script.src = modules;
		script.async = false;
		document.head.appendChild(script);	
	}
	
	//Carregando os estilos
	function getStyle(style){
		var sty = document.createElement('link')
    	sty.type = 'text/css'
	    sty.rel = "stylesheet"
	    sty.href = style	
		document.head.appendChild(sty);	
	}
	
	//Inserindo modulos
	for(var i in listfunctions){
		getModules(listfunctions[i])
	}
	
	//Inserindo estilos
	for(var i in listStyle){
		getStyle(listStyle[i])
	}


})

