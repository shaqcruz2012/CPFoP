document.querySelector("#turnRed").addEventListener("click", turnRedFunction);
document.querySelector("#turnBlue").addEventListener("click", turnBlueFunction);
document.querySelector("#turnPurple").addEventListener("click", turnPurpleFunction);
document.querySelector("#turnRandom").addEventListener("click", turnRandomFunction);

function turnRedFunction() {
  document.querySelector("body").style.backgroundColor = "red";
}

function turnBlueFunction() {
  document.querySelector("body").style.backgroundColor = "blue";
}

function turnPurpleFunction() {
  document.querySelector("body").style.backgroundColor = "purple";
}

function turnRandomFunction() {
  let n = Math.random()
  switch(n) {
    case n<.33:
      document.querySelector("body").style.backgroundColor = "purple";
      break;
    case n>.66:
      document.querySelector("body").style.backgroundColor = "blue"
      break;
    default:
      document.querySelector("body").style.backgroundColor = "red"
  }


  
  
  
}
