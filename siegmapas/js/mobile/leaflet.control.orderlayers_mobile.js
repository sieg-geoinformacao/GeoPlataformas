/*
 * L.Control.OrderLayers is a control to allow users to switch between different layers on the map.
 */

//----------------------------------------Lista dos temas-----------------------------------------------------//
var cod = {'Areas prioritarias para conserva\u00e7\u00e3o':2178, 'Cavernas':1334, 'Parques federais estaduais':2130
		, 'Parque municipal serra da areia':2074, 'Reservas particulares do patrimonio natural':2132
        , 'Unidade de uso sustent\u00e1vel':2133,'Areas inundadas':369, 'Curvas de n\u00edvel':1158, 'Drenagem':1171, 'Edifica\u00e7\u00e3o':479
        , 'Hipsometria':1343, 'Massa de agua':2711,'Munic\u00edpios':4516, 'Perimetro urbano':1167, 'Pontos cotados e referencia de n\u00edvel':1168
        , 'Povoados':4095,'Regi\u00e3o de planejamento':'','Sedes e outras localidades-pol\u00edgonos':4399
        , 'Sedes e outras localidades-pontos':1169, 'Serras':1170,'Fauna':1335, 'Flora':1336,'Esta\u00e7\u00f5es chuvas':1959
        ,'Esta\u00e7\u00f5es climatologicas':1179, 'Esta\u00e7\u00f5es deficit e excendente hidrico':1960
        , 'Esta\u00e7\u00f5es temperatura':1961, 'Esta\u00e7\u00f5es umidade-evapotranspira\u00e7\u00e3o':1962
        ,'Cobertura e uso do solo - 2002':1340,'Cobertura e uso do solo - 2011':4459,'Manchas urbanas 1991':4511
        , 'Manchas urbanas 2000':4513, 'Manchas urbanas 2002':1167, 'Manchas urbanas 2010':4515
        , 'Piv\u00f4s centrais 2000 IMB-SEMARH':4098, 'Piv\u00f4s centrais 2001 SIC':2107, 'Piv\u00f4s centrais 2003 SIC':2108
        , 'Piv\u00f4s centrais 2006 IMB-SEMARH':4100, 'Piv\u00f4s centrais 2006 SEFAZ':2109, 'Piv\u00f4s centrais 2012 IMB-SEMARH':4102
        , 'Piv\u00f4s centrais 2013 IMB-SEMARH':4104,'Diagn\u00f3stico ambiental':432, 'Suscetibilidade a eros\u00e3o':2067
        , 'Uso vulnerabilidade':1342, 'Zoneamento agroecol\u00f3gico':978,'Escolas p\u00fablicas':4462,'Afloramentos':2631
        , 'Eixos de dobra':2333, 'Empreendimento mineiro':2355, 'Estruturas':2396, 'Falhas':2403, 'Gemas':2317
        , 'Geocronologia':2632, 'Geodiversidade':2429, 'Geoqu\u00edmica de sedimento de ativo de corrente':2633
        , 'Insumos na agricultura':2319,'Levantamentos geof\u00edsicos':2638, 'Levantamentos trabalhos de gradua\u00e7\u00e3o':2641
        , 'Levantamento bibliogr\u00e1fico escala 100000':2634, 'Levantamento bibliogr\u00e1fico escala 250000':2635
        , 'Levantamento bibliogr\u00e1fico escala maior que 100000':2636, 'Levantamento bibliogr\u00e1fico escala menor que 250000':2637
        , 'Levantamento geoqu\u00edmicos':2639, 'Levantamento tese e disserta\u00e7\u00e3o':2640,'Lineamentos':2464
        , 'Materiais empregados na constru\u00e7\u00e3o civil':2322, 'Materias energ\u00e9ticos':2323, 'Minerais met\u00e1licos':2320
        ,'Outros minerais industriais':2321, 'Petrografia':2642, 'Potencial mineral':2543, 'Recursos mineral':2583, 'Rochas ornamentais':2318
        ,'Unidades geol\u00f3gicas':2613,'Unidades geomorfol\u00f3gicas':1344,'CBERS CCD':1978, 'Cenas imagens LANDSAT7 ETM':1173
        , 'Folhas cartogr\u00e1ficas 100K':1964, 'Folhas cartogr\u00e1ficas 250K':1977, 'Folhas cartogr\u00e1ficas 50K':1965
        , 'IKONOS':1966,'Abastecimento de \u00e1gua':2093, 'Aer\u00f3dromos 2009':1157, 'Aer\u00f3dromos 2014':4097, 'Aterro':2062
        , 'Bairros com esgoto':2065, 'Bairros sem esgoto':2075,'Balsas':1159, 'Barragens':1160, 'Cemit\u00e9rios':2063, 'Cisternas':2064
        , 'Etes':2068, 'Linhas de transmiss\u00e3o':1180, 'Malha vi\u00e1ria atualizada':4093,'Postos rodovi\u00e1rios':1262
        , 'Sub-esta\u00e7\u00e3o':1181, 'UHE e PCH':3918,'Aqu\u00edferos fraturados':2070, 'Aqu\u00edferos porosos':1970, 'Bacias hidrogr\u00e1ficas':1949
        , 'Ensaios de infiltra\u00e7\u00e3o':2077, 'Esta\u00e7\u00f5es de capta\u00e7\u00f5es de \u00e1gua':2281
        , 'Fontes sulfurosas':1972, 'Fontes termais':1967, 'Kts':1973, 'Po\u00e7os termais':1968, 'Po\u00e7os tubulares':1969
        , 'Sistemas aqu\u00edferos':1971,'Perfis de solos':1012, 'Solos':1339, 'Cemit\u00e9rio':4580, 'Cemit\u00e9rio (Ponto)':4585, 'Edifica\u00e7\u00e3o Agrop. e Extr. Vegetal':4586
		,'Edifica\u00e7\u00e3o Ensino':4587, 'Grupo de Transformadores ponto':4589, 'Grupo de Transformadores poligono':4588, 'Hidrel\u00e9trica':4590, 'Trecho de Energia':4591
		,'Banco de Areia':4592, 'Barragem (Pol\u00edgono)':4593, 'Barragem (Linha)':4594, 'Corredeira (Pol\u00edgono)':4595, 'Corredeira (Linha)':4596
		,'Corredeira (Ponto)':4597,'Ilha':4598, 'Ilha (Linha)':4599, 'Ilha (Ponto)':4601, 'Massa dagua':4603
		,'Queda dagua':4604, 'Queda dagua ponto':4605, 'Sumidouro e Vertedouro':4606, 'Trecho Massa dagua':4608, 'Unidade de Federa\u00e7\u00e3o':4609
		,'Aglomerado Rural Isolado':4610, 'Capital':4611, 'Cidade':4612, 'Vila':4613, 'Arruamento':4614, 'Passagem Elevada Viaduto (Linha)':4615
		,'Viaduto (Ponto)':4616, 'Pista Pouso (Linha)':4617, 'Pista Pouso (Ponto)':4618, 'Ponte (Ponto)':4619, 'Ponte (Linha)':4625, 'Travessia':4620 
		,'Trecho Ferrovi\u00e1rio':4621, 'Trecho Rodovi\u00e1rio':4622, 'T\u00fanel':4623,'Espelhos d\u0027\u00e1gua':4577,'Munic\u00edpios (2017)':4627,'Drenagem 1:100.000':4578}

//--------------------------------------------------Lista de shapes pontuais------------------------------------------------------//
var listPoints = ['Cavernas','Reservas particulares do patrimonio natural','Edifica\u00e7\u00e3o','Povoados'
				  ,'Sedes e outras localidades-pontos','Fauna','Flora','Estacoes Chuvas', 'Esta\u00e7\u00f5es climatologicas'
				  , 'Esta\u00e7\u00f5es deficit e excendente Hidrico', 'Esta\u00e7\u00f5es temperatura'
				  , 'Esta\u00e7\u00f5es umidade-evapotranspira\u00e7\u00e3o','Esta\u00e7\u00f5es de capta\u00e7\u00e3o'
				  ,'Escolas p\u00fablicas','Afloramentos','Empreendimento mineiro','Aer\u00f3dromos 2009', 'Aer\u00f3dromos 2014'
				  ,'Balsas','Cemiterios','Etes','Postos rodovi\u00e1rios', 'Sub-esta\u00e7\u00e3o', 'UHE e PCH'
				  ,'Ensaios de infiltra\u00e7\u00e3o', 'Esta\u00e7\u00f5es de captacEsta\u00e7\u00f5es de \u00e1gua'
				  ,'Fontes sulfurosas', 'Fontes termais','Kts'
				  ,'Po\u00e7os termais','Po\u00e7os tubulares','Perfis de solos'] 


L.Control.OrderLayers = L.Control.Layers.extend({
	options: {
		title: '',
		// Values: ['normal', 'qgis']
		order: 'qgis',
		showBaselayers: true,
		transparent:true,
		legend:true,
		remove:true,
		download:true,

	},

	onAdd: function (map) {
		this._initLayout();
		this._update();

		map
	    .on('layeradd', this._onLayerChange, this)
	    .on('layerremove', this._onLayerChange, this)
			.on('changeorder', this._onLayerChange, this);

		return this._container;
		
	},

	onRemove: function (map) {
		map
	    .off('layeradd', this._onLayerChange)
	    .off('layerremove', this._onLayerChange)
			.off('changeorder', this._onLayerChange);
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = L.DomUtil.create('div', className);

		//Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		if (!L.Browser.touch) {
			L.DomEvent.disableClickPropagation(container);
			L.DomEvent.on(container, 'mousewheel', L.DomEvent.stopPropagation);
		} else {
			L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
		}

		var form = this._form = L.DomUtil.create('form', className + '-list');

		if (this.options.collapsed) {
			if (!L.Browser.android) {
				L.DomEvent
			    .on(container, 'mouseover', this._expand, this)
			    .on(container, 'mouseout', this._collapse, this);
			}
			var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
			link.href = '#';
			link.title = 'Layers';

			if (L.Browser.touch) {
				L.DomEvent
				    .on(link, 'click', L.DomEvent.stop)
				    .on(link, 'click', this._expand, this);
			} else {
				L.DomEvent.on(link, 'focus', this._expand, this);
			}

			this._map.on('click', this._collapse, this);
			// TODO keyboard accessibility
		} else {
			this._expand();
		}

		if(this.options.title) {
			var title = L.DomUtil.create('h3', className + '-title');
			title.innerHTML = this.options.title;
			form.appendChild(title);
		}

		this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
		this._separator = L.DomUtil.create('div', className + '-separator', form);
		this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

		container.appendChild(form);
	},

	_update: function () {
		if (!this._container) {
			return;
		}

		this._baseLayersList.innerHTML = '';
		this._overlaysList.innerHTML = 'Camadas';

		var baseLayersPresent = false,
		    overlaysPresent = false,
		    i, obj;

		var overlaysLayers = [];
		for (i in this._layers) {
			obj = this._layers[i];
			if(!obj.overlay) {
				this._addItem(obj);
			} else if(obj.layer.options && obj.layer.options.zIndex) {
				overlaysLayers[obj.layer.options.zIndex] = obj;
			} else if(obj.layer.getLayers && obj.layer.eachLayer) {
				var min = 9999999999;
				obj.layer.eachLayer(function(ly) {
					if(ly.options && ly.options.zIndex) {
						min = Math.min(ly.options.zIndex, min);
					}
				});
				overlaysLayers[min] = obj;
			}
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
		}

		if(this.options.order === 'normal') {
			for(i = 0; i < overlaysLayers.length; i++) {
				if(overlaysLayers[i]) {
					this._addItem(overlaysLayers[i]);
				}
			}
		} else {
			for(i = overlaysLayers.length-1; i >= 0; i--) {
				if(overlaysLayers[i]) {
					this._addItem(overlaysLayers[i]);
				}
			}
		}

		L.DomUtil.create('div', 'clearfix', this._baseLayersList);
		L.DomUtil.create('div', 'clearfix', this._overlaysList);
		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
	},

	_addItem: function (obj) {
		var row = L.DomUtil.create('div', 'leaflet-row');
				
		var label = L.DomUtil.create('label', ''),
		    input,
		    checked = this._map.hasLayer(obj.layer);
		
		

		if (obj.overlay) {
			
			input = L.DomUtil.create('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
			if(this.options.legend == true){		
				var img = L.DomUtil.create('img','');
				
				img.id='i'+L.stamp(obj.layer);
				img.style.display='none';
				
				var idobj = obj['layer']['wmsParams']['layers']
				
				
				var server = 'http://www.sieg.go.gov.br/cgi-bin/qgis_mapserv.fcgi'
				var defaultparameters = L.Util.extend({
        				map:'project.qgs',
        				service:'WMS',
        				Version : '1.3.0',
        				Request : 'GetLegendGraphic',
        				Layer : idobj,
        				FORMAT :'image/png',
        				TRANSPARENT : true,
        				LAYERTITLE: false,
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
					ITEMFONTCOLOR:'white'

        		});          
				
				img.src = server + L.Util.getParamString(defaultparameters)	
				
		
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
		}
        }
		input.layerId = L.stamp(obj.layer);	
		input.id = 'lf.'+ input.layerId;

		L.DomEvent.on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;
		

		var col = L.DomUtil.create('div', 'leaflet-input');
		col.appendChild(input);
		var icon = L.DomUtil.create('label', 'leaflet-icon');
		icon.htmlFor = input.id;
		col.appendChild(icon);
		row.appendChild(col);
		col = L.DomUtil.create('div', 'leaflet-name');
		
		label.htmlFor = input.id;
		col.appendChild(label);
		if(this.options.legend == true){
			col.appendChild(img);
		}
		
		row.appendChild(col);
		label.appendChild(name);
		
		var container;
		if(obj.overlay) {
			if(this.options.transparent == true){
				var slider = L.DomUtil.create('input', 'leaflet-opacity');
				slider.id = 's.'+L.stamp(obj.layer);
				slider.type='range';
				slider.min=0.0;
				slider.max=1.0;
				slider.value=1.0;
				slider.step=0.1;
				col = L.DomUtil.create('div', 'leaflet-opacity');
				col.layerId = input.layerId;
				col.title='Transparência'
				L.DomEvent.on(col, 'change', (this.options.order === 'normal'?this._getTransparency:this._getTransparency), this);
				col.appendChild(slider)
				row.appendChild(col);
				container = this._overlaysList;
			};	
			if(this.options.legend == true){	
				col = L.DomUtil.create('div', 'leaflet-legend');
				col.layerId = input.layerId;
				col.title='Legenda';
				L.DomEvent.on(col, 'click', (this.options.order === 'normal'?this._viewlegend:this._viewlegend), this);
				row.appendChild(col);
				container = this._overlaysList;
			};	
			if(this.options.remove == true){
				col = L.DomUtil.create('div', 'leaflet-remove');
				col.layerId = input.layerId;
				col.title='Remover a camada'
				L.DomEvent.on(col, 'click', (this.options.order === 'normal'?this._removelayer:this._removelayer), this);
				row.appendChild(col);
				container = this._overlaysList;
			}
			if(this.options.download == true){
				col = L.DomUtil.create('div', 'leaflet-download');
				col.layerId = input.layerId;
				col.title='Download da camada'
				L.DomEvent.on(col, 'click', (this.options.order === 'normal'?this._getDownload:this._getDownload), this);
				row.appendChild(col);
				container = this._overlaysList;
			}	

			var colup = L.DomUtil.create('div', 'leaflet-colupdown');
			col.layerId = input.layerId;
			

			col = L.DomUtil.create('div', 'leaflet-up');
			col.layerId = input.layerId;
			col.title='Mover nível acima'
			L.DomEvent.on(col, 'click', (this.options.order === 'normal'? this._onUpClick:this._onDownClick), this);
			col.layerId = input.layerId;
			colup.appendChild(col);
			
			col = L.DomUtil.create('div', 'leaflet-down');
			col.layerId = input.layerId;
			col.title='Mover nível abaixo'
			L.DomEvent.on(col, 'click', (this.options.order === 'normal'? this._onDownClick:this._onUpClick), this);
			colup.appendChild(col);
			
			
			row.appendChild(colup);
			container = this._overlaysList;
			
			
		} else {
			container = this._baseLayersList;
		}

		container.appendChild(row);
		return label;
	},
	_getTransparency:function(e) {
		var layerId = e.currentTarget.layerId;
		var Opacity = document.getElementById('s.'+layerId);
		var obj = this._layers[layerId];
		obj['layer'].setOpacity(Opacity.value);
		
		
		
		
	},
	_viewlegend:function(e) {
		var layerId = e.currentTarget.layerId;
		var legend = document.getElementById('i'+layerId)
		
		if (legend.style.display =='none'){
			legend.style.display='block';
		}else{
			legend.style.display='none';
		}
		
	
	},
	_removelayer:function(e) {
		var layerId = e.currentTarget.layerId;
		var obj = this._layers[layerId];
		this.removeLayer(obj['layer']);
		map.removeLayer(obj['layer']);	
	
	},
	_getDownload:function(e) {
		
		var layerId = e.currentTarget.layerId;
		var obj = this._layers[layerId]
		var layerName = obj.layer.wmsParams.layers
		var url = 'http://www.sieg.go.gov.br/produtosIMB.asp?cod='+cod[String(layerName)]
        window.open(url,'Download das camadas','height=550,width=620,menubar=no,status=no');
    },
	_onUpClick: function(e) {
		var layerId = e.currentTarget.layerId;
		var inputs = this._form.getElementsByTagName('input');
		nLayers = Object.keys(this._layers).length;
		var obj = this._layers[layerId];
		if(!obj.overlay) {
			return;
		}

		var replaceLayer = null;
		var idx = this._getZIndex(obj);
		

		for(var i=0; i < nLayers; i++) {
			var auxLayer = this._layers[inputs[i].layerId];
			var oLayer= this._layers[inputs[i].layerId].layer
			oLayer.setOpacity(1.0);
			var auxIdx = this._getZIndex(auxLayer);
			if(auxLayer.overlay && (idx - 1) === auxIdx) {
				replaceLayer = auxLayer;
				break;
			}
		}

		var newZIndex = idx - 1;
		if(replaceLayer) {
			obj.layer.setZIndex(newZIndex);
			replaceLayer.layer.setZIndex(newZIndex + 1);
			this._map.fire('changeorder', obj, this);
			
		}
	},
	_onDownClick: function(e) {
		var layerId = e.currentTarget.layerId;
		var inputs = this._form.getElementsByTagName('input');
		nLayers = Object.keys(this._layers).length;
		var obj = this._layers[layerId];

		if(!obj.overlay) {
			return;
		}

		var replaceLayer = null;
		var idx = this._getZIndex(obj);
		
		for(var i=0; i < nLayers; i++) {
			var auxLayer = this._layers[inputs[i].layerId];
			var oLayer= this._layers[inputs[i].layerId].layer
			
			oLayer.setOpacity(1.0);
			var auxIdx = this._getZIndex(auxLayer);
			if(auxLayer.overlay && (idx + 1) === auxIdx) {
				replaceLayer = auxLayer;
				break;
			}
		}

		var newZIndex = idx + 1;
		if(replaceLayer) {
			obj.layer.setZIndex(newZIndex);
			replaceLayer.layer.setZIndex(newZIndex - 1);
			this._map.fire('changeorder', obj, this);
			
		}
	},

	_getZIndex: function(ly) {
		var zindex = 9999999999;
		if(ly.layer.options && ly.layer.options.zIndex) {
			zindex = ly.layer.options.zIndex;
		} else if(ly.layer.getLayers && ly.layer.eachLayer) {
			ly.layer.eachLayer(function(lay) {
				if(lay.options && lay.options.zIndex) {
					zindex = Math.min(lay.options.zIndex, zindex);
				}
			});
		}
		return zindex;
	},

	hide: function() {
		this._container.style.display = 'none';
	},

	show: function() {
		this._container.style.display = '';
	}
});

L.control.orderlayers = function (baseLayers, overlays, options) {
	return new L.Control.OrderLayers(baseLayers, overlays, options);
};
