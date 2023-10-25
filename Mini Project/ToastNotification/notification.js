const buttons = document.querySelector('.buttons')
const toastBox = document.querySelector('.toastBox')

buttons.addEventListener('click',(e)=>{
    let toast = document.createElement('div')
    toast.classList.add('toast')

    if(e.target.classList.contains('success')){
        toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Submitted Successfully'
    }else if(e.target.classList.contains('error')){
        toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Error! Try Again'
        toast.classList.add('toastError')
        //to add color in the icon
        const icon = toast.querySelector('i');
        icon.style.color='red'
    }else{
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input! Check Again'
        toast.classList.add('toastInvalid')

        //to add color in icon
        const icon = toast.querySelector('i');
        icon.style.color='orange'
    }

    toastBox.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },5000)
})