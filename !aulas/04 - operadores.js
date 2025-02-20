//precedência de operadores
var x = 22;
var y = 5;
console.log("x =",x,"| y =",y);
var resultado = x + y - 3;
console.log(resultado);

var resultado = x + y * 3;
console.log(resultado);


var resultado = (x + y) * 3;
console.log(resultado);

var resultado = (x + y) / 3;
console.log(resultado);

var resultado = (x / 2 + 3*y + (x - 10)) /2;
console.log(resultado);

console.log("---------------------------------------------------------------------------");
const pi = 3.14159265359;
var raio = 5;
console.log("Comprimeiro de uma circunferencia de raio =",raio, "cm:", 2*pi*raio);
console.log("Tentando alterar o valor de pi, vai obter uma mensagem de erro!");
//pi 3.14 //a linha, foi comentada pois se estiver no codigo, ela aprenseta erros.
console.log("--------------------------------------------------------------------------");



//operadores relacionais.
var x = 22;
var y = 5;
console.log("---------------------------------------------------------------------------");
console.log("x =",x,"| y =",y);
console.log("x é igual a y?",x == y);
console.log("x é diferente de y?", x != y);
console.log("x é maior que y?", x > y);
console.log("x é menor que y?", x < y);
console.log("x maior ou igual a y?", x >= y);
console.log("x menor ou igual a y?", x <= y);
