// Tipos de variables

// Ya no se usa var, pero se puede redeclarar dentro del mismo bloque.
// let se usa más que var, es más moderna, no se puede redeclarar, pero si reasignar
// const no se puede cambiar su valor una vez asignado.

// Para escribir dentro de un console.log una variable usamos el ${variable}


function calcular() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  const x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) /  (2 * a);
  const x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) /  (2 * a);

  document.getElementById("resultado").textContent = `x1: ${x1} x2: ${x2}`;
}

function limpiar() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";

  document.getElementById("resultado").textContent = "";
}

document.getElementById("btnCalcular").addEventListener("click", calcular);
document.getElementById("btnReset").addEventListener("click", limpiar);
