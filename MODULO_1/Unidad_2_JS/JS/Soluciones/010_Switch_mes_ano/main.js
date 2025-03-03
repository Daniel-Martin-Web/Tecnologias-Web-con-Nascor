

// 

let numeroIntroducido = parseInt(prompt('Escribe un número del 1 al 12 para saber a qué mes corresponde'));
let mes;

switch (numeroIntroducido) {
    case 1:
        mes = "Enero";
        break;
    case 2:
        mes = "Febrero";
        break;
    case 3:
        mes = "Marzo";
        break;
    case 4:
        mes = "Abril";
        break;
    case 5:
        mes = "Mayo";
        break;
    case 6:
        mes = "Junio";
        break;
    case 7:
        mes = "Julio";
        break;
    case 8:
        mes = "Agosto";
        break;
    case 9:
        mes = "Septiembre";
        break;
    case 10:
        mes = "Octubre";
        break;
    case 11:
        mes = "Noviembre";
        break;
    case 12:
        mes = "Diciembre";
        break;
    default:
        mes = false
        window.location.reload();
        break;
}
if (!mes) window.location.reload();
alert("el mes correspondiente al Número " + numeroIntroducido + " es " + mes);