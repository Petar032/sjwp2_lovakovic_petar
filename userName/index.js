import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt([
  {
    type: "input",
    name: "ime",
    message: "Unesite ime:"
  },
  {
    type: "input",
    name: "prezime",
    message: "Unesite prezime:"
  }
])
.then((odgovori) => {

  const ime = odgovori.ime.toLowerCase();
  const prezime = odgovori.prezime.toUpperCase();

  const username = ime + prezime;

  fs.writeFileSync("users.txt", username);

  console.log("Korisničko ime je spremljeno u users.txt");
}); 