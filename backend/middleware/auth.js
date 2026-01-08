const jwt = require("jsonwebtoken");
const User = require("../models/userModel")


const authenticate = async(req,res,next) => {
    try{
    const token = req.header("Authorization");
    console.log("auth==>",token);

    const userData = jwt.verify(token, "secret_key");
    console.log("user-id",userData);
    const user = await User.findByPk(userData.userId);
        console.log(user);
        req.user=user;
        next();

    }catch(err){
        return res.status(401).json("something went wrong with authenticate")
    }
}



module.exports = {
    authenticate

}