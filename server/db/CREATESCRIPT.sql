DROP TABLE products;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    img text
);


INSERT INTO products
(name, price, img)
VALUES ('Prodcut 1', 100, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 2', 101, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 3', 102, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 4', 103, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 5', 104, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 6', 105, 'http://via.placeholder.com/350x150');