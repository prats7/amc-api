const express = require("express");

const mysql = require("mysql");

const port = 9000;

const app = express();

const userRouter = require("./routes/user_router");

const db = require("./config/database");

app.use(express.json());

//Add insert data to table 
app.use("/api/users",userRouter);

//Task 1: Creating database and table for MySql database
    app.get('/api/createdb',(req,res) => {
        let sql = 'CREATE DATABASE nodemysql';
        db.query(sql, (err, results) => {
            if(err) throw err;
            console.log(results);
            res.send('Database created.')
        });

    });
    //Create Table
    app.get('/api/createamctable',(req, res) => {
        let sql = 'CREATE TABLE amc_table(amc_name VARCHAR(255),city_type VARCHAR(45),service_name VARCHAR(45),part_name VARCHAR(45),quantity INT,unit INT,actual_price INT,discount INT,amc_price INT,PRIMARY KEY (amc_name))' ;
        
        db.query(sql, (err, results) => {
            if(err) throw err;
            console.log(results);
            res.send('AMC Table created.');
        });
    });



//listening to server
app.listen(port, function(err){
    if (err){ console.log('Error in running the server', err);}

    console.log('Express Server is running on port',port);
});