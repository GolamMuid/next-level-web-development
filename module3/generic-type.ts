// General Type

const nRoll: Array<number> = [1, 2, 3];
const nNames: Array<string> = ["John", "Doe"];
const nAns: Array<boolean> = [true, false];
const nArrayOfObjects: Array<{ name: string; roll: number }> = [
  {
    name: "Messi",
    roll: 10,
  },
  {
    name: "Benzema",
    roll: 9,
  },
];

// Generic Type

type GenericArray<T> = Array<T>; // * T is a parameter, T stands for Type

const gRoll: GenericArray<number> = [1, 2, 3];
const gNames: GenericArray<string> = ["John", "Doe"];
const gAns: GenericArray<boolean> = [true, false];
const gArrayOfObjects: GenericArray<{ name: string; roll: number }> = [
  {
    name: "Messi",
    roll: 10,
  },
  {
    name: "Benzema",
    roll: 9,
  },
];

// ? Type can be sent as an argument in Generic

type NameAndJersey = { name: string; jersey: number };

const gPlayers: GenericArray<NameAndJersey> = [
  {
    name: "Messi",
    jersey: 10,
  },
  {
    name: "Benzema",
    jersey: 9,
  },
];

// Generics for tuples is also available

type GenericTuple<X, Y> = [X, Y];

const ninja: GenericTuple<string, string> = ["Naruto", "Uzumaki"];

const ninjaInfo: GenericTuple<{ name: string; dojutsu: boolean }, number> = [
  {
    name: "Naruto",
    dojutsu: false,
  },
  17,
];

// ? Again Type or interface of an object can be declared and sent in GenericTuple

type ninjaDetail = { name: string; dojutsu: boolean };

const ninjaInfo2: GenericTuple<ninjaDetail, number> = [
  {
    name: "Sasuke",
    dojutsu: true,
  },
  14,
];
