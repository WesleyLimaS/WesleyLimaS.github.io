let cont, pag, btnProx, btnAnte, btnPrim, btnMaisOps, btnUltima, pags, pagAtual, limitPag, dvMaisOps, maisOpsAberto, time, btnIrPag, btnSobre

function initVars() {
    cont = document.getElementById('controles')
    pag = document.getElementById('pagina')
    btnProx = document.getElementById('proxima')
    btnPrim = document.getElementById('primeira')
    btnAnte = document.getElementById('anterior')
    btnMaisOps = document.getElementById('abrir-mais-ops')
    dvMaisOps = document.getElementById('mais-opcoes')
    btnUltima = document.getElementById('ultima')
    btnIrPag = document.getElementById('ir-para')
    btnSobre = document.getElementById('sobre')
    pagAtual = 0
    time = null
    limitPag = 3
    maisOpsAberto = false
    pags = []
    obterPags()
}

function disable(element, disable=true) {
    if (disable) {
        element.disabled = true
        element.style.opacity = '30%'
    } else {
        element.disabled = false
        element.style.opacity = '100%'
    }
}

function preConfig() {
    btnProx.addEventListener('click', proxPagina)
    btnAnte.addEventListener('click', pagAnterior)
    btnPrim.addEventListener('click', primPagina)
    btnUltima.addEventListener('click', ultimaPag)
    btnSobre.addEventListener('click', sobre)
    btnMaisOps.addEventListener('click', function () {
        if (maisOpsAberto) {
            fecharMaisOpcoes()
        } else {
            abrirMaisOpcoes()
        }
    })
    disable(btnIrPag)
    esconderElemento(dvMaisOps)
    carregarPag(0)
}

initVars()
preConfig()
monitoreLargura()

function obterPags() {
    let path = '../../../media/paginas-quadrinhos/'
    for (let i = 0; i <= limitPag; i++) {
        pags[i] = new Image()
        pags[i].src = `${path}pagina${i}.png`
    }
}

function carregarPag(pagIndex) {
    pag.style.backgroundImage = `url('${pags[pagIndex].src}')`
    if (pagIndex == 0) {
        disable(btnPrim)
    } else {
        disable(btnPrim, false)
    }
    if (pagIndex == limitPag) {
        disable(btnUltima)
    } else {
        disable(btnUltima, false)
    }
}

function sobre() {
    window.location = '../index.html'
}

function ultimaPag() {
    pagAtual = limitPag
    carregarPag(pagAtual)
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

function focarBotoes(focar=true) {
    if (window.innerWidth < 700) {
        if (focar) {
            if (time != null) {
                clearTimeout(time)
            }
            cont.style.opacity = '100%'
        } else {
            time = setTimeout(function () {
                cont.style.opacity = '30%'
            }, 3000)
        }
    }
}

function esconderElemento(element) {
    element.style.display = 'none'
    element.style.visibility = 'hidden'
}

function mostrarElemento(element, display='block') {
    element.style.display = 'block'
    element.style.visibility = 'visible'
}

function monitoreLargura() {
    let monitor = setInterval(function () {
        if (window.innerWidth > 700) {
            // IN PC
            cont.style.opacity = '100%'
            esconderElemento(btnMaisOps)
            mostrarElemento(cont)
            mostrarElemento(dvMaisOps)
        } else {
            // IN MOBILE
            if (!maisOpsAberto) {
                cont.style.display = 'flex'
                esconderElemento(dvMaisOps)
            } else {
                mostrarElemento(cont)
            }
            mostrarElemento(btnMaisOps, 'flex')
        }
    }, 100)
}

function abrirMaisOpcoes() {
    mostrarElemento(cont) // mostra os compentes de forma vertical
    mostrarElemento(dvMaisOps) // mostra as opçoes adicionais
    btnMaisOps.style.backgroundColor = 'rgba(0, 0, 0, 0.695)'
    btnMaisOps.innerText = 'Menos opções'
    maisOpsAberto = true
}

function fecharMaisOpcoes() {
    esconderElemento(dvMaisOps)
    btnMaisOps.style.backgroundColor = 'transparent'
    btnMaisOps.innerText = 'Mais opções'
    maisOpsAberto = false
}