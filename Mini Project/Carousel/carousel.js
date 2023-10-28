const scrollBox = document.querySelector('.gallery'),
backBtn = document.querySelector('.backBtn'),
nextBtn = document.querySelector('.nextBtn')

scrollBox.addEventListener('mousemove', e =>{
    e.preventDefault()
    scrollBox.scrollLeft += e.deltaY
})
// scrollBox.addEventListener('mousewheel', e =>{
//     e.preventDefault()
//     scrollBox.scrollLeft += e.deltaY
//     scrollBox.style.scrollBehavior = 'auto'
// })

nextBtn.addEventListener('click', ()=>{
    scrollBox.style.scrollBehavior = 'smooth'
    scrollBox.scrollLeft += 900
})
backBtn.addEventListener('click', ()=>{
    scrollBox.style.scrollBehavior = 'smooth'
    scrollBox.scrollLeft -= 900
})