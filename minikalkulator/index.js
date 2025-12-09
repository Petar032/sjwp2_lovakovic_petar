const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("rez");

document.getElementById("add").onclick = () => {
    result.textContent = Number(num1.value) + Number(num2.value);
};

document.getElementById("sub").onclick = () => {
    result.textContent = Number(num1.value) - Number(num2.value);
};

document.getElementById("mul").onclick = () => {
    result.textContent = Number(num1.value) * Number(num2.value);
};

document.getElementById("div").onclick = () => {
    result.textContent = Number(num1.value) / Number(num2.value);
};

document.getElementById("clear").onclick = () => {
    num1.value = "";
    num2.value = "";
    result.textContent = "--";
};
