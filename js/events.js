// option 1: onclick 
function makeRed() {
  document.body.style.backgroundColor = `red`;
}
function makeYellow() {
  document.body.style.backgroundColor = `yellow`;
}

// option 2: add onclick function.  
const makeBlueButton  = document.getElementById(`make-blue`);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = `blue`;
}
   




