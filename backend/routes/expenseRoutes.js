const express = require("express");
const {authenticate} = require("../middleware/auth")
const { getExpense, createExpense, updateExpense, deleteExpense } = require("../controllers/expenseController");

const router = express.Router();

router.post("/add",authenticate,createExpense);
router.get("/get_expense",authenticate,getExpense);
router.put("/update/:id",authenticate,updateExpense);
router.delete("/delete/:id",authenticate,deleteExpense);



module.exports=router;