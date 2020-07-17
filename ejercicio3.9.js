
let poliza = prompt ("Ingrese el tipo de plan: a o b");
let bebedor = prompt ("¿Es bebedor?, déjelo en blanco si Ud. no bebe");
let lentes = prompt ("¿Usa lentes?, déjelo en blanco si Ud. no usa lentes");
let defCardiaca = prompt ("¿Sufre de hipertension?, déjelo en blanco si Ud. no padece problemas cardiacos");
let diabetes = prompt ("¿Sufre de diabetes?, déjelo en blanco si Ud. no padece diabetes");
let edad = +prompt ("Ingrese su edad");
let costoPoliza = 0;

//condicionales
if (poliza === "a" && poliza !== "b") {
    costoPoliza = costoPoliza + 1200;
}
if (bebedor && poliza !== "b") {
    costoPoliza = costoPoliza + 0.1*1200;
}
if ( lentes && poliza !== "b") {
    costoPoliza = costoPoliza + 0.05*1200;
}
if ((defCardiaca || diabetes) && poliza !== "b") {
    costoPoliza = costoPoliza + 0.05*1200;
}
if (edad > 40 && poliza !== "b") {
    costoPoliza = costoPoliza + 0.2*costoPoliza;
} else {
    if (edad <= 40 && poliza !== "b") {
    costoPoliza = costoPoliza + 0.1*costoPoliza;
}
}

if (poliza === "b" && poliza !== "a") {
    costoPoliza = costoPoliza + 950;
}
if (bebedor && poliza !== "a") {
    costoPoliza = costoPoliza + 0.1*950;
}
if ( lentes && poliza !== "a") {
    costoPoliza = costoPoliza + 0.05*950;
}
if ((defCardiaca || diabetes) && poliza !== "a") {
    costoPoliza = costoPoliza + 0.05*950;
}
if (edad > 40 && poliza !== "a") {
    costoPoliza = costoPoliza + 0.2*costoPoliza;
}  else {
    if (edad <= 40 && poliza !== "a") {
    costoPoliza = costoPoliza + 0.1*costoPoliza;
}
}

console.log (`la poliza tipo ${poliza} a pagar es: ${costoPoliza}`);