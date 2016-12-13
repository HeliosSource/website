
(function($) {
	var tracker = 1;
	var tid = setInterval(bannerQuestion, 10000);

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

})(jQuery);