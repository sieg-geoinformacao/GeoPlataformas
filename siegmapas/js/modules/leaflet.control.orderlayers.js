/*
 * L.Control.OrderLayers is a control to allow users to switch between different layers on the map.
 */


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
		this._overlaysList.innerHTML = 'CAMADAS';

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
				img.style.display='block';
				
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
        				ITEMFONTSIZE:7,
        				ITEMFONTBOLD:false,
					ITEMFONTCOLOR:'white'

        		});          
				
				img.src = server + L.Util.getParamString(defaultparameters)
				
			};
				
		
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
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
				col.title='TransparÃªncia'
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
			col.title='Mover nÃ­vel acima'
			L.DomEvent.on(col, 'click', (this.options.order === 'normal'? this._onUpClick:this._onDownClick), this);
			col.layerId = input.layerId;
			colup.appendChild(col);
			
			col = L.DomUtil.create('div', 'leaflet-down');
			col.layerId = input.layerId;
			col.title='Mover nÃ­vel abaixo'
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
		if(this.options.transparent == true){
			var ind = 2
		}else{
			var ind = 1
		}

		for(var i=0; i < nLayers; i++) {
			var auxLayer = this._layers[inputs[i*ind].layerId];
			var oLayer= this._layers[inputs[i*ind].layerId].layer
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
        console.log(obj)
		if(!obj.overlay) {
			return;
		}

		var replaceLayer = null;
		var idx = this._getZIndex(obj);
		if(this.options.transparent == true){
			var ind = 2
		}else{
			var ind = 1
		}
		for(var i=0; i < nLayers; i++) {
			var auxLayer = this._layers[inputs[i*ind].layerId];
			var oLayer= this._layers[inputs[i*ind].layerId].layer
			
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
		this._container.style.display = 'CAMADAS';
	},

	show: function() {
		this._container.style.display = '';
	}
});

L.control.orderlayers = function (baseLayers, overlays, options) {
	return new L.Control.OrderLayers(baseLayers, overlays, options);
};
