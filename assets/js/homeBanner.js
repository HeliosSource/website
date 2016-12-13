
(function($) {
	var tracker = 0;

	var d = setTimeout(initialTransition(),1000);

	function bannerQuestion(){
		switch(tracker){
			case 0:
				$("#div_banner3").fadeOut(1000);
				$("#div_banner1").fadeIn(1000);
				break;
			case 1:
				$("#div_banner1").fadeOut(1000);
				$("#div_banner2").fadeIn(1000);
				break;

			case 2:
				$("#div_banner2").fadeOut(1000);
				$("#div_banner3").fadeIn(1000);
				break;
		}
		tracker = (tracker + 1 ) % 3;
	}

	function initialTransition(){
		$("#nav").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 500);
		$("#header").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 500);
		$("#div_banner1").delay(1500).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1000);
		$("#subBanner1").delay(2000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1000);
		$("#motive1").delay(2500).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1000);
		$("#listItem1").delay(2500).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1000);
		$("#listItem2").delay(2800).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1000);
		$("#listItem3").delay(3100).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1000);
		$("#listItem4").delay(3400).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 1000);
		
		$("#buttonListItem1").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2000);
		$("#buttonListItem2").delay(4500).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2000);

		var tid = setInterval(bannerQuestion, 10000);
	}



})(jQuery);