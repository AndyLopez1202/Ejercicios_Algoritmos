//variables
let tiempoAntiguedad = +prompt("Ingrese el tiempo de trabajo del empleado");
let sueldoMensual = +prompt("Ingrese el sueldo mensual del trabajador");
let bono1 = 0;
let bono2 = 0;

//condicionales
if (tiempoAntiguedad >=2 && tiempoAntiguedad <5) {
    bono1 = bono1 + 0.2*sueldoMensual;
    if (sueldoMensual <= 1000) {
        bono2 = bono2 + 0.25*sueldoMensual;
        if (bono1 >= bono2){
            console.log (`el bono a pagar al empleado es: ${bono1}`);
        } else {
            console.log (`el bono a pagar al empleado es: ${bono2}`);
        }
        if (sueldoMensual > 1000 && sueldoMensual <= 3500) {
        bono2 = bono2 + 0.15*sueldoMensual;
        if (bono1 >= bono2){
            console.log (`el bono a pagar al empleado es: ${bono1}`);
        } else {
            console.log (`el bono a pagar al empleado es: ${bono2}`);
        }
        if (sueldoMensual > 3500) {
        bono2 = bono2 + 0.10*sueldoMensual;
         }
        if (bono1 >= bono2){
        console.log (`el bono a pagar al empleado es: ${bono1}`);
         } else {
        console.log (`el bono a pagar al empleado es: ${bono2}`);
         }
        }
    }
} else {
    bono1 = bono1 + 0.3*sueldoMensual;
        if (sueldoMensual <= 1000) {
        bono2 = bono2 + 0.25*sueldoMensual;
        if (bono1 >= bono2){
            console.log (`el bono a pagar al empleado es: ${bono1}`);
        } else {
            console.log (`el bono a pagar al empleado es: ${bono2}`);
        }
        if (sueldoMensual > 1000 && sueldoMensual <= 3500) {
        bono2 = bono2 + 0.15*sueldoMensual;
        if (bono1 >= bono2){
            console.log (`el bono a pagar al empleado es: ${bono1}`);
        } else {
            console.log (`el bono a pagar al empleado es: ${bono2}`);
        }
        if (sueldoMensual > 3500) {
        bono2 = bono2 + 0.10*sueldoMensual;
         }
        if (bono1 >= bono2){
        console.log (`el bono a pagar al empleado es: ${bono1}`);
         } else {
        console.log (`el bono a pagar al empleado es: ${bono2}`);
         }
        }
    }
}