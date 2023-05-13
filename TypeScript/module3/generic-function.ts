// Arrow Function

const createArray = <T>(param: T): T[] => {
  return [param];
};

const array1 = createArray<string>("Jax");
const array2 = createArray<number>(35);
const array3 = createArray<{ name: string; age: number }>({
  name: "Tonmoy",
  age: 26,
});

//Regular Function

function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const tuple1 = createArray2<string, number>("Tonmoy", 26);
const tuple2 = createArray2<{ name: string; occupation: string }, number>(
  { name: "Tonmoy", occupation: "Development" },
  26
);

type info = {
  name: string;
  occupation: string;
};

const tuple3 = createArray2<info, number>(
  {
    name: "Steve Jobs",
    occupation: "businessman",
  },
  78
);

const tuple4 = createArray2<string, Array<string>>("Tonmoy", ["gamer"]);

// Spread Operator

const createProfile = <T>(myInfo: T) => {
  const isWorking = true;
  const newProfile = { ...myInfo, isWorking };
  return newProfile;
};

const info = {
  name: "Tonmoy",
  age: 26,
  graduate: true,
};

const myProfile = createProfile(info);
