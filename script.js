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

});