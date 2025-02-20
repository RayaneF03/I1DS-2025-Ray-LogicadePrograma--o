//***************************************************************************************************/
//                                      lista de exercicios 04
//***************************************************************************************************/
// 1. crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade.
console.log("-------------------1-------------------");
function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("A/O", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("Rayane", "2008");
// 2.crie uma função que receba a quantidade de combustivel de um carro e retorne quantos kms ele pode viajar com esse combustivel Considere que o veiculo faz uma média de 12 kms/L.

const combustivel = (Litros) => {
  return Litros * 12;
};
var car1 = 30;
var car2 = 15;
var car3 = 40;
console.log("Carro 1: ", car1, " ->", combustivel(car1), "kms.");
console.log("Carro 2: ", car2, " ->", combustivel(car2), "kms.");
console.log("Carro 1: ", car3, " ->", combustivel(car3), "kms.");
