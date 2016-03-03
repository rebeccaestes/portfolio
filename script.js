$(document).ready(function(){

	$(".more").click(function(e) {
		$(e.target).closest(".project_about").find(".more_about").fadeIn("slow");
		$(e.target).fadeOut("slow");
	})

	$(".less").click(function(e) {
		$(e.target).closest(".project_about").find(".more").fadeIn("slow");
		$(e.target).closest(".project_about").find(".more_about").fadeOut("slow");
	})

	$(".kitten-link").click(function() {
		$(".container").each(function() {
			$(this).css("opacity", ".5");
		});
		$(".kitten").fadeIn("slow");

	})

	$(".kitten-close").click(function() {
		$(".kitten").fadeOut("slow");
		$(".container").each(function() {
			$(this).fadeTo("slow", 1)
		}) 
	})

});
