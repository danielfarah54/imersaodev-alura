//var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
//var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var resultado
var h2 = document.getElementById("resultado")
//var operacao = prompt("Digite 1 para divisão, 2 para multiplicação, 3 para soma ou 4 para subtração:")

h2.innerHTML = "<h2>" + 2 + " / " + 2 + " = " + 1 + "</h2>"

if(operacao == 1){
  resultado = primeiroValor / segundoValor
  
  h2.innerHTML = "<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>"
}
else if(operacao == 2){
  resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}
else if(operacao == 3){
  resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}
else if(operacao == 4){
  resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}
else
  document.write("<h2>Opção inválida</h2>")
