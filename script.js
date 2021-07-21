"use strict";

const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("container")) return;
  addActive(e.target);
});

const addActive = function (target) {
  panels.forEach((x) => x.classList.remove("active"));
  target.classList.add("active");
};
