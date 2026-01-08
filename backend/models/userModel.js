const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require("../utils/db.connection");

const Users = sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
        
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        
    }
})




module.exports=Users;