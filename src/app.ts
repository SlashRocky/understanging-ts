// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Max";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw {
//     message: message,
//     errorCode: code,
//   };
//   // while(true) {}
// }

// const result = generateError("エラーが発生しました。", 500);
// console.log(result);

// let age: number;
// age = 30;
// const userName = "Maximilian";
// console.log(userName);

// let appId = "abc";
// const button = document.querySelector("button")!;

// function add(n1: number, n2: number) {
//   if (n1 + n2 > 0) {
//     return n1 + n2;
//   }
//   return;
// }

// function clickHandler(message: string) {
//   // let userName = "Max";
//   console.log("Clicked!" + message);
// }

// if (button) {
//   button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
// }

// const map = new Map();

// let result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

// printOutput(add(2));

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

// const copiedPerson = {
//   ...person,
// };

// const copiedPerson = person;

// console.log(add(2, 5));

// console.log(result);

// let age = 30;
// age = 29;

// if (age >= 20) {
//   let isAdult = true;
// }
// console.log(isAdult);

const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = add(3, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age, person);
