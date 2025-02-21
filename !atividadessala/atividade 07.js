//-------------------------------------------------------------------------------
//                            lista de exercicios
//-------------------------------------------------------------------------------
//dada a matriz abaixo, faça um programa em JavaScript
//que exiba ao usuário os elementos da sua diagonal principal.
//principal com o laço FOR.

// |  3   5    8  |
// |  1   9    2  |
// |  7   1    4  |
console.log(
  "--------------------------------------------------------------------"
);
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linha == coluna &&
      console.log(`matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}
console.table(matriz);
console.log(
  "--------------------------------------------------------------------"
);
//dada a matriz abaixo, faça um programa em JavaScript
//que multiplique seus elementos por um valor x e exiba ao usuário

// |  3   5    8  |
// |  1   9    2  |
// |  7   1    4  |

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
var x = 4;
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
  }
}
console.table(matriz);

// faça um loop FOR onde apresente os números impares de 0 a 100;
// não pode ser resolvido, com conta ou resto de divisão

for (let i = 1; i <= 100; i += 2) {
    console.log(i);}
    console.log(
        "--------------------------------------------------------------------"
      );
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
console.log(
    "--------------------------------------------------------------------"
  );