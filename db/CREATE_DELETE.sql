DROP TABLE products;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    img text
);


INSERT INTO products
(name, price, img)
VALUES ('Prodcut 1', 99, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 2', 99, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 3', 99, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 4', 99, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 5', 99, 'http://via.placeholder.com/350x150');
INSERT INTO products
(name, price, img)
VALUES ('Prodcut 6', 99, 'http://via.placeholder.com/350x150');