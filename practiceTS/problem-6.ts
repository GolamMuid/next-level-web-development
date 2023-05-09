// Create an interface called Person that includes properties for name (string),
// age (number), and email (string). Then create an array of Person objects and
// write a function that takes the array and a string email as parameters,
// and returns the Person object that matches the email or null if no match is found.

interface IPerson {
  name: string;
  age: string;
  email: string;
}

const personArray: IPerson[] = [
  {
    name: "tonmoy",
    age: "26",
    email: "tonmoy2708@gmail.com",
  },
  {
    name: "test",
    age: "26",
    email: "test@gmail.com",
  },
];

const matchEmail = (param1: IPerson[], param2: string) => {
  const result = personArray.find((person) => person.email === param2);
  return result !== undefined ? result.email : null;
};

// const email = matchEmail(personArray, "tonmoy27f08@gmail.com");
console.log(matchEmail(personArray, "tonmoy27d08@gmail.com"));
