let cabQuemSou = document.getElementById('cabe-topico-quem-sou')
let contQuemSou = document.getElementById('cont-topico-quem-sou')
let qsVisivel = false

function mostrarQuemSou() {
    contQuemSou.style.display = 'block'
    contQuemSou.style.visibility = 'visible'
    qsVisivel = true
}

function escQuemSou() {
    contQuemSou.style.display = 'none'
    contQuemSou.style.visibility = 'hidden'
    qsVisivel = false
}

cabQuemSou.addEventListener('click', function () {
    if (qsVisivel) {
        escQuemSou()
    } else {
        mostrarQuemSou()
    }
})