!(function ($) {
  "use strict";

  let splash = document.querySelector(".splash");

  function loadPage() {
    let html = "";
    let splashTitle = document.querySelector(".splash-title");
    let splashTitleArray = splashTitle.innerText.split("");
    splashTitleArray.forEach((letter) => {
      html += `<span>${letter}</span>`;
    });
    splashTitle.innerHTML = html;

    [...splashTitle.querySelectorAll("span")].forEach((span, idx) => {
      setTimeout(() => {
        span.style.transform = "translateY(0px)";
      }, (idx + 1) * 50);
    });

    setTimeout(() => {
      splash.classList.add("active");

      setTimeout(() => {
        body.style.transform = `translateY(0px)`;
        body.style.opacity = 1;
        splash.style.display = "none";
        splash.style.transition = "3s";
      }, 900);
    }, 2000);
  }

  $(window).on("load", function () {
    $("#splash")
      .delay(4000)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  });

  loadPage();
})(jQuery);
