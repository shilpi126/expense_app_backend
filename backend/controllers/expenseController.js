
const { where } = require("sequelize");
const Expense = require("../models/expenseModel")



const createExpense = async(req,res)=>{
    const {amount,description, category}= req.body;

    const UserId = req.user.id;
    //console.log("+++++++>>>>)))",UserId)


    try{
        const expense = await Expense.create({amount,description,category,UserId});
        //console.log(expense);
        res.status(201).json({
            data:expense,
            message:"expense created successfully!"
        });
        
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}




const getExpense = async(req,res)=>{
    const UserId = req.user.id;
    
    try{
        const expense = await Expense.findAll({where:{UserId}});
        console.log("user_expense",expense);
        res.status(201).json({
            data:expense,
            message:"get all expenses successfully!"
        });
        
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong, while fetching expenses!"});


    }
}

const updateExpense = async(req,res)=>{
    const {id} = req.params;
    const {amount,description, category}= req.body;
    try{
        const expenseData = await Expense.findOne({where:{id:id}});

        if (!expenseData) {
            return res.status(404).json({ message: "Expense not found" });
        }

        expenseData.amount=amount;
        expenseData.description=description;
        expenseData.category=category;

        await expenseData.save();
        
        res.status(201).json({
            data:expenseData,
            message:"expense created successfully!"
        });
        
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}



const deleteExpense = async(req,res)=>{
    const {id} = req.params;
    try{
        const expense = await Expense.findOne({where:{id:id}});

        
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        const deletedData = await expense.destroy();

        res.status(201).json({
            data:deletedData,
            message:"expense deleted successfully!"
        });
        
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"});


    }
}








module.exports ={
    createExpense,
    getExpense,
    updateExpense,
    deleteExpense

}