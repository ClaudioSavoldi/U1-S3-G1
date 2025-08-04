//arrow function
const myFunctionArrow = () => {
  console.log("myFunctionArrow");
};
//il vantaggio è che ci permette di creare una definizione di funzione in una sola riga
const myFunctionArrow2 = () => console.log("myFunctionArrow");

const sumArrow = (num1, num2) => num1 + num2;

const sumResult1 = sumArrow(6, 4);
console.log("il risultato è :", sumResult1);

//le arrow function per quanto riguarda i parametri
// parentesi obligatorie sempre a meno che io non abbia solo un parametro

//spred operator sugli oggeti

const pet1 = {
  name: "fuffy",
  type: "dog",
  age: 3,
};

//const pet2=Object.assign({} pet1, {color:yellow})
const pet2 = { ...pet1, color: "yellow" };
pet2.name = "bobby";
console.log(pet1);
console.log(pet2);

const animal = {
  name: "luke",
  age: 8,
  parents: { mum: "mimi", dad: "gigi" },
};

const animal2 = { ...animal };
animal2.name = "terence";
animal2.parents = { ...animal.parents };
animal2.parents.dad = "baba";
console.log(animal);
console.log(animal2);

const animal3 = {
  ...structuredClone(animal),
};

animal3.parents.dad = "bell";
console.log(animal);
console.log(animal3);

//spred operator array
const arrOfName = ["rebecca", "salavatore", "gigio", "lucrezia"];

const arrOfNameCopy = [...arrOfName];
arrOfNameCopy.shift();
console.log(arrOfName);
console.log(arrOfNameCopy);

//rest parameters

const dynamicSum = function (n1, n2, ...rest) {
  let sum = 0;
  sum = n1 + n2;
  for (let i = 0; i < rest.length; i++) {
    sum = sum + rest[i];
  }
  console.log(rest);
  return sum;
};

const sumResult = dynamicSum(2, 3, 4, 5, 76);
console.log(sumResult);

//destructioning

const teacher = {
  name: "stefano",
  surname: "Miceli",
  Teaching: true,
};

// const teacherName=teacher.name

const { name: firstname, surname } = teacher;
console.log(firstname);
console.log(surname);
