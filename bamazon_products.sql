DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

CREATE TABLE products
(
	id INT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INT,
    stock_quantity INT,
    
    PRIMARY KEY (id)
);

SELECT *
FROM products;

INSERT INTO products
VALUES (1,"shampoo","toiletries",9, 100);

INSERT INTO products
VALUES (2,"soap","toiletries",4, 100);

INSERT INTO products
VALUES (3,"peanut butter","food",8, 100);

INSERT INTO products
VALUES (4,"banana","food",3, 100);

INSERT INTO products
VALUES (5,"jeans","clothing",35, 100);

INSERT INTO products
VALUES (6,"polo","clothing",12, 100);

INSERT INTO products
VALUES (7,"television","electronics",1200, 100);

INSERT INTO products
VALUES (8,"laptop","electronics",800, 100);

INSERT INTO	products
VALUES (9, "dishwasher", "appliances",500, 100);

INSERT INTO products
VALUES (10,"refrigerator","appliances",1100, 100);

