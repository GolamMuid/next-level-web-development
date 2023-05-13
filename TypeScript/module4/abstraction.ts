// Abstraction using interface

interface Ivehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements Ivehicle {
  constructor(
    public type: string,
    public brand: string,
    public model: number
  ) {}

  startEngine(): void {
    console.log("The engine is starting");
  }
  stopEngine(): void {
    console.log("The engine is stopping");
  }
  move(): void {
    console.log("The car is moving");
  }
  test(): void {
    console.log("This method belongs to this class and not in the interface");
  }
}

const vehicle1 = new Vehicle("Car", "Toyota", 2007);

// Abstract class

abstract class VehicleA {
  constructor(
    public type: string,
    public brand: string,
    public model: number
  ) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;

  // * Non abstract methods aren't necessary to be in the child classes

  move(): void {
    console.log("The car is moving");
  }
}

class Car extends VehicleA {
  startEngine(): void {
    console.log("The engine is starting");
  }
  stopEngine(): void {
    console.log("The engine is stopping");
  }
}
