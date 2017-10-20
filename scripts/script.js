function onLoad(){
	/*
	if(dataLimit > 1){
		findData(dataLimit);
	}
	*/
	//enableFav();
	$('#clickedLocation').find('.locationListInfo').slideToggle('slow');
}

function enableFav(){
	//need to download cookie plugin
	if(!!$.cookie('favourite')){
		$('#favouriteList').toggleClass('hidden');
	}
}

$(function() {
  $(".locationList li").click(function() {
		if($(this).is("#clickedLocation")){
			var location = $(this).find('.locationListName')[0].innerHTML;
			console.log($(this).find('.locationListName')[0]);
			window.location.replace("location.php?location=" + location.trim());
		}else if($("#clickedLocation").length > 0){
			$(clickedLocation).find('.locationListInfo').slideToggle('slow');
			$(clickedLocation).attr('ID', '');
		}
    $(this).attr('ID', 'clickedLocation');
		$(this).find('.locationListInfo').slideToggle('slow');
  });
});

/*
