
buttontop = document.getElementById("topbutton");

window.onscroll = () => {
  scrolltopFunction();
  stickymenuFunction();
};

var menu = document.getElementById("menu");

var sticky = menu.offsetTop;

function stickymenuFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("stickymenu");
  } else {
    menu.classList.remove("stickymenu");
  }
}
function scrolltopFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    buttontop.style.display = "block";
  } else {
    buttontop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
