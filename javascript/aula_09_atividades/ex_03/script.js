
const botao = document.querySelector("#btnAcao")
const paragrafo = document.querySelector("#infoBotao")


botao.addEventListener("click", function() {
  paragrafo.textContent = botao.textContent
});