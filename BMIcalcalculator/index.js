const visinaInput = document.getElementById("visina");
const tezinaInput = document.getElementById("tezina");
const result = document.getElementById("rezultat");

document.getElementById("calculate").addEventListener("click", function() {
    const visina = Number(visinaInput.value) / 100; 
    const tezina = Number(tezinaInput.value);
    const bmi = tezina / (visina * visina);
    result.textContent = "BMI: " + bmi.toFixed(2);
});


