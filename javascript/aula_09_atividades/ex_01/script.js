let titulo= document.querySelector("h1");
let btn= document.querySelector(".btnMostrar");
let resultado= document.querySelector("p");

btn.addEventListener("click", function(){
    resultado.textContent= titulo.textContent;
});