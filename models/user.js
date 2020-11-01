const db = require("../config/database");

module.exports = {

    //Taking data by user
    create : (data,callBack) => {
        db.query(
            //Query for inserting data into database into respective fields
            `insert into amc_table(amc_name, city_type, service_name, part_name, quantity, unit, actual_price, discount, amc_price)
                values(?,?,?,?,?,?,?,?,?)`,
                [
                    data.amc_name,
                    data.city_type,
                    data.service_name,
                    data.part_name,
                    data.quantity,
                    data.unit,
                    data.actual_price,
                    data.discount,
                    data.amc_price
                ],
                //Function
                (error, results, fields) => {
                    //On Error incounter
                    if(error){
                        return callBack(error);
                    }
                    //Success
                    return callBack(null, results)
                }

        );
        
    },

    //Fetching all user.
    getUsersAmc : callBack => {
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

    //If user want to upgrade service
    upgrade : (data, callback) => {
        //Query for upgrade for certain AMC name.
        db.query(
            `update amc_table set city_type = ? , service_name = ?, part_name = ?, quantity = ?,unit = ?, actual_price = ?,discount = ?, amc_price = ? where amc_name = ?`,

            [
                data.city_type,
                data.service_name,
                data.part_name,
                data.quantity,
                data.unit,
                data.actual_price,
                data.discount,
                data.amc_price,
                data.amc_name
            ],
            //Function
            (error, results, fields) => {
                //Error
                if(error){
                   return callback(error);
                }
                //Success
                return callback(null,results[0]);
            }

        );
    }


};