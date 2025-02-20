//***********************************************
// 1. Criar um array de frutas com os seguintes elementos: Banana, Maça, Pera, Uva, Morango. - feito;
// 2. Adicione Tangena no final. - feito;
// 3. Adicione Goiaba no início. - feito;
// 4. Exiba o conteudo do indice 5. - feito;
// 5. Exclua o elemento uva. - feito;
// 6. Crie uma cópia do array apenas com os elementos com indice 2, 3 e 4.
//------------------------------------------------------------------------------------
console.log("------------------------------inicio---------------------------");

console.log("------------------------------1--------------------------------");

var frutas = ["banana", "Maça", "pera", "uva", "morango"];

console.log(frutas);
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

console.log("-----------------------------2---------------------------------");

frutas.push("tangerina");
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

console.log("----------------------------3---------------------------------");

frutas.unshift("goiaba");
console.table(frutas);
console.log("O vetor frutas tem:", frutas.length, "elementos.");

console.log("----------------------------4----------------------------------");

// var elementoProcurado = "morango";
// var posicao = frutas.indexOf(elementoProcurado);
// console.log(elementoProcurado, "está no indice:", posicao);
console.log(frutas[5]);

console.log("----------------------------5----------------------------------");

// frutas.splice(4, 1);
// console.table(frutas);
var posicao = frutas.indexOf("uva");
frutas.splice(posicao, 1);
console.table(frutas);

console.log("----------------------------6---------------------------------");

var copia = frutas.slice(2, 5);
console.log("Copiando um Vetor!");
console.table(copia);
console.log("----------------------------FIM--------------------------------");
