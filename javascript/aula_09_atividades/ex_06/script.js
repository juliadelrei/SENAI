const btn = document.getElementById('btn-alterar');
const titulo = document.getElementById('titulo-principal');


btn.addEventListener('click', function() {
    titulo.textContent = 'Título Modificado com Sucesso!';
});

