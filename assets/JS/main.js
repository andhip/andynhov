!(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".foot__btt").fadeIn("slow");
    } else {
      $(".foot__btt").fadeOut("slow");
    }
  });

  $(".foot__btt").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000,
      "easeOutExpo"
    );
    return false;
  });
})(jQuery);
