const User = require("../models/userModel");

const signup = async(req,res)=>{
    const {username, email}= req.body;
    try{
        const isExistUser = await User.findOne({ where: { email } });

        if (isExistUser) {
        return res.status(401).json({ message: "User already exists" });
        }

        const user = await User.create({username,email});
        //console.log(user);
        res.status(201).json({message:"user signup successfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}


module.exports ={
    signup,
}