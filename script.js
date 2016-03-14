$(document).ready(function(){

	$(".more").click(function(e) {
		$(e.target).closest(".project_about").find(".more_about").fadeIn("slow");
		$(e.target).hide();
		$(e.target).next().show();
	})

	$(".less").click(function(e) {
		$(e.target).closest(".project_about").find(".more").fadeIn("slow");
		$(e.target).closest(".project_about").find(".more_about").fadeOut("slow");
		$(e.target).hide();
		$(e.target).previous.show()

	})

	$(".kitten-link").click(function(e) {
		e.preventDefault();
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