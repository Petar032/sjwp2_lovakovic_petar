function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
let input = document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts= document.getElementById("attempts");
let randomNumber = randomNumber();
let pokusaji = 0;

function updateAttempts(){
  let pokusaji=0;
  attempts.innerHTML = "Pokušaji: " + pokusaji;

}
updateAttempts();
function CheckNumber(event){
    event.preventDefault(); // ne osvježava stranicu
    
}
function NewGame(){
   
}