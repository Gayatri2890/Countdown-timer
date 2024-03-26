let timerInterval;
let timerRunning = false;
let totalTime = 10 * 60; // 10 minutes in seconds

function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    totalTime = 10 * 60; // Reset to 10 minutes
    updateTimerDisplay();
}

function updateTimer() {
    totalTime--;
    if (totalTime < 0) {
        stopTimer();
        alert("Time's up!");
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;
    document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
