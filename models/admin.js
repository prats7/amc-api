const db = require("../config/database");

module.exports = {

    register : (data,callBack) => {
        db.query(

            `insert into admin_table(name, email, password)
                values(?,?,?)`,
                [
                    data.name,
                    data.email,
                    data.password
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
