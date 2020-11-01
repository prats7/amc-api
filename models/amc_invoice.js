const db = require("../config/database");

module.exports = {

    invoice : callBack => {
        //Query for selecting fields.
        db.query(
            `select amc_name, city_type, service_name, part_name, quantity, unit, actual_price, discount, amc_price from amc_table`,
            [],
            //Function
            (error,results,fields) => {
                //Error
                if(error){
                    return callBack(error);
                }
                //Success
                return callBack(null, results);
            }
        )
    },

};