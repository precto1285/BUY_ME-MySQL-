var Inquirer = require('inquirer');
var fs = require('fs');

fs.readFile("./bamazon_products.sql", 'utf8', function(err, data){
    if(err){
        return console.log(err);
    }
    console.log(data);

});


