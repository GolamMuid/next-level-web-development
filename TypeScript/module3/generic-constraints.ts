// * Generic constraints adds constraints(like mandatory fields) on generic by extending to a type/constraint

type MandatoryType = {
  name: string;
  age: number;
  graduate: boolean;
};

const createProfileNew = <T extends MandatoryType>(info: T) => {
  const jobHolder = true;
  const newProfile = { ...info, jobHolder };
  return newProfile;
};

type InfoType = {
  name: string;
  age: number;
  graduate: boolean;
  salary: number;
  property: null;
};

const information = {
  name: "Tonmoy",
  age: 26,
  graduate: true,
  salary: 0.00001,
  property: null,
};

const makeProfile = createProfileNew<InfoType>(information);
