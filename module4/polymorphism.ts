// ? Polymorphism : Same named methods of different classes show different outputs

class Person {
  takeNap(): void {
    console.log("I am sleeping for 8hrs per day");
  }
}

class Bekar extends Person {
  takeNap(): void {
    console.log("I am sleeping for 12hrs per day");
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log("I am sleeping for 6hrs per day");
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person1 = new Person();
const person2 = new Bekar();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

// Another example

class Shape {
  getArea() {}
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 20));
