const express = require("express");

const port = 9000;

const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "This APIs is working"
    });
});


//listening to server
app.listen(port, function(err){
    if (err){ console.log('Error in running the server', err);}

    console.log('Express Server is running on port',port);
});