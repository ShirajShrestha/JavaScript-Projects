const popup = document.querySelector('.popup'),
icon = document.querySelector('.icon i'),
title = document.querySelector('.title'),
desc = document.querySelector('.desc'),
reconnectBtn = document.querySelector('.reconnect')

let isOnline = true, timer = 10, intervalId

const checkConnection = async() => {
    try{
        // Trying to fetch a random data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        isOnline = response.status >= 200 && response.status <300
    } catch(error){
        isOnline = false
    }
    timer = 10
    clearInterval(intervalId)
    handlePopup(isOnline)
}

const handlePopup = (status) => {
    if(status){
        icon.className = 'uil uil-wifi'
        title.textContent = 'Connection Restored'
        desc.textContent = 'Your device is connected successfully'
        popup.classList.add('online')
        return setTimeout(()=> popup.classList.remove('show'), 2000)
    }

    icon.className = 'uil uil-wifi-slash'
    title.textContent = 'Connection Lost'
    desc.innerHTML = `Your network is unavailable. We will attempt to reconnect you in <b>10</b> sec`
    popup.className = 'popup show'
    
    intervalId = setInterval(()=>{
        timer--
        if(timer === 0) checkConnection()
        popup.querySelector('.desc b').textContent=timer
    },1000)
}

// only if online is true, check the connection status every 3 sec
setInterval(() => isOnline && checkConnection(), 3000)

reconnectBtn.addEventListener('click', checkConnection)