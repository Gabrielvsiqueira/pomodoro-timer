let countdown;
let isRunning = false; 

function startTimer() {
    const timeInput = document.getElementById('timeInput').value;
    let time = timeInput * 60; 
    clearInterval(countdown);

    if(time <= 0){
        document.getElementById('showMessage').style.display = 'block';
        document.getElementById('showMessage').innerText = 'Digite um valor para funcionar.';
        setTimeout(()=> {
            document.getElementById('showMessage').style.display = 'none';
        }, 4000);
        return;
    }

    isRunning = true; 
    document.getElementById('timeInput').style.display = 'none'; 
    document.getElementById('valueShow').style.display = 'block'; 

    countdown = setInterval(() => {
        if (time <= 0) {
            clearInterval(countdown);
            isRunning = false; 
            document.getElementById('valueShow').innerText = '00:00'; 
            return;
        }

        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timeInput').style.display = 'none';
        document.getElementById('valueShow').style.display = 'block';
        document.getElementById('valueShow').innerText = 
            `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false; 
    document.getElementById('valueShow').innerText = '00:00';
    document.getElementById('valueShow').style.display = 'none';
    document.getElementById('timeInput').style.display = 'block'; 
    document.getElementById('timeInput').value = ''; 
    document.getElementById('showMessage').style.display = 'none'; 
}

document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('stopTimer').addEventListener('click', stopTimer);