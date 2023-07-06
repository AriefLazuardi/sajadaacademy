// const hamburger = document.getElementById("hamburger");

// hamburger.addEventListener("click", () => {
//   const div = document.querySelector("div#mobile-menu-2");

//   div.classList.toggle("hidden");
// });

// const listMenu = document.querySelectorAll("ul#menu li");

// listMenu.forEach((el) => {
//   el.addEventListener("click", () => {
//     el.classList.add("bg-white", "rounded-lg");
//   });
// });

// const btn = document.getElementById("hamburger");
// btn.addEventListener("click", () => {});

new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
