"use strict";

const burger = document.querySelector(".navigation__burger"),
  hidden = document.querySelector(".navigation__hidden"),
  menuClose = document.querySelector(".navigation__menu-close");
burger.addEventListener("click", () => hidden.classList.add("active"));

menuClose.addEventListener("click", () => hidden.classList.remove("active"));
