var divResultado = ''
var html = ''

function chutar() {
    var chute = document.getElementById("chute").value

    if(numeroSecreto == chute) {
        html = '<div id="resultado">Acertou!</div>'
        document.getElementById('btnChutar').disabled = true
    } else if(chute > numeroSecreto) {
        html = '<div id="resultado">O número secreto é menor</div>'
        tentativas -= 1
    } else {
        html = '<div id="resultado">O número secreto é maior</div>'
        tentativas -= 1
    }

    if(tentativas == 0 && chute != numeroSecreto) {
        document.getElementById('btnChutar').disabled = true
        html = '<div id="resultado">Suas tentativas acabaram.<br>O número secreto era <span id="numeroSecreto">'
        html += numeroSecreto + '</span></div>'
    }
    divResultado.innerHTML = html
}

function jogar() {
    document.getElementById('btnReset').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('chute').disabled = false
    resetar()
    divResultado = document.getElementById("resultado")
}

function resetar() {
    document.getElementById('btnChutar').disabled = false
    tentativas = 3
    numeroSecreto = gerarNumeroSecreto()
    divResultado.innerHTML = ''
}

function gerarNumeroSecreto() {
    var numero = parseInt(Math.random() * 10)
    return numero
}
