let tasbeehCount = 0;

function incrementTasbeeh() {
    tasbeehCount++;
    document.getElementById('tasbeehDisplay').innerText = tasbeehCount;
}

function resetTasbeeh() {
    tasbeehCount = 0;
    document.getElementById('tasbeehDisplay').innerText = tasbeehCount;
}