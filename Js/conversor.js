// Definir tasas de cambio en array
const tasasDeCambio = [
  { divisa: "USD", valor: 1 }, //Dolar estadounidenese
  { divisa: "EUR", valor: 0.85 }, //Euro
  { divisa: "JPY", valor: 114.26 }, //Yen japones
  { divisa: "ARS", valor: 99.5 }, //Peso Argentino
];

//funcion saludar usuario
function saludarUsuario() {
  const nombre = prompt("Ingrese su nombre por favor");
  alert("Bienvenido a la Casa de Cambio DIVISAS.INC " + nombre);
}
saludarUsuario();

//Solicitar datos de usuario\
const cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
const monedaOrigen = prompt(
  "Ingrese la moneda de ORIGEN (USD, EUR, JPY o ARS)");
const monedaDestino = prompt("Ingrese la moneda de DESTINO (USD, EUR, JPY o ARS)");

//Funcioin para convertir moneda
function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
  const tasaOrigen = tasasDeCambio[monedaOrigen];
  const tasaDestino = tasasDeCambio[monedaDestino];

  if (tasaOrigen !== null && tasaDestino !== null) {
    const cantidadConvertida = cantidad * (tasaDestino / tasaOrigen);
    return cantidadConvertida;
  } else {
    alert("Moneda no valida.");
  }
}

//Realizar operacion
const resultado = convertirMoneda(cantidad, monedaOrigen, monedaDestino);

//Mostrar resultado por alert
if (resultado) {
  alert(
    "El resultado de la operacion es: " +
      cantidad +
      monedaOrigen +
      "\n equivale a\n " +
      resultado +
      monedaDestino
  );
}else(isNaN(resultado));{
  alert("La operacion no puede realizarse.")
}

//Consultar si desea realizar otra operacion
const nuevaOperacion = prompt(
  "Desea realizar otra operacion? \n 1. Si \n 2. No"
);
if (nuevaOperacion === "1") {
  cantidad = parseFloat(prompt("Ingrese la cantidad a convertir"));

  monedaOrigen = prompt("Ingrese la moneda de ORIGEN (USD, EUR, JPY o ARS)");
  monedaDestino = prompt("Ingrese la moneda de DESTINO (USD, EUR, JPY o ARS)");
  resultado = convertirMoneda(cantidad, monedaOrigen, monedaDestino);

  alert(
    "El resultado de la operacion es: " +
      cantidad +
      monedaOrigen +
      "\n equivale a \n " +
      resultado +
      monedaDestino
  );
} else nuevaOperacion === "2";
{
  alert("Muchas gracias por utilizar nuestro conversor de divisas.");
}
