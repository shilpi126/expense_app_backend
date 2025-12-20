const express = require("express");

const { getExpense, createExpense, updateExpense, deleteExpense } = require("../controllers/expenseController");
const router = express.Router();

router.post("/add",createExpense);
router.get("/get_expense",getExpense);
router.put("/update/:id",updateExpense);
router.delete("/delete/:id",deleteExpense);


module.exports=router;