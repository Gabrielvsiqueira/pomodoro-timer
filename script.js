let tempo = 0; 
let intervalo; 
const cronometroDisplay = document.getElementById('cronometro');

document.getElementById('iniciar').addEventListener('click', () => {
    if (!intervalo) {
        intervalo = setInterval(() => {
            tempo++;
            const minutos = Math.floor(tempo / 60);
            const segundos = tempo % 60;
            cronometroDisplay.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        }, 1000);
    }
});

document.getElementById('zerar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null; 
    tempo = 0; 
    cronometroDisplay.textContent = '00:00'; 
});