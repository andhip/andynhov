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
      3000,
      "easeOutExpo"
    );
    return false;
  });

  // ------------------------------------------------------------------------------ //
  // Scrolling-text
  // ---------------------------------------------------------
  // jQuery(document).on("scroll", function () {
  //   $("#scroll__git").css(
  //     "left",
  //     Math.max(512 - 0.2 * window.scrollY, 2) + "vw"
  //   );
  //   $("#scroll__git2").css(
  //     "right",
  //     Math.max(530 - 0.2 * window.scrollY, 2) + "vw"
  //   );
  // });
  // ------------------------------------------------------------------------------ //
  // /Legals Viewer
  // ---------------------------------------------------------
  $(".button").click(function () {
    var buttonId = $(this).attr("id");
    $("#modal-container").removeAttr("class").addClass(buttonId);
    $("body").addClass("modal-active");
  });

  $("#modal-container").click(function () {
    $(this).addClass("out");
    $("body").removeClass("modal-active");
  });

  // ------------------------------------------------------------------------------ //
  // Live CLOCK
  // ---------------------------------------------------------
  var span = document.getElementById("mod__clock");

  function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent =
      ("0" + h).substr(-2) +
      ":" +
      ("0" + m).substr(-2) +
      ":" +
      ("0" + s).substr(-2);
  }

  setInterval(time, 1000);

  // ------------------------------------------------------------------------------ //
  // Protfolio Viewer
  // ---------------------------------------------------------
  $(".details_gall_image .responsive-image").click(function () {
    $("#full-image").attr("src", $(this).attr("src"));
    $("#image-viewer").show();
  });

  $("#image-viewer").click(function () {
    $("#image-viewer").hide();
  });
  console.log("image-viewer active");

  // ------------------------------------------------------------------------------ //
  // Date Day
  // ---------------------------------------------------------
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = days[d.getDay()];
  document.getElementById("thisDay").innerHTML = day;

  // ------------------------------------------------------------------------------ //
  // Date loc
  // ---------------------------------------------------------
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // document.write(today);
  document.getElementById("date_loc").innerHTML = today;
})(jQuery);
