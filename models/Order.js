const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String, required:true},
        products:[
            {
                productId:{
                    type:String,
                },
                price:{
                    type:Number,
                    default: 1,
                },
                quantity:{
                    type:Number,
                    default: 1,
                },
            },
        ],
        amount: {type: Number, required: true},
        address: {type: Object, required: true},
        status: {type: String, default: "Procesando"},
    },
    { timestamps : true }
);

module.exports = mongoose.model("Order", OrderSchema);