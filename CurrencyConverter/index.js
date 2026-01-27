const btc = document.getElementById("btc");
const eur = document.getElementById("eur");
const usd = document.getElementById("usd");

document.querySelector("#convert").onclick = function() {
    let value = btc.value;

    eur.textContent = "EUR: €" + (value * 73745.79).toFixed(2);
    usd.textContent = "USD: $" + (value * 87877.60).toFixed(2);
};
