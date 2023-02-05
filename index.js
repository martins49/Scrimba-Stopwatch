console.log("Building a stopWatch")
//Todos:
// start stopwatch
//stop stopwatch
//reset stopwatch
//laps
let timeDisplayEl = document.getElementById("time-display")
let secondsEL = document.getElementById("seconds-el")
let ms = 0
let s = 0
let m = 0

//let intervalid = setInterval(start, 100)
//clearInterval(intervalid)
let intervalid;
console.log(timeDisplayEl.textContent)

function start() {
    intervalid = setInterval(function () {
        ms++
        s = Math.floor(ms / 10) % 60
       
        m = Math.floor(ms / 600)
        timeDisplayEl.textContent = `${m}m: ${s}s: ${ms}`
    }, 100)
    // console.log(ms)
}
const startBtnEl = document.getElementById("start-btn")
startBtnEl.addEventListener("click", start)
const stopBtnEl = document.getElementById("stop-btn")
stopBtnEl.addEventListener("click", function(){
    clearInterval(intervalid)
})
const resetBtnEl = document.getElementById("reset-btn")
resetBtnEl.addEventListener("click", function () {
    ms = 00, s = 00, m = 0
    clearInterval(intervalid)
    timeDisplayEl.textContent = `00: 00: 00`
})