let auto = document.getElementById("auto_write");


let str = "Hello My name is kevin";

let spd = 100;
let i = 0;
let type = () =>{
  
  if(i < str.length){
    auto.innerHTML += str.charAt(i);
    i++
    setTimeout(type, spd);
  }
}

type();


// remove imageOrientation: 
    // Create a media condition that targets viewports at least 768px wide

const desktop = window.matchMedia('(max-width:812px)');

var navbar = document.getElementById("navbar");

if(desktop.matches){
  navbar.style.display = "none";

}

const mediaQuery = window.matchMedia('(min-width:823px)')
// Check if the media query is true
var bgImage = document.getElementById("bg_image");
var projectCard = document.getElementsByTagName("Projectcard");

if (mediaQuery.matches) {
  // Then trigger an alert
  console.log("Now on Desktop device")
  bgImage.src = "./assets/images/Programming.gif";

  Array.from(projectCard).forEach(elem=>{
    elem.classList.remove("card");
    console.log(elem)
  });



}
else{
  
  bgImage.src = "./assets/images/bgCoding.gif";
  console.log("Now on mobile device");
  Array.from(projectCard).forEach(elem=>{
    elem.classList.add("card");
    console.log(elem)
  });

}


//hover effect
//collect all classes

let hoverElem = document.getElementsByTagName("li");

// let selectedElem = hoverElem.map(elem => {

//   // console.log(elem)
// });

// console.log(hoverElem)

// console.log(Array.from(hoverElem))

// Array.from(hoverElem)[0].innerText = "Brian";
Array.from(hoverElem).map(elem => {
  
  elem.addEventListener("mouseover", e =>{

    let el = e.target;

    console.log()
    if(el.classList === "active"){

      // el.classList.remove("active");
    }
    else{
    // el.classList.add("active");
  }
    
  }, false);
})



