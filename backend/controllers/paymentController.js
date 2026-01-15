const Payment = require("../models/paymentModel");
const { Cashfree, CFEnvironment } = require("cashfree-pg");

const cashfree = new Cashfree(CFEnvironment.SANDBOX, "TEST430329ae80e0f32e41a393d78b923034", "TESTaf195616268bd6202eeb3bf8dc458956e7192a85");

const {createOrder} = require("../services/cashfreeServices");
const { v4: uuidv4 } = require('uuid');

const processPayment = async(req,res) =>{
    console.log("process_payment")
        const orderId = uuidv4();
        const orderAmount = 2000;
        const orderCurrency = "INR";
        const customerId = "1";
        const customerPhone="9999999999";

    try{
        const paymentSessionId = await createOrder(
            orderId,
            orderAmount,
            orderCurrency,
            customerId,
            customerPhone
        )

            //console.log("payment session id => ",paymentSessionId)

        const pay = await Payment.create({
            orderId,
            orderAmount,
            orderCurrency,
            customerId,
            customerPhone,
            // paymentSessionId,
            // paymentStatus:"Pending",
        })

        console.log(pay,"payment created")

        res.json({paymentSessionId,orderId});

    }catch(err){
    console.log(err);
    }
}


const getPaymentStaus = async(req,res) => {
const {orderId} = req.params;
//console.log("------>>>>>",orderId);
    try{
        const response = await cashfree.PGOrderFetchPayments(orderId)
        console.log('Order fetched successfully:', response.data[0].payment_status);
        res.send(`
      <h2 style="color:green">Payment ${response.data[0].payment_status}</h2>
      <p>Order ID: ${orderId}</p>
    `);

    }catch(error){
        console.log("unable to fetch data!");

    }

}

module.exports = {
    processPayment,
    getPaymentStaus,
};