import express, { Request, Response } from "express";
import { productModel, Product } from "../models/product.model";

import auth from "./middleware/auth";

const Model = new productModel();

const create = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    const product: Product = {
      name: name,
      price: price,
    };
    const addProduct = await Model.create(product);
    res.status(200).json({ message: "Added product", addProduct });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const index = async (req: Request, res: Response) => {
  try {
    const products = await Model.index();
    res.status(200).json({ message: "all product", products });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const product = await Model.show(parseInt(id));
    res.status(200).json({ message: "product", product });
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};

const deleteproduct = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const delProduct = await Model.delete(id)
    res.status(200).json({ message: 'product is removed', delProduct });
  } catch (error) {
    res.status(400).json({ message: 'Error', error });
  }
};

const productRoutes = (app: express.Application) => {
  app.post("/api/product", auth, create);
  app.get("/api/product", auth, index);
  app.get("/api/product/:id", auth, show);
  app.delete("/api/product/:id", auth, deleteproduct);
};

export default productRoutes;
