const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("expense_db","root","greatJob108",{
host:"localhost",
dialect:"mysql"
});


(async () => {
try{
    await sequelize.authenticate();
    console.log("db connected successfully!")
}catch(err){
    console.log(err);
}})();


module.exports = sequelize;