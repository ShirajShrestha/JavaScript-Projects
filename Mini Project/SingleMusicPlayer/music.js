const song = document.querySelector('.song')
const playSong = document.querySelector('.play')
const progress = document.querySelector('.progress')

song.onloadedmetadata = ()=>{
    progress.max = song.duration
    progress.value = song.currentTime
}
playSong.addEventListener('click',()=>{
    if(playSong.classList.contains('fa-pause')){
        song.pause()
        playSong.classList.remove('fa-pause')
        playSong.classList.add('fa-play')
    }else{
        song.play()
        playSong.classList.add('fa-pause')
        playSong.classList.remove('fa-play')
    }
})
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    },500)
}
progress.onchange = ()=>{
    song.play()
    song.currentTime = progress.value
    playSong.classList.add('fa-pause')
    playSong.classList.remove('fa-play')
}