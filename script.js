//loader

window.onload = function () {
  setTimeout(() => {
    // delete loader
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");
    // show main screen
    const main = document.querySelector(".main");
    main.style.visibility = "visible";

    // remove loader element after the main screen is shown
    main.addEventListener(
      "transitionend",
      function () {
        loader.remove();
      },
      { once: true }
    );
  }, 2500);
};

// loader title animation
gsap.to(".loader-title", {
  delay: 1,
  duration: 1.2,
  opacity: 1,
  y: "0px",
});

//hamburger
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
});

//nav bar
const nav = document.getElementById("nav");
nav.addEventListener("click", function () {
  this.classList.remove("active");
  document.querySelector(".hamburger").classList.remove("active");
});

const header = document.querySelector(".header-contents");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px"; //hide nav outside
  }

  prevScrollPos = currentScrollPos;
});

//go to top button
const button = document.getElementById("topButton");
button.addEventListener("click", scrollTop);
function scrollTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

//copy right year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
