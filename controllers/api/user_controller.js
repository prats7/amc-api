const { create } = require("../../models/user");

module.exports = {
    createUser: (req,res) => {
        const body = req.body;
        create(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error in connecting to database"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}