let cabecalhos
let conteudos

function inicializar() {
    cabecalhos = document.getElementsByClassName('cabe-topico')
    conteudos = document.getElementsByClassName('cont-topico')

    for (let i = 0; i < cabecalhos.length; i++) {
       cabecalhos[i].addEventListener('click', function () {
            if (conteudoVisivel(conteudos[i])) {
                esconderConteudo(conteudos[i])
            } else {
                mostrarConteudo(conteudos[i])
            }
        }) 
    }
}

inicializar()

function conteudoVisivel(topico) {
    if (topico.style.visibility == 'visible') {
        return true
    } else if (topico.style.visibility == 'hidden') {
        return false
    }
}

function mostrarConteudo(topico) {
    topico.style.display = 'block'
    topico.style.visibility = 'visible'
}

function esconderConteudo(topico) {
    topico.style.display = 'none'
    topico.style.visibility = 'hidden'
}

