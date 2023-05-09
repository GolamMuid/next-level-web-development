//  Suppose you have an array of tuples, where each tuple represents a product and contains
//  the product name, price, and quantity. Write a TypeScript function that calculates the
//  total cost of all the products in the array, using a generic type for the tuple and
//  a type alias for the array.

type MyTuple<T1, T2, T3> = [T1, T2, T3];

const myTuple1: MyTuple<string, number, number> = ["laptop", 600, 5];
const myTuple2: MyTuple<string, number, number> = ["desktop", 400, 2];

type ArrayType = [name: string, price: number, qty: number];

const productArray: ArrayType[] = [myTuple1, myTuple2];

const sum = productArray.reduce(
  (accumulator, current): number => accumulator + current[1],
  0
);

console.log(sum);
