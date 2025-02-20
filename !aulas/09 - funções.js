// criando uma função que retorna o resultado.
//
console.log("---------------------------------------");

function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());
console.log("---------------------------------------");
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5+3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));
console.log("---------------------------------------");
var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));
console.log("---------------------------------------");
//
// criando uma função que escreve bom dia.
function bomDia(nome) {
  console.log("Olá,", nome, "bom dia pra você!");
}

bomDia("Rayane");
//
// criando uma função que calcula e retorna o desconto em uma venda.
function desconto(valor) {
  return valor * 0.05;
}
//
// console.log("O desconto do produto, no valor de R$100,00 é R$", desconto(100));
var totalpedido = 300;
var totaldesconto = desconto(totalpedido);
var valorfinal = totalpedido - totaldesconto;

console.log("---------------------------------");
console.log("total do pedido: R$", totalpedido);
console.log("---------------------------------");
console.log("total dos descontos: R$", totaldesconto);
console.log("---------------------------------");
console.log("valor liquido: R$", valorfinal);
console.log("---------------------------------");

//criando uma função que apresenta pessoas,com arrow function
const apresentapessoas = (nomePessoa,idade,cidade) => {
    // apresento a voces: "Nome_pessoa", que tem "XX" anos e mora em "Cidade"
     console.log("apresento a voces", nomePessoa, "que tem,",idade, "e mora em",cidade);

}
apresentapessoas("Zuleika", 19, "Brotas");
apresentapessoas("Pafúncio", 21, "Jaú");
apresentapessoas("Claudinha", 24, "Curitiba");
