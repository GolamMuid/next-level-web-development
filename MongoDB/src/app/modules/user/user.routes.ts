import express from "express";
import { createUser, getUser, getUsers } from "./user.controller";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);

export default router;
