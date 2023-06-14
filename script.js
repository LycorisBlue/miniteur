var timerInterval;
var durationInput = document.getElementById("duration-input");
var timerDisplay = document.getElementById("timer");
var progressBarFill = document.getElementById("progress-bar-fill");

function startTimer() {
    var duration = parseInt(durationInput.value, 10);
    if (isNaN(duration) || duration <= 0) {
        alert("Veuillez saisir une durée valide en secondes.");
        return;
    }

    clearInterval(timerInterval);
    timerDisplay.textContent = formatTime(duration);
    progressBarFill.style.width = "0%";

    var start = Date.now();
    var end = start + (duration * 1000);

    timerInterval = setInterval(function() {
        var timeRemaining = Math.max(0, end - Date.now());
        var progress = ((duration - (timeRemaining / 1000)) / duration) * 100;

        timerDisplay.textContent = formatTime(Math.ceil(timeRemaining / 1000));
        progressBarFill.style.width = progress + "%";

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Terminé...!";
        }
    }, 100);
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return padZero(minutes) + ":" + padZero(seconds);
}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}
