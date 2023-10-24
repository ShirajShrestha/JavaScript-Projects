let [seconds, minutes, hours] = [0, 0, 0]
const displayTime = document.querySelector('.displayTime')
const startTime = document.querySelector('.start')
const stopTime = document.querySelector('.stop')
const resetTime = document.querySelector('.reset')

let timer = null

const stopwatch = ()=>{
    seconds++
    if(seconds == 60){
        seconds = 0
        minutes++
        if(minutes == 60){
            minutes = 0
            hours++
        }
    }
    let h = hours < 10 ? '0'+ hours : hours
    let m = minutes < 10 ? '0'+ minutes : minutes
    let s = seconds < 10 ? '0'+ seconds : seconds
    displayTime.innerHTML = `${h}:${m}:${s}`
}

startTime.addEventListener('click',()=>{
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000)
})
stopTime.addEventListener('click',()=>{
    clearInterval(timer)
})
resetTime.addEventListener('click',()=>{
    [seconds, minutes, hours] = [0, 0, 0]
    clearInterval(timer)
    displayTime.innerHTML = "00:00:00"
})