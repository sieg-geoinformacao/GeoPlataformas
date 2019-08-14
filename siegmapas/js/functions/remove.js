function remove(){
	map.eachLayer(function(e){
		if(e['defaultOptions']){
			if(e['defaultOptions']['clickable'] == true){
				map.removeLayer(e)
	 		} 		
		}
	})
}
