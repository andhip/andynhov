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

  function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var t_str = hours + ":" + minutes + " ";
    if (hours > 11) {
      t_str += "PM";
    } else {
      t_str += "AM";
    }
    document.getElementById("mod__clock").innerHTML = t_str;
  }
  setInterval(updateTime, 1000);
  // ------------------------------------------------------------------------------ //
  // Live CLOCK
  // ---------------------------------------------------------
  // var span = document.getElementById("mod__clock");

  // function time() {
  //   var d = new Date();
  //   var s = d.getSeconds();
  //   var m = d.getMinutes();
  //   var h = d.getHours();
  //   span.textContent =
  //     ("0" + h).substr(-2) +
  //     ":" +
  //     ("0" + m).substr(-2) +
  //     ":" +
  //     ("0" + s).substr(-2);
  // }

  // setInterval(time, 1000);

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
  var today = new Date().toString().split(" ").splice(1, 3).join(" ");

  document.getElementById("date_loc").innerHTML = today;

  // ------------------------------------------------------------------------------ //
  // Automatic Last Updated
  // ---------------------------------------------------------
})(jQuery);
