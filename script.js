function eBonito() {
    let btnPlay = document.getElementById('play')
    let res = document.getElementById('res')
    let n = Math.ceil(Math.random()*2)

    res.innerHTML = ''
    let p = document.createElement('p')
    p.style.color = 'white'
    p.style.maxWidth = '400px'
    p.style.marginLeft = 'auto'
    p.style.marginRight = 'auto'
    if (n == 1) {
        p.innerText = `Você é feio(a)!`
        p.style.backgroundColor = 'rgb(141, 4, 4)'
    } else {
        p.innerText = `Você é bonito(a)!`
        p.style.backgroundColor = 'rgb(22, 77, 20)'
    }
    res.appendChild(p)
}