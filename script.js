let countdown;

function startTimer() {
    const timeInput = document.getElementById('timeInput').value;
    let time = timeInput * 60; 
    clearInterval(countdown);
    if(time <= 0){
        document.getElementById('showMessage').style.display = 'block';
        document.getElementById('showMessage').innerText = 'Digite um valor para funcionar.';
        setTimeout(()=> {
            document.getElementById('showMessage').style.display = 'none';
        },3000)
        return;
    }
    countdown = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timeInput').style.display = 'none';
        document.getElementById('valueShow').style.display = 'block';
        document.getElementById('valueShow').innerText = 
            `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
    }, 1000);
}