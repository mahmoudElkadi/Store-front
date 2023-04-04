import supertest from "supertest";
import app from "../server";

const request = supertest(app);
describe("Test endpoint responses of users", () => {
  it("gets alluser", async () => {
    request.get("/api/users").expect(200);
  });
  it("show user", async () => {
    await request.get("/api/users/1").expect(200);
  });
  it("create user", async () => {
    request.post("/api/users").expect(200);
  });
  it("login user", async () => {
    request.post("/api/users/authenticate").expect(200);
  });
});
describe("Test endpoint responses of product", () => {
  it("get all product", async () => {
    request.get("/api/product").expect(200);
  });
  it("show product", async () => {
    request.get("/api/product/1").expect(200);
  });
  it("create product", async () => {
    request.post("/api/product").expect(200);
  });
});

describe("test endpoint response of order", () => {
  it("get all order", async () => {
    request.get("/api/order").expect(200);
  });
  it("show order", async () => {
    request.get("/api/order/1").expect(200);
  });
  it("create order", async () => {
    request.post("/api/order").expect(200);
  });
  it("create order product", async () => {
    request.post("/api/order/1/product").expect(200);
  });
  it("get order product", async () => {
    request.post("/api/product-in-orders").expect(200);
  });
});
