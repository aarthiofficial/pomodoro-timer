let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const alertSound = document.getElementById('alert-sound');

function updateDisplay() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    let display =
        (hours > 0 ? String(hours).padStart(2, '0') + ':' : '') +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    timerDisplay.textContent = display;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alertSound.play();
            isRunning = false;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateDisplay();
}

function setMode(seconds) {
    stopTimer();
    timeLeft = seconds;
    updateDisplay();
}

updateDisplay();
