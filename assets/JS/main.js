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

  // ------------------------------------------------------------------------------ //
  // Protfolio Viewer
  // ---------------------------------------------------------
  $(".details_gall_image .responsive-image").click(function () {
    $("#full-image").attr("src", $(this).attr("src"));
    $("#image-viewer").show();
  });

  $("#image-viewer .close").click(function () {
    $("#image-viewer").hide();
  });
  console.log("image-viewer active");
})(jQuery);
