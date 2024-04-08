// COIN FLIP SIMULATOR

//let rand = Math.random();
//console.log(rand);

// 10% heads 60% nothing 30% tails

//if (rand < 0.10) {
// console.log("heads");
///}//else if (rand < 0.70){
// console.log("nothing");
//}///// else {
//console.log("tails")
//}

//coin flip

//HTML variables
let outputEl = document.getElementById("output");
let HeadsEl = document.getElementById("Heads-out");
let TailsEl = document.getElementById("Tails-out");

// count varuiables
let numHeads = 0;
let numTails = 0;

//button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  //simulate the coin flip
  if (randNum < 0.5) {
    document.getElementById("output").innerHTML =
      "<img src ='img/heads.png' />";
    numHeads++;
    HeadsEl.innerHTML = numHeads;
  } else {
    document.getElementById("output").innerHTML =
      "<img src ='img/tails.png' />";
    numTails++;
    TailsEl.innerHTML = numTails;
  }
}
