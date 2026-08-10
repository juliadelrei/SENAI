const btn = document.getElementById('button');
const h2 = document.getElementById('h2');
const analise = document.getElementById('#analise');


btn.addEventListener('click', function() {
    let primeiraDiv = document.querySelector('div');
    primeiraDiv = h2.textContent
    analise.appendChild(primeiraDiv);
});

let segundaDiv = document.querySelector('div');
segundaDiv = h2.innerHTML
analise.appendChild(segundaDiv);

let terceiraDiv = document.querySelector('div');
terceiraDiv = h2.style.color
analise.appendChild(terceiraDiv);
