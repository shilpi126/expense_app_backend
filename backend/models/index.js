const Expense = require("../models/expenseModel");
const User = require("../models/userModel");

User.hasMany(Expense);
Expense.belongsTo(User);


module.exports={
    Expense,
    User
}