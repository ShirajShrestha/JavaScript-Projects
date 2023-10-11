// API link = https://goqr.me/api/

const qrText = document.querySelector('.qrText')
const qrImage = document.querySelector('.qrImage')
const imgBox = document.querySelector('.imgBox')
const button = document.querySelector('button')

button.addEventListener('click',()=>{
    if(qrText.value){
        qrImage.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value
        imgBox.classList.add('show')
    }else{
        qrText.classList.add('error')
        setTimeout(()=>{
            qrText.classList.remove('error')
        },1000)
    }
})