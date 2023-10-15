const notesContainer = document.querySelector('.notes-container')
const btn = document.querySelector('.btn')
const notes = document.querySelectorAll('.input-box')

btn.addEventListener('click', ()=>{
    const note = `<p class="input-box" contenteditable="true"><img src="images/delete.png"></p>`
    notesContainer.innerHTML += note
})
notesContainer.addEventListener('click', e=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }
})

