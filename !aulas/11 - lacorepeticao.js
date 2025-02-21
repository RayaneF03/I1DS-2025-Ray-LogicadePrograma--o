// Laço de repetição - FOR

// o professor te colocou de castigo e pediu para você escrever mil vezes a frase "Eu vou prestar atenção às aulas."
// for (let i = 0; i < 1000; i++) {
//   console.log("Eu vou prestar atenção às aulas.");
// }

// // escreva todos os números de 1 a 20
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
console.log(
  "--------------------------------------------------------------------"
);
//mostre no console do sistema os números pares entre o 1 e 20.
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}
//
console.log(
  "--------------------------------------------------------------------"
);
//dado um vetor, calcule e exiba o somatório de seus elementos.
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("somas dos elementos:", soma);
//
console.log(
  "--------------------------------------------------------------------"
);
// dado vetor, calcule e exiba a quantidade de pares e de impares.
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;
for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total dos pares:", pares);
console.log("total dos pares:", impares);
//
//
console.log(
  "--------------------------------------------------------------------"
);
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
console.log("OLiginal:", numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log("Multiplicação por 3:", numeros);
console.log(
  "--------------------------------------------------------------------"
);
// dada uma matriz 2 por 3, mostre ao usuario todos os seus elementos, com as respectivas posições
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    // console.log("matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
    console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}
console.table(matriz);
