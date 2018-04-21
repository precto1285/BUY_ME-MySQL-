const Mysql = require('mysql');

const con = Mysql.createConnection({

    host: '127.0.0.1',
    port: 3306,
    user: "root",
    password: "P!n0yR0ck*",
    database: "bamazon"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected as " + con.threadId + "\n");
    createProduct();
});

function createProduct() {
    console.log("Inserting a new product...\n");
    const query = connection.query(
        "INSERT INTO products SET ?",
        {
            item_id: 31,
            product_name: "lint brush",
            department_name: "bedroom",
            price: 4.39,
            stock_quantity: 100
        },
        function (err, res) {
            console.log(res.affectedRows + " product inserted!\n");
        }
    );

    console.log(query.sql);
}

function updatedProduct() {
    console.log("Updating all shampoo quantities...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [{
            stock_quantity: 99
        },
        {
            product_name: "shampoo"
        }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
            deleteProduct();
        }
    );

    console.log(query.sql);
}

function deleteProduct() {
    console.log("Deleting all shampoo...\n");
    connection.quer(
        "DELETE FROM products WHERE ?",
        {
            product_name: "shampoo"
        },
        function (err, res) {
            console.log(res.affectedRows + " products deleted!\n");
        }
    );
}

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query(
        "SELECT * FROM products", function(err, res) {
            if (err) throw err;

            console.log(res);
            connection.end();
        }
    );
}