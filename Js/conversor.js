// Definir tasas de cambio en array
const tasasDeCambio = [
  { divisa: "USD", valor: 1 }, //Dolar estadounidenese 0
  { divisa: "EUR", valor: 0.85 }, //Euro 1
  { divisa: "JPY", valor: 114.26 }, //Yen japones 2
  { divisa: "ARS", valor: 99.5 }, //Peso Argentino
];

//funcion saludar usuario
function saludarUsuario() {
  const nombre = prompt("Ingrese su nombre por favor");
  alert("Bienvenido a la Casa de Cambio DIVISAS.INC " + nombre);
}
saludarUsuario();

//Solicitar datos de usuario\
function datosUsuario() {
  const cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
  const monedaOrigen = prompt(
    "Ingrese la moneda de ORIGEN (USD, EUR, JPY o ARS)");
  const monedaDestino = prompt("Ingrese la moneda de DESTINO (USD, EUR, JPY o ARS)");

  return {
    cantidad: cantidad,
    monedaOrigen: monedaOrigen,
    monedaDestino: monedaDestino,
  };
}

//Funcioin para convertir moneda
function convertirMoneda(datosUsuario) {

  const cantidad = datosUsuario.cantidad;
  const monedaOrigen = datosUsuario.monedaOrigen;
  const monedaDestino = datosUsuario.monedaDestino;

  // validar con while cantidad
  while (isNaN(cantidad)) {
    alert("La cantidad ingresada no es valida.");
    cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
  }

  const tasaOrigen = tasasDeCambio.find((tasa) => {
    return tasa.divisa === monedaOrigen
  });

  const tasaDestino = tasasDeCambio.find((tasa) => {
    return tasa.divisa === monedaDestino
  });

  if (tasaOrigen !== undefined && tasaDestino !== undefined) {

    const cantidadConvertida = cantidad * (tasaDestino.valor / tasaOrigen.valor);
    return {
      cantidad: cantidad,
      monedaOrigen: tasaOrigen.divisa,
      monedaDestino: tasaDestino.divisa,
      cantidadConvertida: cantidadConvertida,
    };

  } else {
    alert("Moneda no valida.");
  } 
}

//Realizar operacion
const resultado = convertirMoneda(datosUsuario());

alert(
  "El resultado de la operacion es: " +
  resultado.cantidad +
  resultado.monedaOrigen +
  "\n equivale a \n " +
  resultado.cantidadConvertida +
  resultado.monedaDestino
);
 

//Consultar si desea realizar otra operacion
const nuevaOperacion = prompt(
  "Desea realizar otra operacion? \n 1. Si \n 2. No"
);
if (nuevaOperacion === "1") {

  const resultado = convertirMoneda(datosUsuario());

  alert(
    "El resultado de la operacion es: " +
    resultado.cantidad +
    resultado.monedaOrigen +
    "\n equivale a \n " +
    resultado.cantidadConvertida +
    resultado.monedaDestino
  );

} else {
  alert("Muchas gracias por utilizar nuestro conversor de divisas.");
}
