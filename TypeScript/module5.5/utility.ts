/// --- PICK - OMIT ---

interface People {
  name: string;
  email: string;
  contactNo: number;
}

// ? Pick : picks type from a type alias or interface

type email = Pick<People, "contactNo">;

type contact = Pick<People, "email" | "name">;

// ? Omit : removes types from a type alias or interface

type mail = Omit<People, "contactNo">;

type phone = Omit<People, "name" | "contactNo">;

/// --- PARTIAL - REQUIRED ---

interface User {
  name: string;
  email?: string;
  contactNo: number;
}

// ? Partial makes all the properties of a type or interface optional for the assigned variable

type optionalPeople = Partial<User>;

// ? Partial makes all the properties of a type or interface optional for the assigned variable

type requiredPeople = Required<User>;

/// --- INDEX SIGNATURE - RECORD ---

// ? Index Signature

type myObj = {
  [key: string]: string;
};

const obj: myObj = {
  a: "a",
  b: "b",
  c: "c",
};

// ? Record

type myObj2 = Record<string, string>;

const obj2: myObj2 = {
  a: "a",
  b: "b",
  c: "c",
};

type myObj3 = Record<"a" | "b" | "c", string>;

const obj3: myObj2 = {
  a: "a",
  b: "b",
  c: "c",
};
