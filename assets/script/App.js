var i = 0;
var txt = 'Hey, my name is Kevin Brian, a Web Developer'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setInterval(typeWriter, speed * 10);


window.addEventListener("scroll", myFunc);

function myFunc (elem){

  let navbar = document.getElementById("navbar");
  let profileImage = document.getElementById("profileImage");

  navbar.style.backgroundColor = "var(--main-Bg--)";
  navbar.style.position = "fixed";
  navbar.style.width = "95%";
  navbar.style.top = "0px";
  navbar.style.zIndex = "10000";
  profileImage.style.marginTop = "55px";
  

  if(elem.target.scrollTo === 0){
    alert("Hello Kevin");
  }
  


}
