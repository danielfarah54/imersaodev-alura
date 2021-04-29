var paulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var rafa = {
  nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

function calculaPontos(jogador) {
  return jogador.vitorias * 3 + jogador.empates
}

var jogadores = [rafa, paulo]
exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for(var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + calculaPontos(jogadores[i]) + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  jogadores[i].vitorias++
  jogadores[(i+1)%2].derrotas++
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  jogadores[i].empates++
  jogadores[(i+1)%2].empates++
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  jogadores[i].derrotas++
  jogadores[(i+1)%2].vitorias++
  exibirJogadoresNaTela(jogadores)
}
