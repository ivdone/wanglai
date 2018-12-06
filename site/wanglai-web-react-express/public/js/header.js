/* =================================
------------------------------------
	Wanglai
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';

(function($) {
	window.onload(() => {
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");
	});

	
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});

})(jQuery);