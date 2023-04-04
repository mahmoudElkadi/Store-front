import express, { Request, Response } from "express";
import { orderModel, Order, OrderProdect } from "../models/order.model";

import auth from "./middleware/auth";

const Model = new orderModel();

const create = async (req: Request, res: Response) => {
  try {
    const { order_status } = req.body;
    const order: Order = {
      //@ts-ignore
      userid: req.user,
      order_status: order_status,
    };
    const addOrder = await Model.create(order);
    res.status(200).json({ message: "Added order", addOrder });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const index = async (req: Request, res: Response) => {
  try {
    const order = await Model.index();
    res.status(200).json({ message: "all order", order });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const order = await Model.show(parseInt(id));
    res.status(200).json({ message: "order", order });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    const op: OrderProdect = {
      orderid: parseInt(req.params.orderid),
      productid: req.body.productID,
      quantity: req.body.quantity,
    };
    const addProduct = await Model.addProduct(op);
    res.status(200).json({ message: "add product order", addProduct });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const productsInOrders = async (req: Request, res: Response) => {
  try {
    const products = await Model.productsInOrders();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const orderRoutes = (app: express.Application) => {
  app.post("/api/order",auth , create);
  app.get("/api/order", index);
  app.get("/api/order/:id",  show);
  app.post("/api/order/:orderid/product",  addProduct);
  app.get("/api/product-in-orders", productsInOrders);
};

export default orderRoutes;
