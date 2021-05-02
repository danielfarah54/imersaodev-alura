function mostraUm() {
	calculator.display.value += '1'
}

function mostraDois() {
	calculator.display.value += '2'
}

function mostraTres() {
	calculator.display.value += '3'
}

function mostraQuatro() {
	calculator.display.value += '4'
}

function mostraCinco() {
	calculator.display.value += '5'
}

function mostraSeis() {
	calculator.display.value += '6'
}

function mostraSete() {
	calculator.display.value += '7'
}

function mostraOito() {
	calculator.display.value += '8'
}

function mostraNove() {
	calculator.display.value += '9'
}

function mostraZero() {
	calculator.display.value += '0'
}

function mostraMais() {
	calculator.display.value += '+'
}

function mostraMenos() {
	calculator.display.value += '-'
}

function mostraVezes() {
	calculator.display.value += '*'
}

function mostraDiv() {
	calculator.display.value += '/'
}

function limpaTela() {
	calculator.display.value = ''
}

function calculaTotal() {
	calculator.display.value = eval(calculator.display.value)
}