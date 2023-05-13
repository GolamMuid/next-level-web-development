// You have an interface for Product, containing the product's id, name, price, and category.
//  You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns
// a new array containing only the products that match the given criterion and value.
//  Use a generic type parameter in the function signature to ensure type safety.

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ICriteria {
  id?: number;
  name?: string;
  price?: number;
  category?: string;
}

function filter<X, Y>(param1: X, param2: Y) {
  console.log(param1, param2);
}

const filteredArray = filter<IProduct[], ICriteria>(
  [
    { id: 1, name: "Name", price: 1, category: "cate" },
    { id: 2, name: "Name", price: 2, category: "cate" },
  ],
  { id: 1, name: "Name", price: 1, category: "cate" }
);

console.log(filteredArray);
