const calculator = document.querySelector('form')
const displayField = document.querySelector('.displayField')

calculator.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')){
        if(!e.target.classList.contains('special')){
            displayField.value += e.target.value
        }
        if(e.target.value == 'AC'){
            displayField.value = ''
        }
        if(e.target.value == 'C'){
            let cl= displayField.value.slice(0, -1)
            displayField.value = cl
        }
        if(e.target.classList.contains('equal')){
            displayField.value = eval(displayField.value)
        }
    }
})