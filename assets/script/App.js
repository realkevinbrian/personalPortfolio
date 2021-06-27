window.onload = typeWriter;
var i = 0;
let name = "Kevin Brian";
var txt = `Hello, I'm ${name}, Nice to meet you!`; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

