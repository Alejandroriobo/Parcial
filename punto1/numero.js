let myArray = [2, 5, 13, 67, 34, 23, 70, 2, 23];
let maxNumber = myArray[0]; // Suponemos que el primer elemento es el máximo

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > maxNumber) {
    maxNumber = myArray[i]; // Actualizamos el máximo si encontramos un número mayor
  }
}

console.log(maxNumber); // Imprime el número más grande
