const Mysql = require('mysql');

const con = Mysql.createConnection({
    host:'127.0.0.1',
    port:3306,
    user:"root",
    password:"P!n0yR0ck*",
    database:"bamazon"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected as ID ") + con.threadId;
    connection.end();
});
