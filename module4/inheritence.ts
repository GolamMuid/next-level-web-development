class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): void {
    console.log(`Mr ${this.name} sleeps for ${hours} hours`);
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address); // inherited properties
  }
}

const student1 = new Student("Tonmoy", 26, "Dhaka");
student1.makeSleep(6);

class Teacher extends Parent {
  designation: string; // non inherited properties

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address); // inherited properties
    this.designation = designation;
  }

  takeClass(numberOfClasses: number): void {
    console.log(`Mr ${this.name} takes ${numberOfClasses} classes`);
  }
}

const teacher1 = new Teacher("John", 35, "Dhaka", "Professor");
teacher1.takeClass(4);
