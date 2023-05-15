import { Request, Response, NextFunction } from "express";
import { createUserToDB, getUsersbyID, getUsersfromDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const user = await createUserToDB(data);
  res.status(201).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersfromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const user = await getUsersbyID(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
