//navigation function

// navbarlinks();

function navbarlinks() {
  let anchorTag = document.querySelector(".navbar__menu");
  anchorTag.addEventListener("mouseover", elem => {

    let targetEl = elem.target;
    let anchor = document.createElement("a");

    console.log(targetEl);

    if (targetEl.matches("a")) {

      //
      console.log(targetEl.classList);
      targetEl.classList.add("active");


    } else {
      console.log("not true");
    }


  });
}



//overlay
let overlay = document.querySelectorAll(".overlay");

// console.log(overlay)

for(let elem of overlay){

  elem.addEventListener ("mouseover", show=>{

    show.target.style.opacity = "0.9";
  })

  elem.addEventListener("mouseleave", hide=>{
    hide.target.style.opacity = "0";

  })
}