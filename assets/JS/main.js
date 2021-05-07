!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  });

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
      1500,
      "easeInOutExpo"
    );
    return false;
  });
})(jQuery);
