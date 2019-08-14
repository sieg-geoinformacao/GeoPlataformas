//Mostrar camada da base de mapas
function ShowBasemap(){
    
    var modal = document.getElementById('modalbase')
    
    
    if (buttonBase==0){
        document.getElementById('basemap').style.background = "rgba(0,0,0,0.9)";;
        
        document.getElementById('information').style.background = "rgba(16,114,163,1)"
        buttonInformation = 0;
        map.off('click')
        document.getElementById('map').style.cursor = "";

        document.getElementById('addata').style.background = "rgba(16,114,163,1)"
        document.getElementById('modaldata').style.display='none'
        buttondata = 0

        document.getElementById('point').style.background = "rgba(16,114,163,1)"
        document.getElementById('modalpoint').style.display='none'
        buttonpoint = 0

        modal.style.display='block'
        buttonBase = 1;
        
        
    }else{
        document.getElementById('basemap').style.background = "rgba(16,114,163,1)";
        modal.style.display='none'
        buttonBase = 0;
    }
}
//Mostrar adicionar data
function Showpoint(){
    
    var modal = document.getElementById('modalpoint')
    
    if (buttonpoint==0){
        document.getElementById('point').style.background = "rgba(0,0,0,0.9)";
        modal.style.display='block'
        buttonpoint = 1;
        
        document.getElementById('information').style.background = "rgba(16,114,163,1)"
        buttonInformation = 0;
        map.off('click')
        document.getElementById('map').style.cursor = "";

        document.getElementById('basemap').style.background = "rgba(16,114,163,1)"
        document.getElementById('modalbase').style.display='none'
        buttonBase = 0

        document.getElementById('addata').style.background = "rgba(16,114,163,1)"
        document.getElementById('modaldata').style.display='none'
        buttondata = 0
        
    }else{
        document.getElementById('point').style.background = "rgba(16,114,163,0.9)";
        modal.style.display='none'
        buttonpoint = 0;
    }
}
//Mostrar adicionar data
function Showadd(){
    
    var modal = document.getElementById('modaldata')
    
    if (buttondata==0){
        document.getElementById('addata').style.background = "rgba(0,0,0,0.9)";
        modal.style.display='block'
        
        document.getElementById('information').style.background = "rgba(16,114,163,1)"
        buttonInformation = 0;
        map.off('click')
        document.getElementById('map').style.cursor = "";

        document.getElementById('basemap').style.background = "rgba(16,114,163,1)"
        document.getElementById('modalbase').style.display='none'
        buttonBase = 0

        document.getElementById('point').style.background = "rgba(16,114,163,1)"
        document.getElementById('modalpoint').style.display='none'
        buttonpoint = 0

        buttondata = 1;
        
        
    }else{
        document.getElementById('addata').style.background = "rgba(16,114,163,0.9)";
        modal.style.display='none'
        buttondata = 0;
    }
}