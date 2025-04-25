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




