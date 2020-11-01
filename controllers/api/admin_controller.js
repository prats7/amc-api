const {register,login} = require("../../models/admin");
//Encryption
const { genSaltSync, hashSync} = require("bcrypt");
//JWT
const { sign } = require("jsonwebtoken");

var bcrypt = require("bcrypt");



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
                    message: "Error in connecting to database"
                });
            }
            //Success
            return res.status(200).json({
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
                    data: "Invalid email or password"
                });
            }
            //Password matching
            const result = bcrypt.compare(body.password, results.password);
            if(result){
                //Creating json web token
                results.password = undefined;
                const jsontoken = sign ({ result: results},"secret",{
                    expiresIn: "2h"
                });
                //Success
                return res.json({
                    message: "login successfully",
                    token: jsontoken
                });

            }else{
                //Error
                return res.json({
                    message: "Invalid email or password",
                });
            }

        });
    }

};