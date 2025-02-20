//***************************************************************************************************/
//                                      lista de exercicios 04
//***************************************************************************************************/
// 1.
var numeros = [1, 2, 3, 4, 5];
console.table(numeros);
// 2.
console.log(numeros[2]);
// 3.
var copia = numeros.slice();
console.table(numeros);
// 4.
copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[0] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);
// 5.
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
];
console.table(matriz);
// 6.
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
