/* Replace with your SQL commands */
CREATE TABLE order_product(id SERIAL PRIMARY KEY,orderID bigint REFERENCES orders(id),productID bigint REFERENCES product(id),quantity INTEGER );