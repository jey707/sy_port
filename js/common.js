const body = document.querySelector("body");
const topBtn = document.querySelector(".scroll-top");
const header = document.querySelector(".hd");
const menuBtn = document.querySelector(".mhd_menu-box");
const conTitle = document.querySelector(".con-title");
const conSubTitle = document.querySelector(".con-subtitle");
const postContainer = document.querySelector(".post-container");
const moreTitle = document.querySelector(".more-title");
const moreBox = document.querySelector(".more-box");

window.addEventListener("scroll", function (e) {
  let scrollY = window.scrollY;
  // 컨텐츠 영역 show hide
  if (scrollY >= 200) {
    conTitle.classList.remove("hide");
    conTitle.classList.add("show");
    conSubTitle.classList.remove("hide");
    conSubTitle.classList.add("show");
  }
  if (scrollY >= 500) {
    postContainer.classList.remove("hide");
    postContainer.classList.add("show");
  }
  if (scrollY >= 850) {
    moreTitle.classList.remove("hide");
    moreTitle.classList.add("show");
  }
  if (scrollY >= 1100) {
    moreBox.classList.remove("hide");
    moreBox.classList.add("show");
  }

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
  document.querySelector(".mhd_first").classList.toggle("active");
  let classYn = document.querySelector(".mhd").classList.contains("show-menu");
  return (showMenu = classYn);
}
document.addEventListener("click", function (e) {
  if (showMenu === true) {
    let target = e.target;
    // let curTarget = e.currentTarget;
    if (
      !target.classList.contains("mhd_first") &&
      !target.classList.contains("mhd_menu") &&
      !target.classList.contains("mhd_menu-box")
    ) {
      if (
        !target.classList.contains("show-menu") &&
        !target.classList.contains("list-li") &&
        !target.classList.contains("mhd-more") &&
        !target.classList.contains("arr-right")
      ) {
        document.querySelector(".mhd").classList.remove("show-menu");
        document.querySelector(".mhd_first").classList.remove("active");

        showMenu = false;
      }
    }
    return showMenu;
  }
});
menuBtn.addEventListener("click", toggleMenu);

// side menubar controllor
$(document).ready(function () {
  $(".mhd ul .mhd-sub").hide();
  $(".mhd-more").click(function () {
    let slideup = document.querySelector(".mhd").querySelectorAll(".mhd-sub");
    let arrowUp = document
      .querySelector(".mhd")
      .querySelectorAll(".open-arrow");
    $(slideup).each(function (i, obj) {
      $(slideup[i]).slideUp("fast");
    });
    $(arrowUp).each(function (i, obj) {
      $(arrowUp[i]).removeClass("open-arrow");
    });
    $(this.parentElement.querySelector(".mhd-sub")).slideToggle("fast");
    $(this).addClass("open-arrow");
  });
});

const langBox = document.querySelector(".m-lenguage");
document.querySelector(".lang-btn").addEventListener("click", function (e) {
  langBox.classList.toggle("m-lang-show");
});

// scrren resize
let size = document.querySelector("body");

window.onresize = function (e) {
  let innerWidth = window.innerWidth;
  if (innerWidth > 1200) {
    langBox.classList.remove("m-lang-show");
  }
};

// const hamnbuger = document.querySelector('.mhd_first');
// hambuger.addEventListener("click" function(e){
//   console.log('aaaaaaaaaaaaa')
// })
