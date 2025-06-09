function rollDice(numFaces) {
  // Math.random() genera un número entre 0 (incluido) y 1 (excluido)
  // Multiplicamos por numFaces, sumamos 1 y usamos Math.floor para obtener un entero entre 1 y numFaces
  return Math.floor(Math.random() * numFaces) + 1;
}

// Ejemplos de uso:
console.log(rollDice(6));  // Simula un dado de 6 caras (valores posibles: 1-6)
console.log(rollDice(20)); // Simula un dado de 20 caras (valores posibles: 1-20)
console.log(rollDice(4));  // Simula un dado de 4 caras (valores posibles: 1-4)

