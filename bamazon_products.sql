CREATE DATABASE bamazon;

CREATE TABLE products
(
	item_id INT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INT,
    stock_quantity INT
    
);

SELECT *
FROM products;

INSERT INTO products
VALUES (1,"shampoo","toiletries",10.79, 100);

INSERT INTO products
VALUES (2,"soap","toiletries",3.99, 100);

INSERT INTO products
VALUES (3,"conditioner","toiletries",12.39, 100);

INSERT INTO products
VALUES (4,"toothpaste","toiletries",5.50, 100);

INSERT INTO products
VALUES (5,"mouthwash","toiletries",3.78, 100);

INSERT INTO products
VALUES (6,"toothbrush","toiletries",5.49, 100);

INSERT INTO products
VALUES (7,"cotton-swabs","toiletries",2.53, 100);

INSERT INTO products
VALUES (8,"floss","toiletries",1.59, 100);

INSERT INTO	products
VALUES (9, "toilet paper", "toiletries",8.67, 100);

INSERT INTO products
VALUES (10,"Paper Towels","kitchen",6.73, 100);

INSERT INTO products
VALUES (11,"dish soap","kitchen",3.99, 100);

INSERT INTO products
VALUES (12,"sponges","kitchen",12.39, 100);

INSERT INTO products
VALUES (13,"detergent wipes","kitchen",5.50, 100);

INSERT INTO products
VALUES (14,"baking soda","kitchen",2.50, 100);

INSERT INTO products
VALUES (15,"vinegar","kitchen",13.13,100);

INSERT INTO products
VALUES (16,"trash bags","kitchen",16.00,100);

INSERT INTO products
VALUES (17,"kitchen towels","kitchen",5.49,100);

INSERT INTO products
VALUES (18, "mop", "kitchen", 13.59,100);

INSERT INTO products
VALUES (19,"old english","living room",14.76,100);

INSERT INTO products
VALUES (20,"air freshner","living room",2.37,100);

INSERT INTO products
VALUES (21,"scented candles","living room",1.76,100);

INSERT INTO products
VALUES (22,"vacuum","living room",367.89,100);

INSERT INTO products
VALUES (23,"long-arm duster","living room",13.37,100);

INSERT INTO products
VALUES (24,"fabric freshner","living room",4.36,100);

INSERT INTO products
VALUES (25,"carpet deoderizer","living room",15.89,100);

INSERT INTO products
VALUES (26,"moth balls","bedroom",5.99,100);

INSERT INTO products
VALUES (27,"humidifier","bedroom",60.34,100);

INSERT INTO products
VALUES (28,"mini-vac","bedroom",111.39,100);

INSERT INTO products
VALUES (29,"small duster/pan","bedroom",5.15,100);

INSERT INTO products
VALUES (30,"small trash can","bedroom",5.00,100);