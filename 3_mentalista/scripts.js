var numeroSecreto = parseInt(Math.random() * 10)
//var numeroSecreto = 3
console.log(numeroSecreto)
var tentativas = 3
var acertou = false

while(tentativas > 0 && !acertou){
  var chute = parseInt(prompt("Digite um número entre 0 e 10:"))

  if(numeroSecreto == chute){
    //console.log("Acertou")
    alert("Acertou")
    //break
    acertou = true
  }else if(chute > numeroSecreto){
    //console.log("O número secreto é menor")
    alert("O número secreto é menor")
    tentativas -= 1
  }else if(chute < numeroSecreto){
    //console.log("O número secreto é maior")
    alert("O número secreto é maior")
    tentativas -= 1
  }
}

if(chute != numeroSecreto){
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}
