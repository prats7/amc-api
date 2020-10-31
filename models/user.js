const pool = require("../config/database");

module.exports = {
    create : (data,callBack) => {
        pool.query(

            `insert into registration(id, amc_name, city_type, service_name, part_name, quantity, unit, actual_price, discount, amc_price)
                values(?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.id,
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
        
    }

};