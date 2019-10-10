$(document).ready(function(){


  // intro fadein
    // fade in the text in the top section
  // function animateIntroText () {
  //   $('section.intro').animate ({
  //     opacity: '1'
  //   }, 1000, function () {
  //     // animateRestOfPage ();
  //   })
  // }

  // animate the top section upon page load
  // function landingAnimation (widthOffset) {
  //   $('.intro').animate ({
  //     padding: '50px 10px',
  //     width: '-=' + widthOffset + 'px',
  //   }, 1000, function() {
  //     $('.intro').addClass ('done');
  //     $('.intro').removeAttr ('style'); // so that the animated-in styles don't override media queries, if the user resizes
  //     animateIntroText ();
  //   });   
  // }

  // // on smaller screens the top text needs to be wider
  // if ($(window).width () > '600') {
  //   landingAnimation (200);
  // }
  // else {
  //   landingAnimation (100);
  // }

  // project animation
  const className = "inviewable";
  const registeredClass = "inviewable--observing";
  const activeClass = "inviewable--in-view";

  window.addEventListener("load", (event) => {
    targetElement = document.querySelector(".showcase");

    createObserver();
  }, false);

  function createObserver() {
    let observer;

    let optionsShowcase = {
      root: null,
      rootMargin: "0px",
      // threshold: 0
      // threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, optionsShowcase);
    observer.observe(targetElement);
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass(activeClass)
        // $('.contact-static').addClass('contact-fixed');
        // $('.triangle').addClass('hidden');
        // $('section.intro').addClass('borderless');
        // $('.contact-fixed').removeClass('hidden');
      } else {
        $(entry.target).removeClass(activeClass)
        // $('.contact-static').removeClass('contact-fixed');
        // $('.triangle').removeClass('hidden');
        // $('.contact-fixed').addClass('hidden');
      }
    });
  }

  function watchAllShowcases() {
    const selector = `.${className}:not(.${registeredClass})`;
    const elements = Array.from(document.querySelectorAll(selector));

    elements.forEach((element) => {
      const options = {
        rootMargin: '0px',
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(element);
    });
  }

  watchAllShowcases()

})