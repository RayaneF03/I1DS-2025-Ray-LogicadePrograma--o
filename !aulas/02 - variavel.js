// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");

console.log(
  "----------------------------------------------------------------------------"
);
//javascript trabalha com sistema case sensitive (maiusculas são diferentes de minusculas).
console.log("criando uma variavel teste e tentando acessar como tentE.");
let Teste = "variável teste!";
console.log(Teste);

//regras para nomear identificadores (variaveis)
//podem iniciar com  'A' - 'Z' ou 'a' - z', '_' ou '$'
let Minhavariavel = 10;
let outravariavel = 2.65;
const _minhavariavel = "uma constante qualquer!"
var $minhavariavel = -5;

console.log("----------------------------------");
//variaveis logicas (boolean)
var nome = "Rayane";
var menino = false;
var edancarina = true;
console.log("nome:",nome,"| é Menino?:",menino,"|é dançarina?:",edancarina);
