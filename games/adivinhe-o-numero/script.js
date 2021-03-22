// events listeners e variables declarations
let btn = document.getElementById('btn-enviar'),
palpites = [], 
pal, 
res = document.getElementById('output'),
/* numero aleatorio */ nEsc = Math.round((Math.random()*100)+1),
inpPal = document.getElementById('txtpal')
btn.addEventListener('click', validarPalpite)

// start new game
function novoJogo() {
    palpites = []
    nEsc = Math.round((Math.random()*100)+1)
    inpPal.disabled = false
    inpPal.value = ''
    btn.disabled = false
    res.innerHTML = ''
    res.innerText = 'Os resultados vão aparecer aqui'
}

// function: enviar palpite
function validarPalpite() {
    pal = Number.parseInt(inpPal.value)
    // validações
    if (!pal || pal < 1 || pal > 100) {
        pal = 1
    }
    palpites.push(pal)
    palAnteriores()
    mostrarResul()
}

// mostra os palpites anteriores
function palAnteriores() {
    let p = document.createElement('p')
    p.innerText = 'Palpites anteriores: '
    for (palpite in palpites) {
        p.innerText += ` ${palpites[palpite]}`
    }
    let pRes = document.createElement('p')
    pRes.innerText = `Palpites restantes: ${10-palpites.length}`
    res.innerHTML = ''
    res.appendChild(p) 
    res.appendChild(pRes)
}

// saida do resultado para o usuario
function mostrarResul() {
    let resul = document.createElement('p'), dica = document.createElement('p')
    resul.style.padding = '3px'
    resul.style.color = 'white'
    if (palpites.length == 10 || pal == nEsc) {
        // em ambos a rodada é finalizada
        if (palpites.length == 10) {
            resul.innerText = 'Fim de jogo!'
            resul.style.backgroundColor = 'red' 
        } else {
            resul.innerText = 'Acertou!'
            resul.style.backgroundColor = 'green'
        }
        res.appendChild(resul)
        configFimDeJogo()
        return
    } else {
        resul.innerText = 'Errado!'
        resul.style.backgroundColor = 'red'
        // dica para o usuario
        if (pal > nEsc) {
            dica.innerText = 'Seu palpite foi muito alto!'
        } else {
            dica.innerText = 'Seu palpite foi muito baixo!'
        }
    }
    res.appendChild(resul)
    res.appendChild(dica)
}

function configFimDeJogo() {
    inpPal.disabled = true
    btn.disabled = true
    let nGame = document.createElement('button')
    nGame.innerText = 'Iniciar novo jogo'
    res.appendChild(nGame)
    nGame.addEventListener('click', novoJogo)
}