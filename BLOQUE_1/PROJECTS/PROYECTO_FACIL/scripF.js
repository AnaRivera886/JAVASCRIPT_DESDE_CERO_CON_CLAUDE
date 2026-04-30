/*¿Qué vas a construir?
Un programa que:

Le pide al usuario su nombre, peso y altura
Calcula el IMC
Le dice la categoría en la que está
Muestra todo con un mensaje final completo

Las categorías:
    IMC: 
    Menos de 18.5 - Bajo peso
    18.5 – 24.9 - Normal
    25 – 29.9 - sobrepeso
    30 o más - Obesidad

    FORMULA:
    IMC = peso / (altura * altura)
*/

let nombre = prompt("¿Cual es su nombre?");
let peso = Number(prompt(`Hola ${nombre}, ¿Cual es su peso?`));
let altura = Number(prompt("Digite su altura"));

let IMC = peso / (altura * altura);
let categoria = ""

if (IMC < 18.5) {
    categoria = "Bajo peso";
}else if (IMC >= 18.5 && IMC <= 24.9) {
    categoria = "Normal"
}else if (IMC >= 25 && IMC < 30) {
    categoria = "Sobrepeso"
}else{
    categoria = "Obesidad"
}

console.log("=== CALCULADORA IMC ===");
console.log(`Nombre: ${nombre}`);
console.log(`Peso: ${peso}Kg`);
console.log(`Altura: ${altura}M`);
console.log(`IMC: ${IMC.toFixed(2)}`);
console.log(`Catergoria: ${categoria}`);
