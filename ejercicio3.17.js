//variables
let dineroDiciembre = +prompt("Ingrese la cantidad de dinero a recibir en diciembre");

//condicionales
if (dineroDiciembre < 10000) {
    console.log (`Puedes comprar el paquete D: un par de zapatos, dos camisas ydos pantalones`);
} else if (dineroDiciembre >= 10000 && dineroDiciembre < 20000) {
    console.log (`Puedes comprar el paquete C: un par de zapatos, dos camisas ydos pantalones`);
} else if (dineroDiciembre >= 20000 && dineroDiciembre < 50000) {
    console.log (`Puedes comprar el paquete B: un par de zapatos, dos camisas ydos pantalones`);
} else {
    console.log (`Puedes comprar el paquete A: un par de zapatos, dos camisas ydos pantalones`);
}