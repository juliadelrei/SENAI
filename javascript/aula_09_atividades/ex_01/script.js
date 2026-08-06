let titulo = document.querySelector(`h1`)
let resultado = document.querySelector (`p`)
let btnMostrar = document.querySelector(`button`)

btnMostrar.addEventListener("click", function(){
    resultado.textContent = titulo.textContent
})