var i = 0;
let name = "Kevin Brian";
var txt = `Hey, my name is ${name}, I am a Web Developer, Welcome to my portolio`; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();