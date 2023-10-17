const passwordBox = document.querySelector('.password')
const button = document.querySelector('button')
const copy = document.querySelector('.copy')

const length = 12
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_'


button.addEventListener('click',()=>{

    let password= ''
    while(length > password.length){
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    passwordBox.value = password
    
})

copy.addEventListener('click', ()=>{
    passwordBox.select()
    document.execCommand('copy')
})