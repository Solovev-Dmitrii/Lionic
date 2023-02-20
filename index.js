let burger = document.querySelector(".burger");
let menu = document.querySelector(".header-nav");
let menuLinks = menu.querySelectorAll(".header-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("header-nav--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header-nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

const btnMore = document.querySelector(".articles-more");
const articlesiItems = document.querySelectorAll(".articles-item");

btnMore.addEventListener("click", function () {
  articlesiItems.forEach(function (el) {el.classList.add("articles-item--visible")});
  btnMore.closest(".articles-center").classList.add("articles-center--hidden");
});



// btnMore.addEventListener("click", () => {
//   articlesiItems.forEach((el) => {el.classList.add("articles-item--visible")});
//   btnMore.closest(".articles-center").classList.add("articles-center--hidden");
// });
