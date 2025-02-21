// /***********************************************************************
//     Lista de Exercícios – Lógica de Programação em JavaScript (Console)
//  ***********************************************************************

// 1. Par ou Ímpar?
// Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.

// 📌 Dica: Use o operador % para verificar o resto da divisão.
// ------------------------------------------------------------------------

// 2. Tabuada
// Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.

// 📌 Exemplo (se o número for 3):
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ------------------------------------------------------------------------

// 3. Fatorial de um Número
// Solicite um número ao usuário e exiba no console o seu fatorial.

// 📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
// ------------------------------------------------------------------------

// 4. Soma dos Números de um Array
// Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.

// 📌 Exemplo:
// let numeros = [10, 20, 30, 40];
// // Saída: Soma = 100
// ------------------------------------------------------------------------

// 5. Ordenação de Números
// Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.

// 📌 Exemplo:
// Entrada: 8, 3, 5, 1, 9
// Saída: 1, 3, 5, 8, 9
// ------------------------------------------------------------------------

// 1.
console.log(
  "--------------------------------------------------------------------"
);
function parouimpar(num) {
  if (num % 2 == 0) {
    return console.log(num, "é par");
  } else {
    return console.log(num, "é ímpar");
  }
}
console.log(parouimpar(10));
// 2.
console.log(
  "--------------------------------------------------------------------"
);
var tabuada = 5;
console.log(tabuada, "x 1 =", tabuada * 1);
console.log(tabuada, "x 2 =", tabuada * 2);
console.log(tabuada, "x 3 =", tabuada * 3);
console.log(tabuada, "x 4 =", tabuada * 4);
console.log(tabuada, "x 5 =", tabuada * 5);
console.log(tabuada, "x 6 =", tabuada * 6);
console.log(tabuada, "x 7 =", tabuada * 7);
console.log(tabuada, "x 8 =", tabuada * 8);
console.log(tabuada, "x 9 =", tabuada * 9);
console.log(tabuada, "x 10 =", tabuada * 10);
console.log(
  "--------------------------------------------------------------------"
);
// 3.
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2);
console.log(
  "--------------------------------------------------------------------"
);
// 4.
let numeros = [1, 2, 3, 4];
var soma = numeros[1] + numeros[2] + numeros[3] + [4];
console.log(soma);
console.log(
  "--------------------------------------------------------------------"
);
// 5.
var entrada = [8, 3, 5, 1, 9];
console.table(entrada);

entrada.sort();
console.table(entrada);
console.log(
  "--------------------------------------------------------------------"
);
/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
estourando o cartão - versão while
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. exiba os dados e o saldo da conta; 
7. Efetue e exiba 5 movimentações na conta; 
8. exiba novamente os dados e o saldo da conta;
*/
console.log(
  "--------------------------------------------------------------------"
);
// var nome = "Ismael";
// var tentativa = "";

// while (tentativa !== nome)
//   tentativa = prompt("Digite seu nome!")
//-----------------------------------------------------------------------
var nome = prompt("Informe seu nome!"); // 1.
var banco = prompt("Informe seu banco!");// 2.
var agencia = prompt("Informe sua agência!");// 3.
var conta = prompt("Informe sua conta!");// 4.
var saldo = prompt("Solicite o saldo da conta!");// 5.
console.log(`Olá ${nome}! Seu banco: ${banco} | Agência: ${agencia} | Conta ${conta} | Com o saldo de R$${saldo}`)// 6.
var saldo = 500;
var contador = 0;
while(contador <= 5){
  let gasto = Math.random()*100;
  saldo -= gasto
  contador++;
}
console.log(saldo)
console.log(`Olá ${nome}! Seu banco: ${banco} | Agência: ${agencia} | Conta ${conta} | Com o saldo de R$${saldo}`)// 8.
