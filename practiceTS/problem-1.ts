// ? Convert the following JavaScript array into a TypeScript tuple
//  ?   const userInfo = [101, "Ema", "John", true,  , "2023"];

const userInfo = [101, "Ema", "John", true, , "2023"];

const userTuple: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];

console.log(userTuple);
