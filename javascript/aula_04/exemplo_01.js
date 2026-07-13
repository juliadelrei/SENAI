let carros = [
    {marca: "fiat", modelo:"500"},
    {marca: "mercedes", modelo:"c300"},
    {marca: "citroen", modelo:"c4"},
];
carros.forEach(function(carro) {
    console.log(`marca:${carro.marca}, modelo:${carro.modelo}`);
});