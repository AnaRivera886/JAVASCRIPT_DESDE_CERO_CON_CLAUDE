/*¿Qué vas a construir?
Un programa que:

Genera un número secreto aleatorio entre 1 y 100
Le da al usuario 7 intentos para adivinarlo
Después de cada intento le dice si el número secreto es mayor o menor
Si adivina, felicita y termina el ciclo
Si se acaban los intentos, revela el número secreto

let secreto = Math.floor(Math.random() * 100) + 1;
// Math.random() * 100 → entre 0 y 99.99...
// Math.floor(...)     → entre 0 y 99
// + 1                 → entre 1 y 100

*/

let secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 7;

for (let i = 0; i < intentos; i++) {
    let adivinanza = parseInt(prompt("Adivina el número secreto entre 1 y 100. Intento " + (i + 1) + " de " + intentos));
    if (adivinanza === secreto) {
        console.log("¡Felicidades! Has adivinado el número secreto.");
        break;
    } else if (adivinanza < secreto) {
        console.log("El número secreto es mayor.");
    }   else { 
        console.log("El número secreto es menor.");
    }
    if (i === intentos - 1) {
        console.log("Lo siento, has agotado tus intentos. El número secreto era: " + secreto);
    } 
}