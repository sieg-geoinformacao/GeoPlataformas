$(window).ready(function(){
	
	$.ajax({
		url:'templates/panel.html',
		type:'GET',
		success:function(data){
			$('#table').html(data);
		}
	})
})