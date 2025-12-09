function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
let input = document.getElementById("guess");
let msg = document.getElementById("msg");
let attempts= document.getElementById("attempts");
let randNumber = randomNumber();
let pokusaji = 0;

function updateAttempts(){
  attempts.innerHTML = "Pokušaji: " + pokusaji;

}
updateAttempts();
function CheckNumber(event){
    event.preventDefault(); // ne osvježava stranicu
    let value = parseInt(input.value);
    /*console.log(value);*/
    if(isNaN(value) || value < 1 || value > 100){
      msg.innerHTML = "Unesite broj između 1 i 100.";
      msg.style.color = "crimson";
      return;
    }
    if(value === randNumber){
      msg.innerHTML = "Pogodak. Broj je " + randNumber;
      msg.style.color = "green";
    }else if(value < randNumber){
      msg.innerHTML = "Premalo";
      msg.style.color = "orange";
    }else{
      msg.innerHTML = "Previše";
      msg.style.color = "orange";
    }
    pokusaji++;
    updateAttempts();

    
}
function NewGame(){
  randNumber = randomNumber();
  pokusaji = 0;
  updateAttempts();
  msg.innerHTML = "Nova igra           - pokušaj ponovno.";
  msg.style.color = "black";
  input.focus();
   
}
document.querySelector("list1 a").setAttribute("href","https://ednevnik.hr");










































