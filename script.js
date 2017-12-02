$(document).ready(function(){

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

	$(".budget-zoom").click(function(e) {
		e.preventDefault();
		$(".container").each(function() {
			$(this).css("opacity", ".5");
		});
		$(".budget").fadeIn("slow");
	})

	$(".budget-close").click(function() {
		$(".budget").fadeOut("slow");
		$(".container").each(function() {
			$(this).fadeTo("slow", 1)
		}) 
	})

});