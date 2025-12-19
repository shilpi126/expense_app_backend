const User = require("../models/userModel");

const signup = async(req,res)=>{
    const {username, email}= req.body;
    try{
        const isExistUser = User.findOne(email);
        if(isExistUser){
            return;
        }
        const user = await User.create({username,email});
        console.log(user);
        res.status(201).json({message:"user signup successfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Invalid User"});
        

    }
}


module.exports ={
    signup,
}