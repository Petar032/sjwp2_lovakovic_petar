function randomNumber(){
  return Math.floor(Math.random() * 6) + 1;
}
let randomNumber1 = randomNumber();
document.querySelectorAll(".img1")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
let randomNumber2 = randomNumber();
document.querySelectorAll(".img1")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");
let randomNumber3 = randomNumber();
document.querySelectorAll(".img2")[0].setAttribute("src", "./images/dice" + randomNumber3 + ".png");
let randomNumber4 = randomNumber();
document.querySelectorAll(".img2")[1].setAttribute("src", "./images/dice" + randomNumber4 + ".png");


let player1Sum = randomNumber1 + randomNumber2;
let player2Sum = randomNumber3 + randomNumber4;
document.querySelector(".prvi").innerHTML = "Zbroj: " + player1Sum;
document.querySelector(".drugi").innerHTML = "Zbroj: " + player2Sum;

if (player1Sum > player2Sum) {
  document.querySelector("h1").innerHTML = "Player 1 Pobijedio!";
} else if (player2Sum > player1Sum) {
  document.querySelector("h1").innerHTML = "Player 2 Pobijedio!";
} else {
  document.querySelector("h1").innerHTML = "Neriješeno!";
}
