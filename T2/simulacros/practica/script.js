// Creamos evento de escucha cuando se haga click al botón calculadoraBtn
document.getElementById("calculadoraBtn").addEventListener("click", function() {

  // Capturamos el elemento altura
  let altura = parseFloat(document.getElementById("altura").value);

  // Capturamos el elemento peso
  let peso = parseFloat(document.getElementById("peso").value);

  // Calculadora del IMC
  let imc = peso / ((altura / 100) * (altura / 100)); // Como he solicitado la altura en cm dividimos entre 100 para pasarlo a metros

  document.getElementById("resultado").textContent = imc.toFixed(2); // toFixed redondea a 2 decimales
})