let btnShowMore = document.getElementById('show-more')
let contAdicinal = document.getElementById('dest-cont-addi')
let visible = false

function configMostrar() {
    if (visible){
        contAdicinal.style.visibility = 'hidden'
        contAdicinal.style.display = 'none'
        btnShowMore.innerText = 'Mostrar mais'
        visible = false
    } else{
        contAdicinal.style.visibility = 'visible'
        contAdicinal.style.display = 'block'
        btnShowMore.innerText = 'Mostrar menos'
        visible = true
    }
}

btnShowMore.addEventListener('click', configMostrar)