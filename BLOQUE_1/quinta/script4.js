// Tienes un sistema de calificaciones:
const puntaje = 83;
const asistencia = 75; // porcentaje
const entregaTareas = true;

// 1. Usando if/else if/else, determina la nota:
//    90-100 → "A"
//    80-89  → "B"
//    70-79  → "C"
//    60-69  → "D"
//    menos  → "F"

let nota;
if (puntaje >= 90) {
    nota = "A";
} else if (puntaje >= 80) {
    nota = "B";
} else if (puntaje >= 70) {
    nota = "C";
} else if (puntaje >= 60) {
    nota = "D";
} else {
    nota = "F";
}
console.log(`Nota: ${nota}`);

// 2. El estudiante aprueba si:
//    - Su nota es "A", "B" o "C"  
//    - Y su asistencia es >= 70%
//    - Y entregó las tareas
//    Imprime "Aprobado" o "Reprobado"

if ((nota === "A" || nota === "B" || nota === "C") && asistencia >= 70 && entregaTareas) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// 3. Usa switch para imprimir un mensaje según la nota:
//    "A" → "Sobresaliente"
//    "B" → "Muy bien"
//    "C" → "Suficiente"
//    "D" o "F" → "Necesita mejorar"

switch (nota) {
    case "A":
        console.log("Sobresaliente");
        break;
    case "B":
        console.log("Muy bien");
        break;
    case "C":
        console.log("Suficiente");
        break;
    case "D":
    case "F":
        console.log("Necesita mejorar");
        break;
    default:
        console.log("Nota no válida");
}


// 4. ¿Qué imprime esto y por qué?
if (0) {
    console.log("Entró al if");
} else {
    console.log("Entró al else");
}

if ("") {
    console.log("String vacío es truthy");
} else {
    console.log("String vacío es falsy");
}

if ("0") {
    console.log("El string '0' es truthy");
} else {
    console.log("El string '0' es falsy");
}