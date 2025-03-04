// Capturar el elemento con id "sumarBtn" y agregar un evento "click"
document.getElementById("sumarBtn").addEventListener("click", function(){

  // Capturar los valores de los input con id "num1" y "num2"
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // Sumar los valores capturados
  let suma = num1 + num2;

  // Caputurar elemento con id "resultado" y mostrar el resultado
  document.getElementById("resultado").textContent = suma;
});