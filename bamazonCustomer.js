const Mysql = require('mysql');

const con = Mysql.createConnection({
    host:'localhost',
    port:3306,
    user:"root",
    password:"P!n0yR0ck*",
    database:"bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as ID ") + connection.threadId;
    connection.end();
    readProducts();
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.quer(
        "SELECT * FROM products", function (err, res) {
            if (err) throw err;

            console.log(res);
            connection.end();
        }
    );
}
