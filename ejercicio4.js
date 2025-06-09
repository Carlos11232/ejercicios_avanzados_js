function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Si no se encuentra el texto
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos de uso:
console.log(findArrayIndex(mainCharacters, "Luke"));       // 0
console.log(findArrayIndex(mainCharacters, "Chewbacca"));  // 3
console.log(findArrayIndex(mainCharacters, "Rey"));        // 4
console.log(findArrayIndex(mainCharacters, "Yoda"));       // -1

