function adicionarFilme() {
  var campoFilme = document.querySelector('#filme')
  var filme = campoFilme.value
  if(validaFilme(filme)) {
    listarFilmesNaTela(filme)
  } else {
    alert("Imagem inválida")
  }
  campoFilme.value = ""
}

function validaFilme(filme) {
  return filme.endsWith(".jpg")
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
