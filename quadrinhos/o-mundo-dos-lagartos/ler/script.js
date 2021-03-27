let pag, btnProx, btnAnte, btnPrim, btnAuto, pags, pagAtual, limitPag

function initVars() {
    pag = document.getElementById('pagina')
    btnProx = document.getElementById('proxima')
    btnPrim = document.getElementById('primeira')
    btnAuto = document.getElementById('set-auto')
    btnAnte = document.getElementById('anterior')
    pagAtual = 0
    limitPag = 2
    pags = []

    btnAuto.disabled = true
    btnAuto.style.opacity = '30%'
    btnProx.addEventListener('click', proxPagina)
    btnAnte.addEventListener('click', pagAnterior)
    btnPrim.addEventListener('click', primPagina)
    obterPags()
}

initVars()

function obterPags() {
    let path = '../../../media/paginas-quadrinhos/'
    for (let i = 0; i <= 2; i++) {
        pags[i] = new Image()
        pags[i].src = `${path}pagina${i}.png`
    }
}

function carregarPag(pagIndex) {
    pag.style.backgroundImage = `url('${pags[pagIndex].src}')`
}

function primPagina() {
    pagAtual = 0
    carregarPag(pagAtual)
}

function proxPagina() {
    pagAtual++
    if (pagAtual > limitPag) {
        pagAtual = 1
    }
    carregarPag(pagAtual)
}

function pagAnterior() {
    pagAtual--
    if (pagAtual <= 0) {
        pagAtual = limitPag
    }
    carregarPag(pagAtual)
}

let cont = document.getElementById('controles')
let time = null
function focarBotoes(focar=true) {
    if (window.innerWidth <= 700) {
        if (focar) {
            if (time != null) {
                clearTimeout(time)
            }
            cont.style.opacity = '100%'
        } else {
            time = setTimeout(function () {
                cont.style.opacity = '20%'
            }, 2000)
        }
    }
    monitoreLargura()
}

function monitoreLargura() {
    let monitor = setInterval(function () {
        if (window.innerWidth > 700) {
            cont.style.opacity = '100%'
            clearInterval(monitor)
        }
    }, 100)
}
// setInterval(proxPagina, 2000)