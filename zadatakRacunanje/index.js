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

const cs1 = document.getElementById("cs1");
const cs2 = document.getElementById("cs2");
const cSer = document.getElementById("cSer");

const cp1 = document.getElementById("cp1");
const cp2 = document.getElementById("cp2");
const cPar = document.getElementById("cPar");

const ls1 = document.getElementById("l1");
const ls2 = document.getElementById("l2");
const lSer = document.getElementById("lSer");

const lp1 = document.getElementById("lp1");
const lp2 = document.getElementById("lp2");
const lPar = document.getElementById("lPar");

const f = document.getElementById("f");
const lrez = document.getElementById("lr");
const xLRez = document.getElementById("xLRez");

const fC = document.getElementById("fC");
const cC = document.getElementById("c");
const xCRez = document.getElementById("xCRez");

document.getElementById("I").onclick = function() {
    if (Number(r.value) > 0 && Number(u.value) > 0)
        iRez.textContent = (Number(u.value) / Number(r.value)).toFixed(2);
};

document.getElementById("Uiz").onclick = function() {
    if (Number(r1.value) > 0 && Number(r2.value) > 0 && Number(uin.value) > 0)
        uRez.textContent = (Number(uin.value) * (Number(r2.value) / (Number(r1.value) + Number(r2.value)))).toFixed(2);
};

document.getElementById("ser").onclick = function() {
    if (Number(rs1.value) > 0 && Number(rs2.value) > 0)
        rSer.textContent = (Number(rs1.value) + Number(rs2.value)).toFixed(2);
};

document.getElementById("par").onclick = function() {
    if (Number(rp1.value) > 0 && Number(rp2.value) > 0)
        rPar.textContent = ((Number(rp1.value) * Number(rp2.value)) / (Number(rp1.value) + Number(rp2.value))).toFixed(2);
};

document.getElementById("cser").onclick = function() {
    if (Number(cs1.value) > 0 && Number(cs2.value) > 0)
        cSer.textContent = ((Number(cs1.value) * Number(cs2.value)) / (Number(cs1.value) + Number(cs2.value))).toFixed(2);
};

document.getElementById("cpar").onclick = function() {
    if (Number(cp1.value) > 0 && Number(cp2.value) > 0)
        cPar.textContent = (Number(cp1.value) + Number(cp2.value)).toFixed(2);
};

document.getElementById("lser").onclick = function() {
    if (Number(ls1.value) > 0 && Number(ls2.value) > 0)
        lSer.textContent = (Number(ls1.value) + Number(ls2.value)).toFixed(2);
};

document.getElementById("lpar").onclick = function() {
    if (Number(lp1.value) > 0 && Number(lp2.value) > 0)
        lPar.textContent = ((Number(lp1.value) * Number(lp2.value)) / (Number(lp1.value) + Number(lp2.value))).toFixed(2);
};

document.getElementById("btnInduktivitet").onclick = function () {

    const N = Number(document.getElementById("namotaji").value);
    const A = Number(document.getElementById("povrsina").value);
    const l = Number(document.getElementById("duljina").value);

    if (N > 0 && A > 0 && l > 0) {
        const mu0 = 4 * Math.PI * 1e-7;
        const L = (mu0 * N * N * A) / l;
        const L_mH = L * 1000000;
        document.getElementById("rezInduktivitet").textContent =
            L_mH.toFixed(3);
    }
};



document.getElementById("xLr").onclick = function() {
    if (Number(f.value) > 0 && Number(lrez.value) > 0) {
        const XL = 2 * Math.PI * Number(f.value) * Number(lrez.value);
        xLRez.textContent = XL.toFixed(2);
    }
};

document.getElementById("xCr").onclick = function() {
    if (Number(fC.value) > 0 && Number(cC.value) > 0) {
        const XC = 1 / (2 * Math.PI * Number(fC.value) * Number(cC.value));
        xCRez.textContent = XC.toFixed(2);
    }
};
