function getPrintMap(){
             
        var layers = ''
        var group = {}
        var opacity = {}
        var lyrLegend = []
        map.eachLayer(function(lyr){
            if('wmsParams' in lyr){
                group[lyr.options.zIndex] = lyr.wmsParams.layers
                opacity[lyr.wmsParams.layers] = lyr.options.opacity
            }
        })
       
        var order = Object.keys(group).sort()
        for (var j in order){
            
            layers += "L.tileLayer.wms("+"'"+dataurl+"/cgi-bin/qgis_mapserv.fcgi',{"
                           +"map:'project.qgs',"+"layers:'"+group[order[j]]+"',"
                           +"format: 'image/png',transparent: true,version:'1.3.0'"
                    +"}).addTo(map).setOpacity("+opacity[group[order[j]]]+");"
            lyrLegend.push(group[order[j]])
        }    
        
        var wms = dataurl+'/cgi-bin/qgis_mapserv.fcgi'
        var wmslegend = dataurl+'/cgi-bin/qgis_mapserv.fcgi'              
               
                             
        var template = document.createElement('html')                    
        var title = document.createElement('title')
            title.innerHTML = 'Tela de impress\u00e3o'  
            template.appendChild(title)
        var link1 = document.createElement('link')
            link1.rel = "stylesheet"
            link1.href = "http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css"
            template.appendChild(link1)
        var link2 = document.createElement('link')
            link2.rel = "stylesheet";
            link2.type = "text/css";
            link2.href = "css/own_style.css";
            template.appendChild(link2)
        var link3 = document.createElement('link')
            link3.rel = "stylesheet";
            link3.type = "text/css";
            link3.href = "css/L.Grid.css";
            template.appendChild(link3)    
        var script1 =  document.createElement('script')  
            script1.src = "http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"
            template.appendChild(script1)
        var script2 =  document.createElement('script')  
            script2.src = "js/modules/L.Grid.js"
            template.appendChild(script2)
        var script5 =  document.createElement('script')  
            script5.src = "js/modules/dom-to-image.min.js"
            template.appendChild(script5)     
        var script3 =  document.createElement('script')  
            script3.innerText = "function Mprint(){"
                +"document.getElementById('help').style.visibility = 'hidden';"
                +"window.print();"
                +"document.getElementById('help').style.visibility = 'visible'}"
        var script4 =  document.createElement('script')    

            script4.innerText = "function Mimg(){"
                        +"var divMap = document.getElementById('page');"
                        +"var options = {width:1000,height:800};"
                        +"domtoimage.toPng(divMap,options)"
                        +       ".then(function (dataUrl){"
                        +           "var file = document.createElement('a');"
                        +           "file.download = 'mapa.png';"
                        +           "file.href = dataUrl;"
                        +           "file.click();"
                        +       "});"
                        +"}"

                   
            template.appendChild(script4)


        template.appendChild(script2)       
        template.appendChild(script3)     
                            
        var body = document.createElement('body')  
        
        var divpage = document.createElement('div')
            divpage.id ='page';
            divpage.style.width =  window.screen.width
        
        var divtitle =  document.createElement('div')
            divtitle.id = 'title'
        
        var title = document.createElement('input')
	    title.placeholder = 'Digite o t\u00edtulo do mapa'
            title.setAttribute("style","background:rgba(255,255,255,0.0)")
	    title.style.textAlign = 'center';
            title.style.top = '0px';
            title.style.left = '250px';
            title.style.position = 'fixed' 
            title.style.width = '725px';
            title.style.height = '35px';
            title.style.border = 'solid';
            title.style.fontSize = '20px'
            
	
	divtitle .appendChild(title)
        
	var divmapa =  document.createElement('div')
            divmapa.id = 'map'   
            divmapa.style.top = '40px';
            divmapa.style.left = '250px';
            divmapa.style.position = 'fixed' 
            divmapa.style.width = '720px';
            divmapa.style.height = '700px';
            divmapa.style.border = 'solid'
        
        var divhelp =  document.createElement('div')
            divhelp.id = 'help'   
            divhelp.style.top = '1px';
            divhelp.style.left = '980px';
            divhelp.style.position = 'fixed' 
            divhelp.style.width = '300px';
            divhelp.style.height = '620px';
        
        var object  = document.createElement('object')
            object.data = 'help/help_print.html'
            object.style.width = '300px';
            object.style.height = '620px';

        var buttonprint = document.createElement("input")
            buttonprint.type = "button"
            buttonprint.setAttribute("style","float:right;")
            buttonprint.value = 'Imprimir'    
            buttonprint.setAttribute("onclick",'Mprint()')

        var buttonpng = document.createElement("input")
            buttonpng.type = "button"
            buttonpng.setAttribute("style","float:right;")
            buttonpng.value = 'Salvar PNG'    
            buttonpng.setAttribute("onclick",'Mimg()')    
        
	divhelp.appendChild(buttonprint)  
        divhelp.appendChild(buttonpng) 
        divhelp.appendChild(object)    
         
        
          
        
        var scriptmap = document.createElement('script')
            scriptmap.innerText =   "var map = L.map('map', {"
                                       +'zoomControl:false,' 
                                       +'scrollWheelZoom:true,'
                                       +'boxZoom:true'
                                       + '}).fitBounds([['+map.getBounds()._southWest.lat+","+map.getBounds()._southWest.lng
                                       +'],['+map.getBounds()._northEast.lat+','+map.getBounds()._northEast.lng+']]);';         
            scriptmap.innerText += objectbasemaps[base]     
            scriptmap.innerText += layers+';' 
            scriptmap.innerText += 'var grid = L.grid({redraw: "moveend"}).addTo(map);'
            scriptmap.innerText += 'L.control.scale({position:"bottomright"}).addTo(map);'
            scriptmap.innerText += 'var north = L.control({position: "bottomright"});' 
            scriptmap.innerText +=  'north.onAdd = function(map) {'
                                       +'var div = L.DomUtil.create("div", "");'
                                       +"div.innerHTML ="+"'<img src="+'images/north.png'+">';"
                                       +'return div;'
                                    +'};'
                                    +'north.addTo(map);'                   
                                  
        
        var divLegend = document.createElement('div')
            divLegend.id ='legenda'
            divLegend.style.left = '193px';
            divLegend.setAttribute("width",'191px')
            divLegend.setAttribute("height",'700px')
            divLegend.setAttribute("style","background:rgba(255,255,255,0.0")
            divLegend.style.position = 'fixed' 
                
        
        var logo = document.createElement('img')    
            logo.src = 'images/sieglogo_mapa.png';
            logo.setAttribute("width","135px")
            logo.setAttribute("height","30px")
            template.appendChild(logo)        
        
        var breakText = document.createElement('br')
        divLegend.appendChild(logo)
        divLegend.appendChild(breakText)
        
            for (var i in order){
                var textL = document.createElement('br')
                
                
                var lyrLegend = document.createElement('img')
                var defaultparametersLegend = {
                    map:'project.qgs',
                    service:'WMS',
                    Version : '1.3.0',
                    Request : 'GetLegendGraphic',
                    LAYER : group[order[i]],
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
                var urllegend =  wmslegend + L.Util.getParamString(paramLegend) 
                lyrLegend.src = urllegend
                divLegend.appendChild(lyrLegend)
                divLegend.appendChild(textL) 
                
            }            
        divpage.appendChild(divLegend)
        divpage.appendChild(divmapa) 
        divpage.appendChild(divtitle)
        body.appendChild(divhelp)
        body.appendChild(divpage)
        body.appendChild(scriptmap)
        template.appendChild(body)              
        
        
        var a = window.open()
            a.document.write(template.innerHTML)   
            a.document.close()
        
}