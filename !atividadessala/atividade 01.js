/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/
let nome = "Rebeca";
let nomebanco = "Santoandre";
let numeroagencia = 20309;
let conta = 39795;
let saldo = 1000;
console.log("A conta", conta, "de", nome, "tem saldo de: R$", saldo, "reais.");
console.log("-----------------------------------------------------------");
console.log(
  "*******************************",
  nomebanco,
  "*******************************"
);
console.log("cliente", nome);
console.log("Agência", numeroagencia, "| conta", conta);
console.log("Seu saldo é de:", saldo);

console.log("    + deposito: R$15,00");
saldo = saldo + 15;
console.log("    + deposito: R$20,00");
saldo = saldo + 20;
console.log("    - deposito: R$12,00");
saldo = saldo + 12;
console.log("    - deposito: R$1,00");
saldo = saldo + 1;
saldo += 50;
console.log("A conta", conta, "de", nome, "tem saldo de: R$", saldo, "reais.");
console.log("-----------------------------------------------------------");
console.log(
  "*******************************",
  nomebanco,
  "*******************************"
);
console.log("cliente", nome);
console.log("Agência", numeroagencia, "| conta", conta);
console.log("Seu saldo é de:", saldo);

