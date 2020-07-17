//declaracion de variables
let tiempoTrabajo = +prompt("Ingrese el tiempo de trabajo en la empresa en años");
let bono = 0;
//condicionales

switch (tiempoTrabajo) {
    case 1:
        bono = bono + 100;
        break; 
    case 2:
        bono = bono + 200;
        break; 
    case 3:
        bono = bono + 300;
        break; 
    case 4:
        bono = bono + 400;
        break; 
    case 5:
        bono = bono + 500;
        break; 
    default:
        bono = bono + 1000;
        break;   
    }
    console.log (`Llevas trabajando ${tiempoTrabajo} año(s) trabajando y tu bono es: ${bono}`);