$(document).ready(function(){

	// I. Click events for popups and zooms; mostly self-explanatory
	$(".kitten-link").click(function( e) {
		e.preventDefault ();
		$(".container").each (function () {
			$(this).css ("opacity", ".5");
		});
		$(".kitten").fadeIn ("slow");
	})

	$(".kitten-close").click (function () {
		$(".kitten").fadeOut ("slow");
		$(".container").each (function () {
			$(this).fadeTo ("slow", 1)
		}) 
	})

	$(".ziggy-link").click (function (e) {
		e.preventDefault ();
		$(".container").each (function () {
			$(this).css ("opacity", ".5");
		});
		$(".ziggy").fadeIn ("slow");
	})

	$(".ziggy-close").click (function () {
		$(".ziggy").fadeOut ("slow");
		$(".container").each (function () {
			$(this).fadeTo ("slow", 1)
		}) 
	})

	$(".budget-zoom").click (function (e) {
		e.preventDefault ();
		$(".container").each (function () {
			$(this).css ("opacity", ".5");
		});
		$(".budget").fadeIn ("slow");
	})

	$(".budget-close").click (function () {
		$(".budget").fadeOut ("slow");
		$(".container").each (function() {
			$(this).fadeTo ("slow", 1)
		}) 
	})


	// II. Landing animations

	// fade in the general page
	function animateRestOfPage () {
		$('.hidden').animate ({
			opacity: '1'
		}, 300)
	}

	// fade in the text in the top section
	function animateIntroText () {
		$('.intro section.category').animate ({
  		opacity: '1'
  	}, 1000, function () {
  		animateRestOfPage ();
  	})
	}

	// animate the top section upon page load
	function landingAnimation (widthOffset) {
		$('.intro').animate ({
	   	padding: '50px 10px',
	    width: '-=' + widthOffset + 'px',
	  }, 1000, function() {
	  	$('.intro').addClass ('done');
	  	$('.intro').removeAttr ('style'); // so that the animated-in styles don't override media queries, if the user resizes
	  	animateIntroText ();
	  });		
	}

	// on smaller screens the top text needs to be wider
	if ($(window).width () > '600') {
		landingAnimation (200);
	}
	else {
		landingAnimation (100);
	}

	// 



});