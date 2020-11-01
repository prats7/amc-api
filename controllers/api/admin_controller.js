const { register } = require("../../models/admin");

const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {

    registerAdmin: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        register(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error in connecting to database"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Admin registered successfully"
            });
        });
    },

};