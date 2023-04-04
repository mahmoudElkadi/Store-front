import client from "../database";

export type Order = {
  id?: number;
  userid: number | string;
  order_status: string;
};

export type OrderProdect = {
  id?: number;
  orderid: number | string;
  productid: number | string;
  quantity: number;
};

export class orderModel {
  async index(): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from orders`;
      const result = await conn.query(sql);
      const order = result.rows;
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async show(id: number): Promise<Order> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from orders WHERE id=($1)`;
      const result = await conn.query(sql, [id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO orders (userid,order_status) VALUES ($1,$2) RETURNING *`;

      const result = await conn.query(sql, [o.userid, o.order_status]);
      const order = result.rows[0];
      conn.release;
      return order;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async addProduct(op: OrderProdect): Promise<OrderProdect> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO order_product (orderid,productid,quantity) VALUES ($1,$2,$3) RETURNING *`;
      const result = await conn.query(sql, [
        op.orderid,
        op.productid,
        op.quantity,
      ]);
      const orderProduct = result.rows[0];
      conn.release;
      return orderProduct;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async productsInOrders(): Promise<
    { name: string; price: number; orderid: string }[]
  > {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql =
        "SELECT name, price,orderID FROM product INNER JOIN order_product ON product.id = order_product.productID";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`);
    }
  }
}
