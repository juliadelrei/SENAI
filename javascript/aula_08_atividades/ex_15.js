let filmes = [
    {titulo: 'Matrix', ano: 1999, genero: 'Ficção'},
    {titulo: 'Interestelar', ano: 2014, genero: 'Ficção'},
    {titulo: 'Titanic', ano: 1997, genero: 'Romance'},
    {titulo: 'Avatar', ano: 2009, genero: 'Ficção'},
    {titulo: 'Coringa', ano: 2019, genero: 'Drama'}]
let titulos = filmes.map(filme => filme.titulo);
console.log(titulos);
let ficcao = filmes.filter(filme => filme.genero === 'Ficção')
console.log(ficcao);
let filme1997 = filmes.find(filme => filme.ano === 1997);
console.log(filme1997);
let titulos2000 = filmes
  .filter(filme => filme.ano > 2000)
  .map(filme => filme.titulo);
console.log(titulos2000);
