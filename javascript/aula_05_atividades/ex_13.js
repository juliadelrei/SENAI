let status = "entregue"
switch(status){
    case "pendente":
        console.log("Pagamento não confirmado");
    break
    case "enviado":
        console.log("A caminho");
    break
    case "entregue":
        console.log("finalizado");
    break
    default:
        console.log("error");
    break
}