// Making fixed navigation when user scrolls below header section
addEventListener("scroll", () => {
  let fixedNavigation = document.querySelectorAll(".fixed-navigation")[0];
  let main = document.querySelectorAll(".features")[0];
  let mainOffsetTop = main.offsetTop;
  let scrollTop = window.pageYOffset;
  scrollTop >= mainOffsetTop + window.innerHeight / 32 ?
  fixedNavigation.style.transform = "translateY(0px)" :
  fixedNavigation.style.transform = "translateY(-90px)";
});

// Preloader
document.addEventListener("readystatechange", () => {
  if (document.readyState == "complete") {
    let preLoader = document.querySelectorAll(".preloader")[0];
    let body = document.querySelectorAll("body")[0];
    preLoader.style.display = "none";
    body.style.overflow = "visible";
  }
});
