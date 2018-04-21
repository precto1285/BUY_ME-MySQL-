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
        con.query("SELECT id FROM products", {id: answer.id}, function(err, res){
                for (var i = 0; i < res.length; i++){
                    console.log(
                        "id: "+ res[i].id +  
                        " || product_name: " + res[i].product_name +
                        " || department_name: " + res[i].department_name +
                        " || price: " + res[i].price +
                        " || stock_quantity: " + res[i].stock_quantity
                    );
                };        
        readProduct();
        con.end();
        });
    });
};
