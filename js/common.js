const body = document.querySelector("body");
const topBtn = document.querySelector(".scroll-top");
const header = document.querySelector(".hd");
const menuBtn = document.querySelector(".mhd-menu-btn");
let showMenu = false;

window.addEventListener("scroll", function (e) {
  let scrollY = window.scrollY;

  if (scrollY > 0) {
    topBtn.classList.add("top-btn");
    header.classList.add("scr-header");
  } else {
    topBtn.classList.remove("top-btn");
    header.classList.remove("scr-header");
  }
});

let timeOut;

function screenTop() {
  if (window.scrollY != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout("screenTop()", 10);
  } else clearTimeout(timeOut);
}

topBtn.addEventListener("click", screenTop);

function toggleMenu() {
  document.querySelector(".mhd").classList.toggle("show-menu");
  let classYn = document.querySelector(".mhd").classList.contains("show-menu");
  return (showMenu = classYn);
}
document.addEventListener("click", function (e) {
  if (showMenu === true) {
    let target = e.target;
    let curTarget = e.currentTarget;
    if (!target.classList.contains("mhd-menu-btn")) {
      if (
        !target.classList.contains("show-menu") &&
        !target.classList.contains("list-li") &&
        !target.classList.contains("mhd-more")
      ) {
        document.querySelector(".mhd").classList.remove("show-menu");

        showMenu = false;
      }
    }
    return showMenu;
  }
});
menuBtn.addEventListener("click", toggleMenu);
