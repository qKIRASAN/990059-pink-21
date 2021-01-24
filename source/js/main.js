const header = document.querySelector(".header");
const headerInner = document.querySelector(".header__inner");
const headerLogo = document.querySelector(".header__logo");
const navToggle = document.querySelector(".main-nav__toggle");
const burger = document.querySelector(".main-nav__burger");
const navList = document.querySelector(".main-nav__list");

header.classList.remove("header--open-menu");
headerInner.classList.remove("header__inner--open-menu");
headerLogo.classList.remove("header__logo--open-menu");
navToggle.classList.remove("main-nav__toggle--disabled");
navList.classList.add("main-nav__list--closed");

navToggle.addEventListener("click", function () {
  header.classList.toggle("header--open-menu");
  headerInner.classList.toggle("header__inner--open-menu");
  headerLogo.classList.toggle("header__logo--open-menu");
  navToggle.classList.toggle("main-nav__toggle--shown");
  burger.classList.toggle("main-nav__burger--open-menu");
  navList.classList.toggle("main-nav__list--closed");
});
