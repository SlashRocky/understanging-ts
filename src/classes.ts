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

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => {
//     console.log(event);
//   });
// }

// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking", ...hobbies];
// activeHobbies.push(...hobbies);

// const person = {
//   firstName: "Max",
//   age: 30,
// };

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

// const add = (...numbers: number[]) => {
//   return numbers.reduce((currentResult, currentValue) => {
//     return currentResult + currentValue;
//   }, 0);
// };

// const addedNumbers = add(3, 10, 2, 3.7);
// console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// console.log(hobbies, hobby1, hobby2);

// const { firstName: userName, age } = person;
// console.log(userName, age, person);

abstract class Department {
  static fiscalYear = 2020;

  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    console.log(Department.fiscalYear);
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT部門・ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`会計部門 - ID: ${this.id}`);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);
// console.log(accounting);

it.addEmployee("Max");
it.addEmployee("Manu");

// accounting.employees[2] = "Anna";
// accounting.name = "NEW NAME";

it.describe();
it.printEmployeeInformation();
console.log(it);

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "通期会計レポート";
accounting.addReport("Something");
console.log(accounting.mostRecentReport);

// accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.printEmployeeInformation();
accounting.describe();
