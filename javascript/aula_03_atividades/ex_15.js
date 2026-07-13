let compras = [];
compras.push("arroz");
compras.push("feijão");
compras.push("macarrão");
compras.push("leite");
compras.push("pão");
console.log("Lista de compras: ");
compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item)});
console.log("Arroz está na lista?", compras.includes("arroz"))  // true
let removido = compras.pop();
console.log("Item removido: " + removido);
console.log("Lista atualizada:");
compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item); 
});
console.log("O tamanho da lista de compras é: " + compras.length);  