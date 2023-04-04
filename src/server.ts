import express, { Request, Response } from "express";
import userRoutes from "./handlers/users.handler";
import productRoutes from "./handlers/product.handler";
import orderRoutes from "./handlers/order.handler";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());

userRoutes(app);
productRoutes(app);
orderRoutes(app);
app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
