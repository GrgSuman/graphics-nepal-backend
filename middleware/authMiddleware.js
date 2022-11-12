const jwt = require("jsonwebtoken");


const checkUserStatus = (req,res,next)=>{
    const token = req.cookies.jwt;

    if(token){

        jwt.verify(token,"my secret key",(err,decodedToken)=>{
            if(err){
              res.json("Haha wrong try")
            }
            else{
                req.userID=decodedToken.id
                next();
            }
        })

    }
    else{
        res.json("janne hunxas")
    }
}

module.exports = checkUserStatus