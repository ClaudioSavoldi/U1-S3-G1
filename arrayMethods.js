console.log("---------------------------------------------------");

const fruits = ["apple", "pear", "kiwi", "ananas", "grape", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//  const fruit = fruits[i];
//   console.log(fruit);
// }
console.log(fruits);

//for each
fruits.forEach((fruit, index) => console.log(`${index + 1}-${fruit}`));

const numbers = [1, 2, 56, 4, 87, 6];
let summed = 0;

numbers.forEach((num) => (summed = summed + num));
console.log("summed from for each", summed);

//map
const fruitsToUpper = fruits.map((fruit) => fruit.toUpperCase() + "!");
console.log("fruit uppercase", fruitsToUpper);

//filter ridurre una collezione sulla base di un test effetuato su ogni elemento dell`array

const onlyFourLetteredFrutis = fruits.filter((fruit) => fruit.length <= 4);
console.log(onlyFourLetteredFrutis);

const numbersUnderTen = numbers.filter((num) => num < 10);
console.log(numbersOverTen);

//reduce, ciclare array e ridurre i valori in uno singolo che viene returnato

numbers.reduce((accumulator, currentElement));

console.log("accumulator", accumulator);
console.log("accumulator", currentElement);
