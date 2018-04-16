var mySql = require('mysql');

var con = mySql.createConnection({
    host:'bamazon',
    user:'root',
    password:'P!n0YR0ck*',
    database:'bamazon'
});

con.connect(function(err){
    if (err) return err;
    console.log("Connected!");
});