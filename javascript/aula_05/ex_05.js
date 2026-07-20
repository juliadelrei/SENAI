let num1= 10
let num2= 20
let operador = "+"
switch (operador){
    case "+":
        console.log(num1+num2)
    break
    case "-":
        console.log (num1-num2)
    break
    case "*":
        console.log (num1*num2)
    break
    case "/":
        if (num2==0) {
            console.log ("o numero nao tem divisao")
         } else { 
            console.log (num1/num2)}
        break
        default: console.log("error 404")
    }