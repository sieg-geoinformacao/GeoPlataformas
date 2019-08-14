function Init(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|WindowsPhone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
       	window.open('mobile.php','_self','',true)
    }else{
       	window.open('mapa.php','_self','',true)
    	
    }
}
