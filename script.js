$(document).ready(function(){

	$(".more").click(function(e) {
		$(e.target).closest(".project_about").find(".more_about").fadeIn("slow");
		$(e.target).fadeOut("slow");
	})

	$(".less").click(function(e) {
		$(e.target).closest(".project_about").find(".more").fadeIn("slow");
		$(e.target).closest(".project_about").find(".more_about").fadeOut("slow");
	})

});
