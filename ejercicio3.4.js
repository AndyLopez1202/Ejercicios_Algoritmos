//variables
let tiempoEstacionamiento = +prompt("Ingrese el tiempo de uso del estacionamiento");
let cobroEstacionamiento = 0;
const c1 = 10; //costo total a cobrar por las primeras 2 horas
const c2 = 12; //costo total a cobrar por las siguientes 3 horas
const c3 = 15; //costo total a cobrar por las siguientes 5 horas

//condicionales
if (tiempoEstacionamiento <= 2) {
    cobroEstacionamiento = cobroEstacionamiento + tiempoEstacionamiento*5;
    console.log (`el costo total de estacionamiento es: ${cobroEstacionamiento} `);
} else if (tiempoEstacionamiento > 2 && tiempoEstacionamiento <= 5) {
    cobroEstacionamiento = cobroEstacionamiento + c1 + (tiempoEstacionamiento-2)*4;
    console.log (`el costo total de estacionamiento es: ${cobroEstacionamiento} `);
} else if (tiempoEstacionamiento > 5 && tiempoEstacionamiento <= 10) {
    cobroEstacionamiento = cobroEstacionamiento + c1 + c2 + (tiempoEstacionamiento-5)*3;
    console.log (`el costo total de estacionamiento es: ${cobroEstacionamiento} `);
} else {
    cobroEstacionamiento = cobroEstacionamiento + c1 + c2 + c3 + (tiempoEstacionamiento-10)*2;
    console.log (`el costo total de estacionamiento es: ${cobroEstacionamiento} `);
}