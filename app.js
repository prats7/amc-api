const express = require("express");

const mysql = require("mysql");

const port = 9000;

const app = express();

const userRouter = require("./routes/user_router");

const db = require("./config/database");

app.use(express.json());

app.use("/api/users",userRouter);

//connect to database
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql connected...');
});

//listening to server
app.listen(port, function(err){
    if (err){ console.log('Error in running the server', err);}

    console.log('Express Server is running on port',port);
});