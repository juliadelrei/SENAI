function listarNomes (arrag) {
    arrag.forEach(function(item, indice) {
        console.log(`${indice} - ${item}`)
    })
       
}


listarNomes(["Cristiano", "Lucas", "Gabriel"])
