const {invoice} = require("../../models/amc_invoice");

module.exports = {
    amcInvoice: (req,res) => {
        const amc_name = req.params.amc_name;
        //Function for creating AMC
        invoice(amc_name, (err, results) => {
            //Error
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Error in connecting to database"
                });
            }
            //If AMC for user is not in the record.
            if(!results){
                return res.json({
                    message: "Record not found"
                });
            }
            //Success
            return res.status(200).json({
                message: "Your AMC",
                data: results
            });
        });
    },
};