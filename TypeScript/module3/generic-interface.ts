// Generic Interface

interface JLAInterface<T> {
  name: string;
  origin: T;
}

const jLAMember1: JLAInterface<string> = {
  name: "Superman",
  origin: "Krypton",
};

const jLAMember2: JLAInterface<{ city: string; mask: boolean }> = {
  name: "Batman",
  origin: {
    city: "Gotham",
    mask: true,
  },
};

interface OriginInterface {
  city: string;
  mask: boolean;
  powerSource: string;
}

const jLAMember3: JLAInterface<OriginInterface> = {
  name: "The Flash",
  origin: {
    city: "Central City",
    mask: true,
    powerSource: "Speed Force",
  },
};

interface AvengersInterface<T, U> {
  name: string;
  origin: T;
  superPower: U;
}

const AvengersMem1: AvengersInterface<string, boolean> = {
  name: "Nick Fury",
  origin: "Unknown",
  superPower: false,
};

const AvengersMem2: AvengersInterface<string, string> = {
  name: "Dr. Strnage",
  origin: "Kamar-Taj",
  superPower: "Magic",
};
