let tiempoInicial = 0;
let tiempoRestante = 0;
let intervalo;
let corriendo = false;

function iniciarTemporizador() {
  let inputTiempo = document.getElementById('inputTiempo').value;
  tiempoInicial = parseInt(inputTiempo) || 0;
  tiempoRestante = tiempoInicial;

  if (!corriendo && tiempoRestante > 0) {
    corriendo = true;
    intervalo = setInterval(actualizarTemporizador, 1000);
  }
}

function pausarTemporizador() {
  corriendo = false;
  clearInterval(intervalo);
}

function reiniciarTemporizador() {
  corriendo = false;
  clearInterval(intervalo);
  tiempoRestante = tiempoInicial;
  actualizarTemporizador();
}

function actualizarTemporizador() {
  if (tiempoRestante > 0) {
    let minutos = Math.floor(tiempoRestante / 60);
    let segundos = tiempoRestante % 60;

    let displayTiempo = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById('contador').innerHTML = displayTiempo;

    tiempoRestante--;
  } else {
    pausarTemporizador();
  }
}

document.getElementById('iniciarBtn').addEventListener('click', iniciarTemporizador);
document.getElementById('pausarBtn').addEventListener('click', pausarTemporizador);
document.getElementById('resetBtn').addEventListener('click', reiniciarTemporizador);
