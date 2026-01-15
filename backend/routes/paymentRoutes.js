const express = require("express");
const {authenticate} = require("../middleware/auth");
const {processPayment, getPaymentStaus} = require("../controllers/paymentController")

const router = express.Router();

router.post("/pay",authenticate, processPayment);
router.get("/payment_status/:orderId", getPaymentStaus);



module.exports=router;