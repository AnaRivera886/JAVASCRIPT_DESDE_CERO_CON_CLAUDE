// 1. Declara con const: tu nombre, tu país, el año actual
// 2. Declara con let: tu edad, tu puntuación en un juego (empieza en 0)
// 3. Simula que ganaste 3 partidas — suma 100 puntos por partida
//    (sin hardcodear el resultado, usa la variable misma)
// 4. Intenta reasignar una const e intenta intenta ejecutarlo.
//    ¿Qué error aparece en la consola? Cópialo aquí.
// 5. console.log de todo al final

const nombre = "Ana";
const pais = "Colombia";
const año = 2026;

let edad = 18;
let puntuacion = 0;

//Gané tres partidas

// ❌ Lo que hiciste — hardcodeado
puntuacion = 100 + 100 + 100;

// // ✅ Lo que pedía — usar la variable misma
// puntuacion = puntuacion + 100; // partida 1
// puntuacion = puntuacion + 100; // partida 2
// puntuacion = puntuacion + 100; // partida 3

// O más corto con el operador +=
puntuacion += 100; // partida 1
puntuacion += 100; // partida 2
puntuacion += 100; // partida 3


//nombre = "Pepe";

console.log("Hola", nombre, "Tu pais natal es: ", pais, "Actualmete estamos en el año: ", año);
console.log("Tu edad es", edad, "tu puntuacion en el juego es de: ", puntuacion);

