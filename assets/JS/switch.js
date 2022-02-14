const themeToggle = document.querySelector("#switch-theme");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light-theme")
    ? enableDarkMode()
    : enableLightMode();

  console.log("theme active");
});

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-label", "Switch to light theme");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
  let arrow = document.getElementById("arrow");
  arrow.style.fill = "fill(" + " #0f0f0f)";
}

function setThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
}

document.onload = setThemePreference();

// scroll rotate
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let button = document.getElementById("switch-icon");
  button.style.transform = "rotate(" + window.pageYOffset / 7 + "deg)";
}
