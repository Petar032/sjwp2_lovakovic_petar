const r = document.getElementById("r");
const u = document.getElementById("u");
const iRez = document.getElementById("iRez");

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const uin = document.getElementById("uin");
const uRez = document.getElementById("uRez");

const rs1 = document.getElementById("rs1");
const rs2 = document.getElementById("rs2");
const rSer = document.getElementById("rSer");

const rp1 = document.getElementById("rp1");
const rp2 = document.getElementById("rp2");
const rPar = document.getElementById("rPar");


document.getElementById("I").onclick = function() {
    if (Number(r.value) > 0 && Number(u.value) > 0) {
        iRez.textContent = (Number(u.value) / Number(r.value)).toFixed(2);
    } else {
        alert("Svi unosi moraju biti veći od 0!");
    }
};


document.getElementById("Uiz").onclick = function() {
    if (Number(r1.value) > 0 && Number(r2.value) > 0 && Number(uin.value) > 0) {
        uRez.textContent = (Number(uin.value) * (Number(r2.value) / (Number(r1.value) + Number(r2.value)))).toFixed(2);
    } else {
        alert("Svi unosi moraju biti veći od 0!");
    }
};


document.getElementById("ser").onclick = function() {
    if (Number(rs1.value) > 0 && Number(rs2.value) > 0) {
        rSer.textContent = (Number(rs1.value) + Number(rs2.value)).toFixed(2);
    } else {
        alert("Svi unosi moraju biti veći od 0!");
    }
};         


document.getElementById("par").onclick = function() {
    if (Number(rp1.value) > 0 && Number(rp2.value) > 0) {
        rPar.textContent = ((Number(rp1.value) * Number(rp2.value)) / (Number(rp1.value) + Number(rp2.value))).toFixed(2);
    } else {
        alert("Svi unosi moraju biti veći od 0!");
    }
};
