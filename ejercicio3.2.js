//declaracion de variables
let horasTrabajadas = +prompt("Ingrese las horas trabajadas durante la semana");
let pagoHora = +prompt("Ingrese el paso por hora trabajada");
let sueldoSemanal = 0;
//condicionales
if(horasTrabajadas > 40){
    sueldoSemanal = horasTrabajadas*pagoHora + (horasTrabajadas - 40)*pagoHora*2;
    console.log(`El sueldo semanal del trabajador es ${sueldoSemanal}`);
    console.log(`las horas extras trabajadas son ${horasTrabajadas-40}`);
} else { 
    sueldoSemanal = horasTrabajadas*pagoHora;
    console.log(`El sueldo semanal del trabajador es ${sueldoSemanal}`);
    console.log(`El trabajador no hizo horas extras`);
}