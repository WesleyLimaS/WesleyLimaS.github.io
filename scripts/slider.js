let imgs = []
let slider, imgAtual, maxImg, tmp, time, btnAnt, btnProx, vTempo, vBarra, pos

function preCarregamento() {
    for (let i = 0; i < 2; i++) {
        imgs[i] = new Image()
        imgs[i].src = `media/paginas-quadrinhos/pagina${i+1}.png`
    }
}

function configPos() {
    switch (pos) {
        case 'bottom':
            pos = 'top'
            break;
        case 'top':
            pos = 'bottom'
            break
        default:
            break;
    }
}

function carregarImg(img) {
    slider.style.backgroundPosition = pos
    slider.style.backgroundImage = `url('${imgs[img].src}')`
}

function iniciar() {
    preCarregamento()
    imgAtual = 0
    pos = 'bottom'
    maxImg = imgs.length-1
    time = 0
    indImg = document.getElementById('indica-img')
    btnAnt = document.getElementById('anterior')
    btnProx = document.getElementById('proxima')
    slider = document.getElementById('dvslider')
    vBarra = document.getElementById('dvbarra')

    anima()
    btnAnt.addEventListener('click', imgAnterior)
    btnProx.addEventListener('click', proximaImg)
    carregarImg(imgAtual)
}

function anima() {
    time++
    if (time >= 200) {
        time = 0
        proximaImg()
    }
    vTempo = time/2
    vBarra.style.width = `${vTempo}%`
    window.requestAnimationFrame(anima)
}

function proximaImg() {
    time = 0
    imgAtual++
    if (imgAtual > maxImg) {
        imgAtual = 0
        configPos()
    }
    carregarImg(imgAtual)
}

function imgAnterior() {
    time = 0
    imgAtual--
    if (imgAtual < 0) {
        imgAtual = maxImg
        configPos()
    }
    carregarImg(imgAtual)
}

window.addEventListener('load', iniciar)
