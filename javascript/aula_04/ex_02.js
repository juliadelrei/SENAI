let livro = { 
    titulo:"pequeno principe",
    autor:"tom holand",
    ano: 2018,
    pagina:299,
}
livro.editora = "idistribuiçao";
livro.ano = 2022;
delete livro.pagina;
console.log(livro);