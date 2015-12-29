$(document).ready(function(){

	console.log("jQuery loaded :D");

	$("figure").hover (function() {
		$(this).find(".moreinfo").fadeIn("slow");
		$(this).find("figcaption").css("height", "85px").css("line-height", "12px").css("padding-top", "5px");

	}, function() {
		$(this).find("figcaption").css("height", "25px").css("line-height", "25px").css("padding-top", "0px");
		$(this).find(".moreinfo").fadeOut();
	});
	
	// $(window).scroll(function() {
	// 	if ($(document).scrollTop() > 5) {
	// 		$("#contact").fadeIn();
	// 	}
	// 	else {
	// 		$("#contact").fadeOut();
	// 	}
	// })

});
