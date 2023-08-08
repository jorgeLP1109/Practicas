const filas = 8;
const columnas = 8;

// Crear el tablero
let tablero = new Array(filas);

for (let i = 0; i < filas; i++) {
  tablero[i] = new Array(columnas).fill(" ");
}

// Colocar bombas de manera aleatoria
const numeroDeBombas = 10;

for (let i = 0; i < numeroDeBombas; i++) {
  const filaAleatoria = Math.floor(Math.random() * filas);
  const columnaAleatoria = Math.floor(Math.random() * columnas);
  tablero[filaAleatoria][columnaAleatoria] = "X";
}

// Mostrar el tablero con bombas ocultas
console.log("Tablero con bombas ocultas:");
for (let fila of tablero) {
  console.log(fila.join(" "));
}

// Juego: verificar si hay una bomba en la coordenada ingresada
while (true) {
  const filaUsuario = parseInt(prompt("Ingresa la fila (0-7)"));
  const columnaUsuario = parseInt(prompt("Ingresa la columna (0-7)"));

  if (filaUsuario < 0 || filaUsuario >= filas || columnaUsuario < 0 || columnaUsuario >= columnas) {
    alert("Coordenadas fuera del rango.");
    continue;
  }

  if (tablero[filaUsuario][columnaUsuario] === "X") {
    alert("¡Boom! Explotó una bomba.");
    break;
  } else {
    alert("No hay bomba en esta posición. ¡Continúa!");
  }
}
