import client from "../database";

export type Product = {
  id?: number;
  name: string;
  price: number;
};

export class productModel {
  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from product`;
      const result = await conn.query(sql);
      const product = result.rows;
      conn.release();
      return product;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from product WHERE id=($1)`;
      const result = await conn.query(sql, [id]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO product (name,price) VALUES ($1,$2) RETURNING *`;

      const result = await conn.query(sql, [p.name, p.price]);
      const product = result.rows[0];
      conn.release;
      return product;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = `DELETE FROM product WHERE id=($1);`;
      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }
}
