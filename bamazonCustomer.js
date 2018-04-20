const mysql = require('mysql');

const con = mysql.createConnection({
    file: mySqlbc,
    host:'127.0.0.1',
    port:3306,
    user:"root",
    password:"P!n0yR0ck*",
    database:"bamazon"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected as ID ") + con.threadId;
    readProducts();
    con.end();
});

function readProducts() {
    console.log("Selecting all products...\n");
    con.query(
        "SELECT * FROM products", function (err, res) {
            if (err) throw err;

            console.log(res);
            con.end();
        }
    );
}
