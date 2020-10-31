const { create,upgrade } = require("../../models/user");

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
    },

    upgradeService: (req,res) => {
        const body = req.body;
        upgrade(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Error"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Upgraded successfully"
            });
        });
        
    }
};