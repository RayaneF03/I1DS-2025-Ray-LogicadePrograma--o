// var numeros = [1, 2, 3, 4, 5];
// console.log(numeros);      //imprimindo os dados do array.
// console.table(numeros);   //imprimindo os dados em forma de tabela.
// console.log(numeros[1]); //imprimindo o item de indice
// console.log("o vetor tem:", numeros.length, "elementos.");
console.log("-----------------------------------------------------------");
var dinos = [
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.log(dinos); //imprimindo os dados dos dinos
console.table(dinos); //imprimindo em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//adicionando elementos a um valor existente
dinos.push("Brontossauro"); //add um elemento no final do vetor.

console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("Tricerátops"); //add um elemento no inicio do vetor.
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

//obtendo um elemento com base em seu indice  (posição)
console.log("1° posição:", dinos[0]);
console.log("3° posição:", dinos[2]);
console.log("20° posição:", dinos[19]); //quando nao temos o item, apresenta um erro (underfined).
console.log(
  "--------------------------------------------------------------------"
);
dinos[3] = "velociraptor";
console.table(dinos);
console.log(
  "--------------------------------------------------------------------"
);
//removendo elementos do vetor.
var dinos = [
  "Tiranossauro Rex",
  "velociraptor",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.table(dinos);

dinos.pop(); //remove o ultimo elemento do array (vetor)
console.table(dinos);

dinos.shift(); //removendo o primeiro elemento do array
console.table(dinos);

dinos.splice(1, 1); //Remove o elemento de indice 1 (a partir da posição 1, exclui 1 elemento).
console.table(dinos);
//procurando o indice (posição) de elementos.

var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado = "Estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);

elementoProcurado = "Castellossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no indice:", posicao);
console.log(
  "IndexOf = -1 significa que o elemento não foi encontrado no vetor!"
);

var elementoexcluir = "Pterodáctilo";
var posicao = dinos.indexOf(elementoexcluir);
dinos.splice(posicao, 1);
console.table(dinos);

//Criando uma cópia de um array
var copia = dinos.slice();
console.log("Copiando um Vetor!");
console.table(copia);

// criando um array numérico.
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

// imprimindo os elementos das posiçoes impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

// Verificando se o array contém um item.
console.log("contem 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("contem 0:", contem0);

//ordenando os elementos do vetor
numeros.sort();
console.table(numeros);

//invertendo a ordem ou posição dos itens
numeros.reverse();
console.table(numeros);

//alterando o valor de um elemento com base em sua posição
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

// criando arrays hibridos
var hibrido = [10, "Pafúncio", 3.45, "Zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "tibúrcio";
console.table(hibrido);

//-------------------------------------------------------
// Criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];
console.table(matriz);
//-----------------------------------------------------------

// obtendo elemento com base em seus indices
console.log("matriz[1,2] =", matriz[1][2]);
console.log("matriz[1,2] =", matriz[2][0]);

// alterando os valores de elementos com base em seus indices
matriz[1][2] = 20
matriz[2][0] = 30
console.table(matriz);
