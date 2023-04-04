import { userModel, hash } from "../models/user.model";
import { productModel } from "../models/product.model";
import { orderModel } from "../models/order.model";

const usModel = new userModel();
const proModel = new productModel();
const ordModel = new orderModel();

describe("test user model", () => {
  it("should have index user", () => {
    expect(usModel.index).toBeDefined();
  });
  it("should have create user", () => {
    expect(usModel.create).toBeDefined();
  });
  it("should have show user", () => {
    expect(usModel.show).toBeDefined();
  });
  it("should have authenticate", () => {
    expect(usModel.authenticate).toBeDefined();
  });
});

describe("test product model", () => {
  it("should have index product", () => {
    expect(proModel.index).toBeDefined();
  });
  it("should have create product", () => {
    expect(proModel.create).toBeDefined();
  });
  it("should have show product", () => {
    expect(proModel.show).toBeDefined();
  });
});

describe("test order model", () => {
  it("should have index order", () => {
    expect(ordModel.index).toBeDefined();
  });
  it("should have create order", () => {
    expect(ordModel.create).toBeDefined();
  });
  it("should have show order", () => {
    expect(ordModel.show).toBeDefined();
  });
  it("should have addProduct", () => {
    expect(ordModel.addProduct).toBeDefined();
  });
  it("should have show productsInOrders", () => {
    expect(ordModel.productsInOrders).toBeDefined();
  });
});

it("create method should add a user", async () => {
  const result = await usModel.create({
    first_name: "mahmoud",
    last_name: "ahmed",
    password: "123",
  });
  expect(result).toEqual({
    id: 1,
    first_name: "mahmoud",
    last_name: "ahmed",
    password: hash,
  });
});

it("create method should show a user", async () => {
  const result = await usModel.show(1);
  expect(result).toEqual({
    id: 1,
    first_name: "mahmoud",
    last_name: "ahmed",
    password: hash,
  });
});

it("create method should authenticate a user", async () => {
  const result = await usModel.authenticate(1, "123");
  expect(result).toEqual({
    id: 1,
    first_name: "mahmoud",
    last_name: "ahmed",
    password: hash,
  });
});

it("create method should index a user", async () => {
  const result = await usModel.index();
  expect(result).toEqual([
    {
      id: 1,
      first_name: "mahmoud",
      last_name: "ahmed",
      password: hash,
    },
  ]);
});

it("create method should add a product", async () => {
  const result = await proModel.create({
    name: "TV",
    price: 222,
  });
  expect(result).toEqual({
    id: 1,
    name: "TV",
    price: 222,
  });
});

it("create method should show a product", async () => {
  const result = await proModel.show(1);
  expect(result).toEqual({
    id: 1,
    name: "TV",
    price: 222,
  });
});

it("create method should index a product", async () => {
  const result = await proModel.index();
  expect(result).toEqual([
    {
      id: 1,
      name: "TV",
      price: 222,
    },
  ]);
});

it("create method should add a order", async () => {
  const result = await ordModel.create({
    userid: 1,
    order_status: "active",
  });
  expect(result).toEqual({
    id: 1,
    userid: "1",
    order_status: "active",
  });
});

it("create method should show a order", async () => {
  const result = await ordModel.show(1);
  expect(result).toEqual({
    id: 1,
    userid: "1",
    order_status: "active",
  });
});

it("create method should index a order", async () => {
  const result = await ordModel.index();
  expect(result).toEqual([
    {
      id: 1,
      userid: "1",
      order_status: "active",
    },
  ]);
});

it("create method should add product to order", async () => {
  const result = await ordModel.addProduct({
    orderid: 1,
    productid: 1,
    quantity: 6,
  });
  expect(result).toEqual({
    id: 1,
    orderid: "1",
    productid: "1",
    quantity: 6,
  });
});

it("create method should show product in order", async () => {
  const result = await ordModel.productsInOrders();
  expect(result).toEqual([
    {
      name: "TV",
      price: 222,
      orderid: "1",
    },
  ]);
});
