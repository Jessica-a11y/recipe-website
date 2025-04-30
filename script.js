const dialogOne = document.getElementById('dialog-one')
const openDialogOne = document.getElementById('open-dialog-one')
const closeDialogOne = document.getElementsByClassName('close-dialog-one')

openDialogOne.addEventListener('click', () => {
    dialogOne.showModal()
})

Array.from(closeDialogOne).forEach(button => {
    button.addEventListener('click', () => {
        dialogOne.close()
    })
})

const dialogTwo = document.getElementById('dialog-two')
const openDialogTwo = document.getElementsByClassName('vegans')[0]
const closeDialogTwo = document.getElementsByClassName('close-dialog-two')

openDialogTwo.addEventListener('click', () => {
    dialogTwo.showModal()
})

Array.from(closeDialogTwo).forEach(button => {
    button.addEventListener('click', () => {
        dialogTwo.close()
    })
})


const showRecipe = document.getElementById('show-recipe')
const recipe = document.getElementsByClassName('column-three')[0]
const hideRecipe = document.getElementsByClassName('hide-recipe')

showRecipe.addEventListener('click', () => {
    recipe.style.display = 'block';
})

Array.from(hideRecipe).forEach(button => {
    button.addEventListener('click', () => {
        recipe.style.display = "none"
    })
})