// Definimos la variable de entrada con un valor de ejemplo
const tipo = prompt("Ingresa un tipo (A, B, C o D):");

// Evaluación usando escalera else if
if (tipo === "A" || tipo == "a") {
  console.log("Seleccionaste el tipo A" || console.log("Seleccionaste el tipo a"));
} else if (tipo === "B" || tipo =="b") {
  console.log("Seleccionaste el tipo B");
} else if (tipo === "C" || tipo =="c") {
  console.log("Seleccionaste el tipo C");
} else if (tipo === "D" || tipo =="d") {
  console.log("Seleccionaste el tipo D");
} else {
  console.log("Selección incorrecta");
}

//Reescribir el codigo para que funcione con minusculas