"use strict";

//navigation function
var anchorTag = document.querySelector(".navbar__menu");
anchorTag.addEventListener("mouseover", function (elem) {
  var targetEl = elem.target;
  var anchor = document.createElement("a");
  console.log(targetEl);

  if (targetEl.matches("a")) {
    //
    console.log(targetEl.classList);
    targetEl.classList.add("active");
  } else {
    console.log("not true");
  }
});