<!doctype html>
<html>
<head>
        
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <script src="js/modules/jquery.min.js"></script>
    <script src="js/modules/leaflet.js"></script>  
    <script src="js/functions/getAllmodules.js"></script>   
    
    
    <title>SIEG Mapas</title>

</head>

<body onload='Initial()'>
      
    <div class='container-fluid' >
        <div id='header' class='row'>
            <div class='col-md-5' style='top:10px' >
                <a href='http://www.sieg.go.gov.br' target="_blank">
                    <img  style='text-align: center;' src='images/sieg.png'>
                </a> 
            </div>
            <div title='Localizar' id='point' class='col-md-1 text-center' onclick='Showpoint()'>
                <img style='text-align: center' id='pt' src='images/localizar.png'><br>
                <label id='lpt' onmouseover='style="cursor:pointer"'>Coordenadas</label>
            </div>

            <div title='Inserir camada' id='addata' class='col-md-1 text-center' onclick='Showadd()'>
                <img id='add' src='images/layer.png'><br>
                <label id='ladd' onmouseover='style="cursor:pointer"'>Inserir camada</label>
            </div>
                          
            <div title='Base colaborativa' id='basemap' class='col-md-1 text-center heigth:60px' onclick='ShowBasemap()'>
                <img id='bm' src="images/map.png"><br>
                <label  id='lbm' onmouseover='style="cursor:pointer"'>Mapa de fundo</label>
            </div>
            
            <div title='Informação da camada' id='information' class='col-md-1 text-center' onclick='getInformation()'>
                <img id='inf' src='images/information.png'><br>
                <label id='linf' onmouseover='style="cursor:pointer"'>Identificar</label>
            </div>

            <div title='Impressão da tela' id='printmap' class='col-md-1 text-center' onclick='getPrintMap()'>
                <img src="images/print.png"><br>
                <label onmouseover='style="cursor:pointer"'>Imprimir</label>
            </div>
            
            <div title='Sobre' id='help' class='col-md-1 text-center' onclick="window.open('help/help.html','Download das camadas','height=780,width=1020,menubar=no,status=no')">
                <img src="images/help.png"><br>
                <label  onmouseover='style="cursor:pointer"'>Sobre</label>
            </div>
            <div class='col-md-1 text-right' style='top:10px' >
                <a href='http://www.goias.gov.br' target="_blank">
                    <img  src='images/logo_governo.png'>
                </a>
            </div>
        </div>        
              
        <div class='row'>
         <div id="map" class='map'>
          
            <a href='http://leafletjs.com' target="_blank"><img id='logoleaflet' src='images/logoleaflet.png' border="0"></a> 
            <div class='col-md-4'></div> 
            <div class='col-md-2'>
                <div class='row'>    
                    <div id='modalpoint'>
                        <h6>Graus decimais</h6>
                        <input id='lat' class='col-md-5' type="text" placeholder=" Latitude" title='Inserir latitude em graus decimais'>
                        <input id='lon' class='col-md-5' type="text" placeholder=" Longitude" title='Inserir longitude em graus decimais'> 
                    <input id='goxy' class='col-md-1' type="button" onclick='zoomXYdd()' alt="button" title='Ir para coordenada' value= 'Ir'>
                        <br>
                        <h6>Graus minutos e segundos</h6>
                        <input id='graulat' class='col-md-4' type="text" placeholder="Lat:Grau">
                        <input id='minlat' class='col-md-4' type="text" placeholder=" Lat:Min" > 
                        <input id='seglat' class='col-md-4' type="text" placeholder=" Lat:Seg" >
                        <br>
                        <br>                    
                        <input id='graulng' class='col-md-4' type="text" placeholder="Lng:Grau">
                        <input id='minlng' class='col-md-4' type="text" placeholder=" Lng:Min"> 
                        <input id='seglng' class='col-md-4' type="text" placeholder=" Lng:Seg">
                        <br>
                        <br>
                        <div class='col-md-9'></div>
                    <input id='goxy' class='col-md-3' type="button" onclick='zoomXYdms()' alt="button" title='Ir para coordenada' value ='Ir'>
                    </div> 
                </div>
            </div>
            <div class='col-md-1'>
                <div class='row'>
                    <div id='modaldata'>
                        <select class='col-md-12' id='assunto' onchange='selectTema()'>
                            <option value='Escolha o assunto'>Assunto</option>
                            <option value='ae'>Areas especiais</option>
                            <option value='bc'>Base cartográfica</option>
							<option value='bc100'>Base cartográfica IBGE</option>
                            <option value='bio'>Biodiversidade</option>
                            <option value='cli'>Clima</option>
                            <option value='uso'>Cobertura e uso do solo</option>
                            <option value='dia'>Diagnóstico</option>
                            <option value='edu'>Educacao</option>
                            <option value='geo'>Geologia</option>
                            <option value='geom'>Geomorfologia</option>
                            <option value='ind'>Índice</option>
                            <option value='inf'>Infraestrutura</option>
                            <option value='rec'>Recursos hídricos</option>
                            <option value='ped'>Pedologia</option>
					    </select>
                        <br>
                        <select class='col-md-12' id='tema'>
                            <option>Tema</option>
                        </select>
                        
                        <input class='col-md-12' type='button' value='Inserir no mapa' onclick='AddMap()'>
                    </div> 
                </div>
            </div> 
            <div class='col-md-1'>        
                    <div class='row'>
                        <div id='modalbase'>
                            <input class='row-md-12' type='radio' name='bmap' onchange='getBingRoads()'>Bing  Mapas<br>
                            <input class='row-md-12' type='radio' name='bmap' onchange='getBingSatellite()'>Bing  Satélite<br>
                            <input class='row-md-12' type='radio' name='bmap' onchange='getGoogleRoads()'>Google  Mapas<br>
                            <input class='row-md-12' type='radio' name='bmap' onchange='getGoogleSatellite()'>Google  Satélite<br>
                        </div>
                    </div>
            </div>
             
         </div>   
        </div>
        
    </div>    
</body>
</html>
