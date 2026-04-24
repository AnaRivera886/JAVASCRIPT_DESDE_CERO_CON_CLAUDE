// Tienes estas variables:
const edad = 17;
const dinero = 50000;
const tienePermiso = false;

// 1. ¿Puede entrar a un evento? (debe ser mayor de 18 Y tener más de 30000)
//    Guarda el resultado en una variable booleana y muéstrala

// const aceeso = edad >= 18 && dinero > 30000 ? true : false;
// console.log(aceeso);

// // Lo que hiciste
// const acceso = edad >= 18 && dinero > 30000 ? true : false;

// El ternario sobra — la condición YA devuelve un boolean
const acceso = edad >= 18 && dinero > 30000;


// 2. ¿Puede entrar si tiene permiso de sus padres?
//    (menor de 18 con permiso, O mayor de 18 sin importar permiso)
//    Guarda el resultado en una variable booleana y muéstrala

const permiso = (edad < 18 && tienePermiso) || edad >= 18;
console.log(permiso);


// 3. Usa el ternario para imprimir:
//    "Bienvenido" si puede entrar (pregunta 1), "Acceso denegado" si no

const confirma = aceeso === true ? "Bienvenido si puede entrar" : "Acceso denegado";
console.log(confirma);


// 4. ¿Qué imprime esto? Dime por qué antes de correrlo:
console.log(5 === 5); //TRUE
console.log("5" === 5); // FALSE
console.log(null == undefined); // TRUE
console.log(null === undefined); // FALSE

// 5. Tienes esto:
let usuario = null;
let nombre = usuario ?? "Invitado";
console.log(nombre); // ¿Qué imprime?