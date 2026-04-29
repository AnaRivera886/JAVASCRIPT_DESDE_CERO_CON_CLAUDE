// 1. Imprime los números del 1 al 20 pero:
//    - Si es divisible por 3 → imprime "Fizz"
//    - Si es divisible por 5 → imprime "Buzz"
//    - Si es divisible por ambos → imprime "FizzBuzz"
//    - Si no → imprime el número
//    (Este es el ejercicio más clásico de programación, existe en todos los lenguajes)

for (let i = 1; i <= 20; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }else if (i % 3 === 0) {
        console.log("Fizz");
        
    }else if (i % 5 === 0) {
        console.log("Buzz");
        
    }else{
        console.log(i);
        
    }
}


// 2. Usando while, encuentra cuántas veces cabe el número 7
//    dentro de 100 sin pasarse (sin usar división ni Math.floor)
//    Solo suma de 7 en 7. Imprime el resultado y el residuo.

let numero = 0;
let contador = 0;

// El bucle se ejecuta sumando 7 en 7 mientras no supere 100
while (numero + 7 <= 100) {
    numero += 7;
    contador++;
}

let residuo = 100 - numero;

console.log("El número 7 cabe " + contador + " veces dentro de 100.");
console.log("El residuo es " + residuo + ".");


// 3. Usando for, calcula el factorial de 6
//    (6! = 6 × 5 × 4 × 3 × 2 × 1 = 720)
//    Tip: empieza con let resultado = 1 y multiplica en cada iteración

let num = 6;
let factorial = 1;

// El bucle multiplica los números del 1 al 6
for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("El factorial de " + num + " es: " + factorial);


// 4. ¿Qué imprime este código? Dime antes de correrlo:
for (let i = 10; i >= 0; i -= 3) {
    console.log(i);
}