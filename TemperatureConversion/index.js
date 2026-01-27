const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

document.getElementById("celsius").oninput = function () {
    let c = celsius.value;

    fahrenheit.textContent = "Fahrenheit: " + (c * 9/5 + 32).toFixed(2);
    kelvin.textContent = "Kelvin: " + (Number(c) + 273.15).toFixed(2);
};
