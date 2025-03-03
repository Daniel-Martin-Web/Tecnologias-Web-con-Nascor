// 
const meses = [
   "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
let numeroIntroducido = parseInt(prompt('Escribe un número del 1 al 12 para saber a qué mes corresponde'));
let mes;
let numeroReal = numeroIntroducido-1;

mes = meses[numeroReal];
if (!mes) window.location.reload();

alert("el mes correspondiente al Número " + numeroIntroducido + " es " + mes);
console.log("el mes correspondiente al Número " + numeroIntroducido + " es " + mes);


/*
switch (numeroIntroducido) {
    case 1:
        mes = meses[numeroReal];
        break;
    case 2:
        mes = meses[numeroReal];
        break;
    case 3:
        mes = meses[numeroReal];
        break;
    case 4:
        mes = meses[numeroReal];
        break;
    case 5:
        mes = meses[numeroReal];
        break;
    case 6:
        mes = meses[numeroReal];
        break;
    case 7:
        mes = meses[numeroReal];
        break;
    case 8:
        mes = meses[numeroReal];
        break;
    case 9:
        mes = meses[numeroReal];
        break;
    case 10:
        mes = meses[numeroReal];
        break;
    case 11:
        mes = meses[numeroReal];
        break;
    case 12:
        mes = meses[numeroReal];
        break;
    default:
        mes = false;
        window.location.reload();
        break;
}

*/