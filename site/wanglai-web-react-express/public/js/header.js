/* =================================
------------------------------------
	Wanglai
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';

(function($) {
	setTimeout(() => {
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");
	}, 3000);

	
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});

})(jQuery);