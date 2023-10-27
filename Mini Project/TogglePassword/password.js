const password = document.querySelector('.password'),
icon = document.querySelector('.icon')

icon.addEventListener('click', ()=>{
    if(password.type == 'password'){
        password.type = 'text'
        icon.src = 'eye-open.png'
    }else{
        password.type = 'password'
        icon.src = 'eye-close.png'
    }
})