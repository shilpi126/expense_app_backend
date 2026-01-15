const { Cashfree, CFEnvironment } = require("cashfree-pg");

const cashfree = new Cashfree(CFEnvironment.SANDBOX, "TEST430329ae80e0f32e41a393d78b923034", "TESTaf195616268bd6202eeb3bf8dc458956e7192a85");

const createOrder = async(orderId,orderAmount, orderCurrency,customerId,customerPhone) => {
    
    try{
        const request = {
    "order_amount": orderAmount,
    "order_currency": orderCurrency,
    "order_id": orderId,
    "customer_details": {
        "customer_id": customerId,
        "customer_phone": customerPhone
    },
    "order_meta": {
        "return_url": `http://localhost:4000/payment/payment_status/${orderId}`,
        "payment_methods": "cc,dc,upi"
    },
    //"order_expiry_time": "2026-01-15T08:35:06.456Z"
};

   const response = await cashfree.PGCreateOrder(request);

    console.log("Order created successfully:", response.data);

    
    return response.data.payment_session_id;
    
    }catch(err){
    console.log('Order payment failed :', err);
    }
    
}

module.exports = {createOrder};

