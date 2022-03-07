// !(function ($) {
//   "use strict";

//   function loadPage() {
//     let html = "";
//     let splashTitle = document.querySelector(".works");
//     let splashTitleArray = splashTitle.innerText.split("");
//     splashTitleArray.forEach((letter) => {
//       html += `<span>${letter}</span>`;
//     });
//     splashTitle.innerHTML = html;

//     [...splashTitle.querySelectorAll("span")].forEach((span, idx) => {
//       setTimeout(() => {
//         span.style.transform = "translateY(0px)";
//       }, (idx + 1) * 50);
//     });

//     setTimeout(() => {
//       splash.classList.add("active");

//       setTimeout(() => {
//         body.style.transform = `translateY(0px)`;
//         body.style.opacity = 1;
//         splash.style.display = "none";
//         splash.style.transition = "0.3s";
//       }, 900);
//     }, 2000);
//   }

//   loadPage();
// })(jQuery);
