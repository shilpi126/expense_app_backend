
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



const signup = async(req,res)=>{
    const {username, email, password}= req.body;
    try{
        
        if(username === ""  || email === "" || password === ""){
        return res.status(404).json({ message: "Please enter valid input" });
        }
        
        const user = await User.findOne({ where: { email } });
        if (user) {
        return res.status(404).json({ message: "User already exists" });
        }
        
        
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async(err,hash)=>{
            try{
                const user = await User.create({username,email,password:hash});
        
                res.status(201).json({message:"user signup successfully!"});
            }catch(err){
                res.status(500).json({message:"Something went wrong!"});
            }
        })

        
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}


const generateAccessToken = (id) => {
    return jwt.sign({userId:id},"secret_key");
}

const login = async(req,res)=>{
    const {email, password}= req.body;
    try{
        
        if( email === "" || password === ""){
        return res.status(401).json({ message: "Please enter valid input" });
        }
        
        const user = await User.findOne({ where: { email } });
        
        if (!user) {
        return res.status(404).json({ message: "User does not exists" });
        }
        
        bcrypt.compare(password, user.password, async(err,result)=>{
        try{
            if(err){
                return res.status(401).json({message:"something went wrong"});
            }

            if(result === true){
                res.status(201).json({message:"user login successfully!", token:generateAccessToken(user.id)});
            }else{
                return res.status(401).json({message:"password incorrect!"});
            }
            
        }catch(err){
            res.status(401).json({ message: "Invalid credencial" });
        }
        })

        
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}










module.exports ={
    signup,
    login,
    
}