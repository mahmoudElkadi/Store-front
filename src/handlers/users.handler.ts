import express, { Request, Response } from "express";
import { userModel, User } from "../models/user.model";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_TOKEN = process.env.JWT_TOKEN as string;

const Model = new userModel();

const create = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, password } = req.body;
    const user: User = {
      first_name: firstName,
      last_name: lastName,
      password: password,
    };
    const addUser = await Model.create(user);
    res.status(200).json({ message: "Added user", addUser });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const index = async (req: Request, res: Response) => {
  try {
    const users = await Model.index();
    res.status(200).json({ message: "all users", users });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const user = await Model.show(parseInt(id));
    res.status(200).json({ message: "user", user });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    const { id, password } = req.body;
    const user = await Model.authenticate(id, password);
    if (user) {
      const token = jwt.sign({ id: user?.id }, JWT_TOKEN);
      res.status(200).json({ message: "login", token });
    } else {
      res.status(400).json({ message: "id or password uncorrect" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const userRoutes = (app: express.Application) => {
  app.post("/api/users", create);
  app.get("/api/users",  index);
  app.get("/api/users/:id", show);
  app.post("/api/users/authenticate", authenticate);
};

export default userRoutes;
