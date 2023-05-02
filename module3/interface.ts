// Interface for Objects (RECOMMENDED)

interface IUser {
  name: string;
  id: number;
}

const user: IUser = {
  name: "Tonmoy",
  id: 16301070,
};

console.log(user);

// Interface for functions (not recommended, use type alias)

interface IAddNumbers {
  (num1: number, num2: number): number;
}

const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

console.log(addNumbers(10, 15));

// Interface for Arrays (not recommended, use type alias)

interface IArray {
  [index: number]: string;
}

const array: IArray = ["a", "b", "c"];

console.log(array);
