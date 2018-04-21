const mysql = require('mysql');
const inquirer = require('inquirer');
const prompt = require('prompt');

const con = mysql.createConnection({
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
            chooseProduct();
            con.end();
            
        }
    );
}

function chooseProduct() {
    inquirer
    .prompt({
        name:'id',
        type:'input',
        message:'what is the item# you wish to purchase?'
    })
    .then(function(answer){
        console.log(answer.id)
        con.query("SELECT * FROM products", {id: answer.id}, function(err, res){
            console.log(
                "id: " + res[0].id +
                " || product_name: " + res[0].product_name +
                " || department_name: " + res[0].product_name +
                " || price: " + res[0].product_name +
                " || stock_quantity: " + res[0].stock_quantity
        );
        chooseProduct();
        });
    });
};