var altura = 0
var largura = 0
var vidas = 1
var tempo = 100

var criaMosquitoTempo = 2500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal') {
	criaMosquitoTempo = 2500
} else if(nivel === 'dificil') {
	criaMosquitoTempo = 1500
} else if(nivel === 'johnwick'){
	criaMosquitoTempo = 1000
}

function ajustaTamanho() {

	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanho()


var cronometro = setInterval(function() {
	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'

	} else {

	document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


//tamanhos randomicos

function posicaoRandomica() {

	//remover o mosquiro anterior caso existe
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {

			window.location.href = 'gameover.html'

		} else {

			document.getElementById('v' + vidas).src = "coracao_vazio.png"

			vidas++
		}
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}


	document.body.appendChild(mosquito)

}


function tamanhoAleatorio() {

	var classe = Math.floor(Math.random() * 3)

	switch(classe) {

		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2: 
			return 'mosquito3'
	}
}

function ladoAleatorio() {

	var classe  = Math.floor(Math.random() * 2)

	switch(classe) {

		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}