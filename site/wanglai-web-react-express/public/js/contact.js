/* =================================
------------------------------------
	Wanglai
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';
const url = "/api/contact_info";

(function($) {
	$("#contact-form").submit((event) => {
		event.preventDefault();
		var reqBody = {};
		reqBody.name = $("#contact-name").val();
		reqBody.tel = $("#contact-tel").val();
		reqBody.title = $("#contact-title").val();
		reqBody.content = $("#contact-content").val();
		$.post(url, reqBody, function(data) {
			alert(data);
			$("#contact-submit-response").text(data);
		});
		$(':input','#contact-form')
		  .not(':button, :submit, :reset, :hidden')
		  .val('')
		  .prop('checked', false)
		  .prop('selected', false);

		return false;
	});
})(jQuery);