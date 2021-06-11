let atividades = document.getElementsByClassName('atividade')
let aviso = document.getElementById('aviso')

function pedirSenha() {
	senha = window.prompt('Digite a senha para continuar')
	while (senha != 'ab4cFbWcebsiyGKlm') {
		window.alert('Senha incorreta! Tente novamente.')
		senha = window.prompt('Digite a senha de confirmação')
	}
	window.alert('Senha correta! Seja bem-vindo(a)!')
}

function atividadeClicada(atividade) {
	let filhos = atividade.children
	if (filhos[1].style.display == 'none') {
		filhos[1].style.display = 'block'
		atividade.classList.add('conteudo-aberto')
	} else {
		filhos[1].style.display = 'none'
		atividade.classList.remove('conteudo-aberto')
	}
}

function esconderAviso() {
	aviso.style.display = 'none'
}
