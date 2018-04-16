const MySql = require('mysql');

const con = MySql.createConnection({
    host:'bamazon',
    user:'root',
    password:'P!n0YR0ck*',
    database:'bamazon'
});

con.connect(function(err){
    if (err) return err;
    console.log("Connected!");
});

const fs = require('fs');

fs.readFile(con, function(){
    console.log(con);
});