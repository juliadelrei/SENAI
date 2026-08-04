let produtos=[
    {id:1, nome: "celular", preco: 2000, categoria: "eletrônicos"},
    {id:2, nome: "computador", preco: 3000, categoria: "eletrônicos"},
    {id:3, nome: "geladeira", preco: 4000, categoria: "eletrodomésticos"},          
    {id:4, nome: "fone", preco: 1500, categoria: "eletrônicos"},
    {id:5, nome: "cama", preco: 1000, categoria: "moveis"}
]
let nomes = produtos.map(function(item){
    return item.nome
})
console.log(nomes)
let eletrodomesticos = produtos.filter(function(item){
    return item.categoria === "eletrodomésticos"
})
console.log(eletrodomesticos)
let encontrado = produtos.find(function(item){
    return item.id === 3
})
console.log(encontrado)
let nomeMaiores= produtos.filter(function(item){
    return item.preco > 500 
}).map(function(item){
    return item.nome
})
console.log(nomeMaiores)