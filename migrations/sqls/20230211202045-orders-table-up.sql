/* Replace with your SQL commands */

CREATE TABLE orders(id SERIAL PRIMARY KEY,userId bigint REFERENCES users(id),order_status VARCHAR(50));