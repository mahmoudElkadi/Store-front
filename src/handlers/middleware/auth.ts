import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
console.log(process.env.JWT_TOKEN);
import { userModel, User } from "../../models/user.model";
import dotenv from "dotenv";

dotenv.config();
const JWT_TOKEN = process.env.JWT_TOKEN as string;

const model = new userModel();

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const tokenHeader = req.headers["authorization"];
  if (tokenHeader) {
    if (tokenHeader.startsWith("Bearer")) {
      const token = tokenHeader.split(" ")[1];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { id } = jwt.verify(token, JWT_TOKEN) as any;

      if (id) {
        model
          .show(parseInt(id))
          .then((u: User) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // @ts-ignore
            req.user = u.id;
            next();
          })
          .catch((err) => {
            res.send(err);
          });
      }
    } else {
      res.json({ message: "invalidToken" });
    }
  } else {
    res.json({ message: "invalidToken" });
  }
};

export default auth;
