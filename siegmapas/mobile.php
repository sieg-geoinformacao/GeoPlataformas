<!doctype html>
<html>
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" href="images/icon/siegicon.png">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/leaflet.css" />
        <link rel='stylesheet' href='css/main_mobile.css' >
        <link rel="stylesheet" href="css/label.css" />
        <link rel="stylesheet" href="css/leaflet.control.orderlayers_mobile.css"/>
        <link rel="stylesheet" href="css/L.Control.MousePosition.css"/>
        <script src="js/modules/leaflet.js"></script>
        <script src="js/mobile/functions_mobile.js"></script>
        <script src="js/mobile/leaflet.control.orderlayers_mobile.js"></script>
        <script src="js/modules/leaflet.draw.js"></script>
        <script src="js/modules/leaflet-Bing.js"></script>
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://maps.google.com/maps/api/js?v=3.2&sensor=false"></script>
        <script src="js/modules/L.Control.MousePosition.js"></script>
        <script src="js/modules/bootstrap.min.js"></script>
        <title>SIEG Mapas</title>
</head>

<body onload='Initial()'>
      
       <div class='container-fluid'>
       <div class='row' style='background:rgba(16,114,163,1.0);height:35px'>
            <div class='col-xs-5' style='padding-left:2px;top:2px'> 
                <a href='http://www.sieg.go.gov.br' target="_blank">
             	   <img style='height:99%;width:99%' src='images/sieglogo.png'>
                </a> 
            </div>
            <div id='addata' class='col-xs-2 text-center' style='height:35px' onclick='Showadd()'>
			             <img src='images/layer.png'>
		        </div>
            <div id='information' class='col-xs-2 text-center' style='height:35px' onclick='getInformation()'>
			             <img src='images/information.png'>
	  	      </div>
            <div class='col-xs-3'>           	
                   <a text-right' href='http://www.goias.gov.br' target="_blank">
			                <img src='images/estado.png'>
		               </a>
            </div>          
       
       </div>
       <div class='row'>
            <div class='col-xs-2'></div>
              <div class='row'>
                <div id='modaldata' class='col-xs-5 modaldata'>
                    <select class='col-xs-12' id='assunto' onchange='selectTema()'>
                        <option value='Escolha o assunto'>Assunto</option>
                        <option value='ae'>Areas especiais</option>
                        <option value='bc'>Base cartográfica</option>
			<option value='bc100'>Base cartográfica IBGE</option>
                        <option value='bio'>Biodiversidade</option>
                        <option value='cli'>Clima</option>
                        <option value='uso'>Cobertura e Uso do solo</option>
                        <option value='dia'>Diagnóstico</option>
                        <option value='edu'>Educacao</option>
                        <option value='geo'>Geologia</option>
                        <option value='geom'>Geomorfologia</option>
                        <option value='ind'>Índice</option>
                        <option value='inf'>Infraestrutura</option>
                        <option value='rec'>Recursos hídricos</option>
                        <option value='ped'>Pedologia</option>
                    </select>
                    <select class='col-xs-12' id='tema' onchange='AddMap()'>
                        <option>Tema</option>
                    </select>
                </div> 
              </div>
            <div class='col-xs-2'></div>
      </div>
      <div class='row'>      
            <div id="map" class='map'></div> 
      </div>      
    </div>    
       
</body>
</html>
