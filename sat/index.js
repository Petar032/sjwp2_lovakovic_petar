function sat() {
    let d = new Date();
    document.getElementById("sat").innerHTML =  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
setInterval(sat, 1000);                    