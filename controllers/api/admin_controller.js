const { register,login } = require("../../models/admin");
//Encryption
const { genSaltSync, hashSync , compareSync} = require("bcrypt");
//JWT
const { sign } = require("jsonwebtoken");

module.exports = {
    //Controller for register Admin
    registerAdmin: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        //Password hashing
        body.password = hashSync(body.password, salt);
        register(body, (err, results) => {
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
                message: "Admin registered successfully"
            });
        });
    },
    //For Admin login
    loginAdmin : (req,res) => {
        const body = req.body;
        login(body.email, (err, results) => {
            //Error
            if(err) {
                console.log(err);
            }
            //If password or user not present in database
            if(!results){
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                });
            }
            //Password matching
            const result = compareSync(body.password, results.password);
            if(result){
                //Creating json web token
                results.password = undefined;
                const jsontoken = sign ({ result: results},"secret",{
                    expiresIn: "2h"
                });
                //Success
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken
                });

            }else{
                //Error
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                });
            }

        });
    }





};