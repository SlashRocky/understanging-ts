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

let appId = "abc";
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = "Max";
  console.log("Clicked!" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

const map = new Map();
