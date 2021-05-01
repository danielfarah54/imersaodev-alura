function converteValor(){
	var campoDolar = document.querySelector('#valor')
	var dolar = parseFloat(campoDolar.value)
	mostrarValorReal(dolar)
	campoDolar.value = ""
}

function mostrarValorReal(dolar){
	var valorReal = document.querySelector('#valorReal')
	if (Number.isNaN(dolar)){
		var elementoReal = "<div id='realConvertido'>Valor inválido</div>"
	} else{
		var real = (dolar * 5.64).toFixed(2)
	var elementoReal = "<div id='realConvertido'> R$ " + real + "</div>"
	}
	valorReal.innerHTML = elementoReal
}