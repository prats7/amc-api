const { create,getUsersAmc,upgrade } = require("../../models/user");

module.exports = {
    //Function for creating user data
    createUser: (req,res) => {
        const body = req.body;
        create(body, (err, results) => {
            //Error
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error in connecting to database"
                });
            }
            //Success
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    //Function for getting all user data
    getUsersAmc: (req,res) => {
        getUsersAmc((err, results) => {
            //Error
            if(err){
                console.log(err);
                return;
            }
            //Success
            return res.json({
                success: 1,
                data: results
            });
        });


    },


    //Function for user service upgradation
    upgradeService: (req,res) => {
        const body = req.body;
        upgrade(body, (err, results) => {
            //Error
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Error"
                });
            }
            //If result is same as previous service
            if(!results){
                return res.json({
                    success: 0,
                    message: "Failed to upgrade service"
                });
            }
            //Success
            return res.status(200).json({
                success: 1,
                message: "Upgraded successfully"
            });
        });
        
    }
};