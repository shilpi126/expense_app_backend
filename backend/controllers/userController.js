const User = require("../models/userModel");

const signup = async(req,res)=>{
    const {username, email, password}= req.body;
    try{
        
        if(username === ""  || email === "" || password === ""){
        return res.status(404).json({ message: "Please enter valid input" });
        }
        
        const isExistUser = await User.findOne({ where: { email } });
        if (isExistUser) {
        return res.status(404).json({ message: "User already exists" });
        }

        const user = await User.create({username,email,password});
        //console.log(user);
        res.status(201).json({message:"user signup successfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}



const login = async(req,res)=>{
    const {email, password}= req.body;
    try{
        
        if( email === "" || password === ""){
        return res.status(401).json({ message: "Please enter valid input" });
        }
        
        const isExistUser = await User.findOne({ where: { email } });
        if (!isExistUser) {
        return res.status(404).json({ message: "User does not exists" });
        }

        if(isExistUser.password !== password){
            return res.status(401).json({ message: "Invalid credencial" });
        }

        res.status(201).json({message:"user login successfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}



module.exports ={
    signup,
    login
}