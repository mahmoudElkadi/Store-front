import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const saltRound = process.env.SALT as string;

export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  password: string;
};

export let hash: string;

export class userModel {
  async index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from users`;
      const result = await conn.query(sql);
      const users = result.rows;
      conn.release();
      return users;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async show(id: number): Promise<User> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * from users WHERE id=($1)`;
      const result = await conn.query(sql, [id]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO users (first_name,last_name,password) VALUES ($1,$2,$3) RETURNING *`;
      hash = bcrypt.hashSync(u.password, parseInt(saltRound));
      const result = await conn.query(sql, [u.first_name, u.last_name, hash]);
      const user = result.rows[0];
      conn.release;
      return user;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }

  async authenticate(id: number, password: string): Promise<User | null> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM users WHERE id=($1)`;
      const result = await conn.query(sql, [id]);

      if (result.rows.length) {
        const user = result.rows[0];
        if (bcrypt.compareSync(password, user.password)) {
          return user;
        }
      }
      return null;
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }
}
