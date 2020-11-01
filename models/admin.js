const db = require("../config/database");

module.exports = {
    //For Super Admin register
    register : (data,callBack) => {
        //Query for inserting credentials of Admin to db
        db.query(

            `insert into admin_table(name, email, password)
                values(?,?,?)`,
                [
                    data.name,
                    data.email,
                    data.password
                ],
                (error, results, fields) => {
                    //Error
                    if(error){
                        return callBack(error);
                    }
                    //Success
                    return callBack(null, results)
                }

        );
        
    },
    //Admin login
    login : (email,callBack) => {
        //Query for finding Admin using email.
        db.query(
            `select * from admin_table where email=? `,
            [email],
            (error,results,fields) => {
                //Error
                if(error){
                    return callBack(error);
                }
                //Success
                return callBack(null,results[0]);
            }
        );
    }


};
