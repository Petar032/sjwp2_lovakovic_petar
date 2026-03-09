import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "duljina",
      message: "Unesite duljinu pravokutnika:"
    },
    {
      type: "input",
      name: "sirina",
      message: "Unesite širinu pravokutnika:"
    }
  ])
  .then((odgovori) => {
    const duljina = parseFloat(odgovori.duljina);
    const sirina = parseFloat(odgovori.sirina);

    const povrsina = duljina * sirina;

    const tekst = `Duljina: ${duljina}
Širina: ${sirina}
Površina pravokutnika: ${povrsina}`;

    fs.writeFileSync("izracun.txt", tekst);

    console.log("Rezultat je spremljen u izracun.txt");
  });