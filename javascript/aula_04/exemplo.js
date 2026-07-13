let aluno = {
    nome: "Julia",
    idade: 15,
    matricula:6767
};
for(let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`);
}