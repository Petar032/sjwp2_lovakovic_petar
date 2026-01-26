const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const counter = document.getElementById("counter");

let count = 0;

plusBtn.addEventListener("click", function() {
    count++;
    counter.textContent = count;
});

minusBtn.addEventListener("click", function() {
    count--;
    counter.textContent = count;
});
                                     