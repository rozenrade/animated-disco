document.addEventListener("DOMContentLoaded", function () {
  //   alert("");
});

//Event for text anim ->

document.addEventListener("DOMContentLoaded", () => {
  const checker = new Viewed((entrie) => {
    if (entrie.isIntersecting) {
      entrie.target.classList.add("in-view");
      return;
    }
    entrie.target.classList.remove("in-view");
  });
  const AnimatedElements = document.querySelectorAll(".animate");

  AnimatedElements.forEach((element) => checker.observer(element));
});
//Event for nav bar ->

window.addEventListener("scroll", function () {
  var element = document.getElementsByClassName("anim-nav");
  if (window.scrollY != 0) {
    element[0].classList.add("on-top");
  } else {
    element[0].classList.remove("on-top");
  }
});

function getlocation() {
  var Location = window.location.pathname;

  document.getElementsByClassName;
}
