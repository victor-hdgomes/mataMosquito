//Parte do codigo para recuperar largura e altura da tela do jogo
var altura = 0
var largura = 0
var vidas = 1
var tempo = 60
var nivel = window.location.search
nivel.replace('?', '')

var criarMosquitoTempo = 1500

if (nivel==='facil') {
    criarMosquitoTempo = 2000
} else if(nivel==='normal'){
    criarMosquitoTempo = 1500
} else{
    criarMosquitoTempo = 1250
}

var cronometro = setInterval(function() {
    if (tempo<0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo
        tempo--
    }
}, 1000);

function ajustarTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustarTamanhoJogo()

//parte do codigo onde vamos criar o mosquito
function posicaoAleatoriaMosquito() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }

    }

    var posicaoX = Math.floor(Math.random() * altura) - 90
    var posicaoY = Math.floor(Math.random() * largura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = mosquitoAleatorio() + ' ' + ladoAleatorio()
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    mosquito.onclick = function() {
        this.remove()
    }

    mosquito.style.left = posicaoY + 'px'
    mosquito.style.top = posicaoX + 'px'
    mosquito.style.position = 'absolute'
}
var criarMosquito = setInterval(function() {
    posicaoAleatoriaMosquito()
}, criarMosquitoTempo)


//criar o tamanho aleatorio para o mosquito
function mosquitoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//mudar o lado do mosquito
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}