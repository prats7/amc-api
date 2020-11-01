
//Json web token authentication
const { verify } = require ("jsonwebtoken");

module.exports = {

    checkToken : (req,res,next) => {
        let token = req.get("authorization");
        if(token){
            token=token.slice(7);
            //Token Verification
            verify(token,"secret",(err,decoded) => {
                //Error
                if(err){
                    res.json({
                        message:"Invalid token"
                    });
                }else{
                    next();//Success
                }
            });
        //If token doesn't match
        }else{
            res.json({
                message: "Unauthorized user"
            });
        }
    }
};