const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const gerPropertyData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// ? using type alias

type DataType = {
  success: boolean;
  result: string;
};

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { success: true, result: "data is fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const gerPropertyObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};

// * Using JSON placeholder

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

const getTodoData = async (): Promise<void> => {
  const todoData = await getTodo();
  console.log(todoData);
};

getTodoData();
