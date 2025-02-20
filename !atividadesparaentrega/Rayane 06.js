//***************************************************************************************************/
//                                      lista de exercicios 06
//***************************************************************************************************/
//Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.
// Regras para votação no Brasil:
//Menores de 16 anos: Não podem votar
//entre 16 e 17 ou acima de 70 anos: O voto é facultativo.
//entre 18 e 70 anos: O voto é obrigatório.
console.log(
  "--------------------------------------------------------------------"
);
const podevotar = (idade) => {
  if (idade < 16) {
    return "não pode votar!";
  } else if (idade >= 18 && idade < 70) {
    return "você pode votar!";
  } else {
    return "Seu Voto é Facultativo";
  }
};
var nome = ["Ygona", "Lucas", "Batata", "Fernanda", "Cristinne"];
console.log("olá", nome[0], "você tem 16 anos e", podevotar(16));
console.log("olá", nome[1], "você tem 22 anos e", podevotar(22));
console.log("olá", nome[2], "você tem 70 anos e", podevotar(70));
console.log("olá", nome[3], "você tem 12 anos e", podevotar(12));
console.log("olá", nome[4], "você tem 67 anos e", podevotar(67));
console.log(
    "--------------------------------------------------------------------"
  );

//aqui eu vou fazer uma função onde vai aparecer o nome, idade do eleitor.
//assim que as informações forem colocadas, vai aparecer se a pessoa vai poder votar ou não, de acordo com a sua idade.
//colocarei apenas duas opções para ficar de acordo com o ifline.
// ou seja SE for menos de 16 anos, não pode votar. SE não, e for maior que 16, pode até os 70 anos. Caso não nao pode votar.

