$(document).ready(function(){

	$(".more").click(function(e) {
		// console.log($(e.target));

		console.log($(e.target).parent('p'));
		$('.more_popup').hide();
		// $(e.target).closest(".fa-github").find(".more_popup").show();
		$(e.target).closest(".project_about").find(".more_popup").show();
		// $(body).fade
		// var moreText = $(".more_popup").text;
		// $(".project_repo").text = moreText;
	})


	// $("figure").hover (function() {
	// 	$(this).find(".moreinfo").fadeIn("slow");
	// 	$(this).find("figcaption").css("height", "85px")
	// 														.css("line-height", "12px")
	// 														.css("padding-top", "5px");

	// }, function() {
	// 	$(this).find("figcaption").css("height", "25px")
	// 														.css("line-height", "25px")
	// 														.css("padding-top", "0px");
	// 	$(this).find(".moreinfo").fadeOut();
	// });
	
	// $(window).scroll(function() {
	// 	if ($(document).scrollTop() < 600) {
	// 		$("#contact").css("height", "50px")
	// 								.css("text-align", "center")
	// 								.css("top", "88%")
	// 								.css("width", "100%")
	// 								.css("margin", "0 auto")
	// 								.css("float", "none");
	// 								.css("position", "static")
	// 		$(".contact").css("display", "inline-block")
	// 								.css("float", "left")
	// 								.css("text-align", "center");

	// 	}
	// })

});
