const titulo= document.querySelector(".titulo");
const btnAdicionar = document.querySelector(".btnAdicionar");
const lista= document.querySelector(".lista");

btnAdicionar.addEventListener("click", function(){
    const li= document.createElement("li")
    li.textContent= "O farmador de aura, adicionou mais um item"
    lista.appendChild(li)

})