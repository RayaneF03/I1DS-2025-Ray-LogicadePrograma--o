// Operadores Lógicos.
var SouPobre = true;
console.log("--------------------------------------");
console.log("Sou Pobre?", SouPobre);
console.log("Negação de SouPobre:", !SouPobre); //diferente de

var manha = true;
var sono = true;
console.log("--------------------------------------");
console.log("Manhã", manha, "| estou com sono?", sono);

//condicional simples
console.log("Operador AND (E)", manha && sono);
console.log("Operador OR (OU)", manha || sono);

manha = false;

console.log("------------------------------------------------");
console.log("Manhã", manha, "| estou com sono?", sono);
console.log("Operador AND (E)", manha && sono);
console.log("Operador OR (OU)", manha || sono);

sono = false;
console.log("------------------------------------------------");
console.log("Manhã", manha, "| estou com sono?", sono);

console.log("Operador AND (E)", manha && sono);
console.log("Operador OR (OU)", manha || sono);
