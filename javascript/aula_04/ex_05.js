let produtos = [
    {nome:"tv", preco:1999, categoria:"eletro"},
    {nome:"geladeira", preco:3900, categoria:"braca"},
    {nome:"ps5", preco:3500, categoria:"video-game"},
    {nome:"varal", preco:300,categoria:"casa"},
    {nome:"forno", preco:590, categoria:"branca"},
]

let total = 0
produtos.forEach(function(produto){
    console.log(`nome: ${produto.nome}-preco:${produto.preco}`)
    total=total+produto.preco;
})
console.log(`valor total é ${total}`)