const Kg = document.getElementById("kg");
const goBtn = document.getElementById("go");
const Pounds = document.getElementById("pounds");
const Ounces = document.getElementById("ounces");
const Grams = document.getElementById("grams");

document.querySelector("#go").addEventListener("click", function () {
    const kg = Number(Kg.value);
    const pounds = kg * 2.20462;
    const ounces = kg * 35.274;
    const grams = kg * 1000;
    Pounds.textContent = "Pounds: " + pounds.toFixed(2);
    Ounces.textContent = "Ounces: " + ounces.toFixed(2);
    Grams.textContent = "Grams: " + grams.toFixed(0);
});
