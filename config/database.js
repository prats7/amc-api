const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql",
});

//connect to database
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('connected to MySql db.');
});

module.exports = db;