class Counter {
  static count: number = 0;

  increment(): number {
    return (Counter.count = Counter.count + 1);
  }

  decrement(): number {
    return (Counter.count = Counter.count - 1);
  }
}

const instace1 = new Counter();
const instace2 = new Counter();

// * Multiple instance changes the value of the same variable cause the vairable is static

console.log(instace1.increment()); // 1
console.log(instace2.increment()); // 2

// ? Static Method

class Counter2 {
  static count: number = 0;

  static increment(): number {
    return (Counter2.count = Counter2.count + 1);
  }

  static decrement(): number {
    return (Counter2.count = Counter2.count - 1);
  }
}

// * methods and varable are static so they don't need any instance and they'll change the value of the same variable

console.log(Counter2.increment()); // 1
console.log(Counter2.increment()); // 2
