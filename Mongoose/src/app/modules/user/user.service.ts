import IUser from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  console.log(user.fullName());
  return user;
};

export const getUsersfromDB = async (): Promise<IUser[]> => {
  const user = await User.find();
  return user;
};

export const getUsersbyID = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return user;
};
