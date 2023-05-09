// Suppose you have an array of numbers in TypeScript, and you want to find the sum of
// all the even numbers in the array.
// How would you approach this problem and write code to solve it?

const numberArray: number[] = [1, 2, 3, 4];

// const evenArray: number[] = [];

// numberArray.map((number) => {
//   if (number % 2 === 0) evenArray.push(number);
// });

// const summation = evenArray.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );

const summation = numberArray.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr;
  } else {
    return acc;
  }
}, 0);

console.log(summation);
