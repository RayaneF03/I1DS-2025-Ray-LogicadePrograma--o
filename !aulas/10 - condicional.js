console.log(
  "--------------------------------------------------------------------"
);
// condicional simples com IF
var anoNascimento = 2003;

if (anoNascimento > 2003) {
  console.log("a pessoa nasceu depois de 2003?");
}
if (anoNascimento < 2003) {
  console.log("a pessoa nasceu depois de 2003?");
}

if (anoNascimento == 2003) {
  console.log("a pessoa nasceu em 2003");
}

var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("a pessoa nasceu depois que 2000");
} else {
  console.log("a pessoa nasceu em 2000 ou antes");
}
console.log("--------------------------------------");
const login = "admin";
const senha = "12345";

var loginuser = "admin";
var senhauser = "12345";

if (loginuser == login && senhauser == senha) {
  console.log("Acesso permitido");
} else {
  console.log("acesso negado");
}
//
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("Siga!");
} else if (semaforo == "amarelo") {
  console.log("Atenção!");
} else {
  console.log("Pare!");
}
console.log(
  "--------------------------------------------------------------------"
);
// desvio condicional IF com bloco de comandos
var idade = 18;
if (idade <= 18) {
  console.log("Entrei no if...");
  idade++;
  console.log("Incrementei a idade...");
  console.log("A nova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");
console.log(
  "--------------------------------------------------------------------"
);
// criando variaveis locais com let (só existe dentro do bloco onde froam criadas)
var mes = "agosto";
var dia = 15;
if ((dia = 15 && mes == "agosto")) {
  let mensagem = "Hoje é dia 15 de agosto.";
  console.log(mensagem);
}
console.log("tentando acessar a variável local fora do bloco, vai dar erro!");
//console.log(mensagem);
// criando uma função com desvio condicional IF
const desconto = (valorcompra) => {
  let desconto = 0;
  if (valorcompra >= 1000) {
    desconto = (valorcompra * 12) / 100;
  }

  return desconto;
};
var totalcompra = 950;
console.log(
  "Valor total da compra: R$",
  totalcompra,
  "::: Desconto: R$",
  desconto(totalcompra)
);
totalcompra = 1800;
console.log(
  "Valor total da compra; R$",
  totalcompra,
  "::: Desconto: R$",
  desconto(totalcompra)
);
//
console.log(
  "--------------------------------------------------------------------"
);
//
// condição ? expressão_se_verdadeira : expressão_se_falsa.
var preco = 500;
var resultado = preco <= 100 ? "tá barato!" : "Vish, tá muito caro";
// O operador acima é o mesmo que escrever:
// if(preco <=100){resultado = "tá barato!"}else{resultado = "Vish, tá muito caro"}
console.log("Preço: R$", preco, "-", resultado);
//
console.log(
  "--------------------------------------------------------------------"
);
//If ternario com somente uma expressão.
//condição && expressão.
var logado = true;
logado && console.log("Usuário está logado.");
