const jump_fox= document.getElementById("fox");
const crocodil = document.getElementById("crocodile");
const tornad = document.getElementById("tornado");

let flah = false;
let flah2 = false;
let result = 0;
let maxResult=0;
let intervalId;

  document.getElementById("input_max").value = localStorage.getItem("resul");



function start() {
  
  results(),
  flah=true;
  crocodil.classList.add("croco");
  
  
}
function results() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId=null; 
    result=0 
  }
 intervalId = setInterval(()=>{
    result++;
    document.getElementById("input").value= result;
  },100)
  
  
}

function jump() {
 if ( flah && jump_fox.classList !== "jump") {
  jump_fox.classList.add("jump")
}
setTimeout(()=>{
  jump_fox.classList.remove("jump")
},700)
}
let check= setInterval(()=>{
  if (!flah) return;
  let topFox = parseInt(window.getComputedStyle(jump_fox).getPropertyValue("top"));
  let leftCroco = parseInt(window.getComputedStyle(crocodil).getPropertyValue("left"));
  if (leftCroco<40  && leftCroco>0 && topFox>=280) {
    flah=false;
  crocodil.classList.remove("croco");
  alert("game over...😭");
    if (result > maxResult) {
   
    maxResult = result;
    localStorage.setItem("resul", maxResult)
    document.getElementById("input_max").value = localStorage.getItem("resul");
  }
  clearInterval(intervalId);
  intervalId = null;
  result=0;
  document.getElementById("input").value="000"
}
},10);

