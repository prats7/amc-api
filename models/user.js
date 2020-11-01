const db = require("../config/database");

module.exports = {
    create : (data,callBack) => {
        db.query(

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
                (error, results, fields) => {
                    if(error){
                        return callBack(error);
                    }
                    return callBack(null, results)
                }

        );
        
    },

    getUsersAmc : callBack => {
        db.query(
            `select amc_name, city_type, service_name, part_name, quantity, unit, actual_price, discount, amc_price from amc_table`,
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    upgrade : (data, callback) => {
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

            (error, results, fields) => {
                if(error){
                   return callback(error);
                }
                return callback(null,results[0]);
            }

        );
    }


};