let num1 = 15;
let num2 = 5;
let operador = "/";

switch (operador) {
  case "+":
    console.log("Resultado:", num1 + num2);
   break;
  case "-":
    console.log("Resultado:", num1 - num2);
    break;
  case "*":
    console.log("Resultado:", num1 * num2);
  break;
  case "/":
    if (num2 !== 0) {
      console.log("Resultado:", num1 / num2);
    } else {
      console.log("não eh possivel dividir por zero");
    }
    break;

  default:
    console.log("error");
}