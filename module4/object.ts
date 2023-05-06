class Animal {
  // name: string;
  // species: string;
  // sound: string;

  // ? Parameter Properties

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // name = this.name;
    // species = this.species;
    // sound = this.species;
  }

  makeSound() {
    console.log(`The ${this.name} makes ${this.sound} sound`);
  }
}

const dog = new Animal("German Shepherd", "dog", "woof woof");
dog.makeSound();

const cat = new Animal("Ragdoll", "cat", "meow meow");
cat.makeSound();
