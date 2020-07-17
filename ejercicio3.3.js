//declaracion de variables
let precioRegalo = +prompt("Ingrese el precio que estás dispuesto a pagar por un regalo");
let presupuesto = 0;
//condicionales
if (precioRegalo <= 10) {
    console.log ("Puedes comprar una tarjeta");
} else if (precioRegalo > 10 && precioRegalo <= 100) {
    console.log ("Puedes comprar una caja de chocolates");
    console.log ("Pero también podrías comprar tarjetas que cuestan como máximo 10 soles la unidad");
} else if (precioRegalo > 100 && precioRegalo <= 250) {
    console.log ("Puedes comprar un ramo de flores");
    console.log ("Pero también podrías comprar cajas de chocolates que cuestan como máximo 100 soles la unidad");
    console.log ("O podrías comprar tarjetas que cuestan como máximo 10 soles la unidad");
} else {
    console.log ("Puedes comprar un bonito anillo");
    console.log ("Pero también podrías comprar un ramo de flores que cuestan como máximo 250 soles la unidad");
    console.log ("Y si lo deseas podrías comprar cajas de chocolates que cuestan como máximo 100 soles la unidad");
    console.log ("O podrías comprar tarjetas que cuestan como máximo 10 soles la unidad");
}
