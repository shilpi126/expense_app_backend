const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require("../utils/db.connection");


const Payment = sequelize.define("Payment",{
    orderId:{
        type:DataTypes.STRING(255),
        
        allowNull:false
        
    },
    orderAmount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    orderCurrency:{
        type:DataTypes.STRING,
        
        allowNull:false,
        
    },
    customerId:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    customerPhone:{
    type:DataTypes.STRING,
        allowNull:false,
    }
    
})


module.exports=Payment;