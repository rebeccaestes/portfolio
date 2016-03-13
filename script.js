$(document).ready(function(){

	// $(".readysetom").on("click", function() {
	// 	var rso_skills = $(".skills").find($(".rso"));
	// 	console.log(rso_skills);
	// 	rso_skills.addClass("skills-used");
	// })

	$(".more").click(function(e) {
		$(e.target).closest(".project_about").find(".more_about").fadeIn("slow");
		// $(e.target).fadeOut("slow");
		// $(e.target).css("color", "white");
		$(e.target).hide();
		$(e.target).next().show();
	})

	$(".less").click(function(e) {
		$(e.target).closest(".project_about").find(".more").fadeIn("slow");
		$(e.target).closest(".project_about").find(".more_about").fadeOut("slow");
		$(e.target).hide();
		$(e.target).previous.show()

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