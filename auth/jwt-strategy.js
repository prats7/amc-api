const jwt = require ("jsonwebtoken");

module.exports = {

    checkToken : (req,res,next) => {
        const token = req.get("authorization");
        if(token){
            token=token.slice(7);
            jwt(token,"secret",(err,decoded) => {
                if(err){
                    res.json({
                        message:"Invalid token"
                    });
                }else{
                    next();
                }
            });
        }else{
            res.json({
                message: "Unauthorized user"
            });
        }
    }
};