import { configDotenv } from "dotenv";
function startCountdown(duration) {
    let timer = duration, minutes, seconds;

    const timerPopup = document.getElementById("timer-popup");

    const countdownInterval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerPopup.textContent = `Time Left: ${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            timerPopup.textContent = "Time's up!";
            // Additional actions when time is up can be added here
        }
    }, 1000);
}


window.onload = function() {
    startCountdown(30); //seconds
};












