const { create,getUsersAmc,upgrade } = require("../../models/user");

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


    getUsersAmc: (req,res) => {
        getUsersAmc((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
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
            if(!results){
                return res.json({
                    success: 0,
                    message: "Failed to upgrade service"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Upgraded successfully"
            });
        });
        
    }
};