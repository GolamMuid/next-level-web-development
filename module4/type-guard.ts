// key of guard

type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add(2, 3));
console.log(add("2", "3"));

// in guard

type NormalUserType = {
  name: string;
};

type AdminUserType = NormalUserType & {
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am admin and my role is ${user.role}`;
  } else {
    return "I am a normal user";
  }
}

const normalUser1: NormalUserType = { name: "Muid" };
const adminUser1: AdminUserType = { name: "Boss Man", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof gurad

class AnimalG {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class DogG extends AnimalG {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log("I am barking");
  }
}

class CatG extends AnimalG {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeow() {
    console.log("I am Meowing");
  }
}

const animal1 = new DogG("German", "Dog");
const animal2 = new CatG("Ragdoll", "Cat");

function getAnimal(animal: AnimalG) {
  if (animal instanceof DogG) {
    animal.makeBark();
  } else if (animal instanceof CatG) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
}

console.log(getAnimal(animal1));
console.log(getAnimal(animal2));

// Another approach using function

function isDog(animal: AnimalG): animal is DogG {
  return animal instanceof DogG;
}

function isCat(animal: AnimalG): animal is CatG {
  return animal instanceof CatG;
}

function getAnimal2(animal: AnimalG) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
}

console.log(getAnimal2(animal1));
console.log(getAnimal2(animal2));
