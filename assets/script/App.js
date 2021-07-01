let auto = document.getElementById("auto_write");


let str = "Hello, I am Kevin, I'm Front end Developer, Nice to meet you";

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



