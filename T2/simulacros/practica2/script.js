// Inicializo el contador
let contador = 0;

// Capturamos los elementos de la interfaz
const contadorElemento = document.getElementById("contador");
const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");
const resetear = document.getElementById("reset");

// Genero los escuchadores de eventos
aumentar.addEventListener("click", ()=>{
  contador++;
  actualizar();
})

disminuir.addEventListener("click", ()=>{
  contador--;
  actualizar();
})

resetear.addEventListener("click", ()=>{
	contador = 0;
  actualizar();
});


// Calculo la función para actualizar el resultado
function actualizar() {
  contadorElemento.textContent = contador;
}
