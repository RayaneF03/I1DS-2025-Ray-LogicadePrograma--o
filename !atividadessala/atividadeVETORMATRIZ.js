//***************************************************************************************************/
//                                      lista de exercicios
//***************************************************************************************************/
//                         crie um vetor que receberá dados de um usuário.
var dados = [];
console.log("Informe seu nome");
dados.push("Rayane");

console.table(dados);

console.log("Informe seu cpf:");
dados.push("123.456.789-09");

console.table(dados);

//mostre ao usuario os dados e de bom dia!
console.log("Bom dia", dados[0], "seu cpf é:", dados[1]);
