function zoomXYdd(){
    map.on('dblclick',function(){
       map.removeLayer(local) 
    })
    if (local){
        map.removeLayer(local)
    }
    var lat = document.getElementById('lat').value
    var lon = document.getElementById('lon').value
    
    var latlon = L.latLng(parseFloat(lat),parseFloat(lon))
    var pontoIcon = L.icon({
        iconUrl: 'images/icon/point.png',
        iconSize: [50, 50], 
        popupAnchor: [0,0]
        });

    local = L.marker(latlon,{
        clickable:true,
        icon: pontoIcon
    }).addTo(map)
    map.setView(latlon,20)
        
}
function dms2dd(grau,min,seg){
    var calc
    var numgrau = parseFloat(grau)
    var nummin = parseFloat(min)
    var numseg = parseFloat(seg)
    
    var segdd = numseg/60
    var mindd = (nummin + segdd)/60
    if (numgrau < 0){
        calc = numgrau - mindd
    }else{
        calc = numgrau + mindd
    }
    
    return calc
}

function zoomXYdms(){
    map.on('dblclick',function(){
       map.removeLayer(local) 
    })
    if (local){
        map.removeLayer(local)
    }
    
    //Latitude
    var grau1 = document.getElementById('graulat').value
    var min1 = document.getElementById('minlat').value
    var seg1 = document.getElementById('seglat').value
    var lat = dms2dd(grau1,min1,seg1)
    console.log(lat)
     //Latitude
    var grau2 = document.getElementById('graulng').value
    var min2 = document.getElementById('minlng').value
    var seg2 = document.getElementById('seglng').value
    var lon = dms2dd(grau2,min2,seg2)
    console.log(lon)

    var latlon = L.latLng(parseFloat(lat),parseFloat(lon))
    var pontoIcon = L.icon({
        iconUrl: 'images/icon/point.png',
        iconSize: [50, 50], 
        popupAnchor: [0,0]
        });

    local = L.marker(latlon,{
        clickable:true,
        icon: pontoIcon
    }).addTo(map)
    map.setView(latlon,20)
         
}