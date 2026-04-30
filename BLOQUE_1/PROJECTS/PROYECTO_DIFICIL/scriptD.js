/* Generador de tabla de verdad 
¿Qué vas a construir?
Un programa que imprime la tabla de verdad completa para AND, OR, NOT y XOR para todas las combinaciones posibles de dos valores booleanos.
Lo que necesitas saber antes de arrancar
Ya conoces &&, ||, !. El único nuevo es XOR:

XOR es verdadero cuando los dos valores son diferentes entre sí.

/ XOR no existe como operador en JS — lo construyes así:
let xor = (a || b) && !(a && b);

/ a=true,  b=false → true  (son diferentes)
/ a=true,  b=true  → false (son iguales)
/ a=false, b=false → false (son iguales)

/ Un for para A, otro para B
/ En cada vuelta A y B toman true o false
const valores = [true, false];

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        let a = valores[i]; // true o false
        let b = valores[j]; // true o false
        / acá calculas AND, OR, NOT, XOR y los imprimes
    }
}

=== TABLA DE VERDAD ===
A        B        AND      OR       NOT A    XOR
------------------------------------------------------------
true     true     true     true     false    false
true     false    false    true     false    true
false    true     false    true     true     true
false    false    false    false    true     false
*/
const valores = [true, false];

console.log("=== TABLA DE VERDAD ===");
console.log("A        B        AND      OR       NOT A    XOR");
console.log("------------------------------------------------------------");
for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        let a = valores[i]; // true o false
        let b = valores[j]; // true o false
        let and = a && b;
        let or = a || b;
        let notA = !a;
        let xor = (a || b) && !(a && b);
        console.log(`${a}     ${b}     ${and}     ${or}     ${notA}     ${xor}`);
    }
}