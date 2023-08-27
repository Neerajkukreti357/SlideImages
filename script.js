"use strict";

const myImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let current_img = 0;
const container = document.getElementById("content");

function swapImages(current_img) {
  if (container.children.length > 1) {
    container.removeChild(container.children[0]);
  }
  var newSilde = document.createElement("img");
  newSilde.src = `slides/${myImages[current_img]}`;
  newSilde.className = "fadeinimg";
  container.appendChild(newSilde);
}

document.getElementById("next").addEventListener("click", (e) => {
  e.preventDefault();
  current_img++;
  if (current_img > myImages.length - 1) {
    current_img = 0;
  }
  swapImages(current_img);
});

document.getElementById("previous").addEventListener("click", (e) => {
  e.preventDefault();
  current_img--;
  if (current_img < 0) {
    current_img = myImages.length - 1;
  }
  swapImages(current_img);
});
