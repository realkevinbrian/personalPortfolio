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