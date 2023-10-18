const openPopup = document.querySelector('.btn'),
closePopup = document.querySelector('.popup button'),
popup = document.querySelector('.popup')

openPopup.addEventListener('click',()=>{
    popup.classList.add('show-popup')
})
closePopup.addEventListener('click', ()=>{
    popup.classList.remove('show-popup')
})