let data: any;

data = "Next level web development";

const check = (data as string).length;
console.log(check);

function kgToGram(param: string | number): string | number | void {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    console.log(`The converted result is ${value}`);
  }
  if (typeof param === "number") {
    const value = param * 1000;
    console.log(`The converted result is ${value}`);
  }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = <string>kgToGram("1000"); // angle bracket is another syntax of type assertion, doesn't work on tsx

type CustomErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomErrorType).message);
}
