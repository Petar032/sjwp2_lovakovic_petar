const input = document.getElementById("textInput");
const countText = document.getElementById("count");

document.querySelector("#textInput").addEventListener("input", function() {
    const length = input.value.length;
    countText.textContent = "Broj slova: " + length;
})