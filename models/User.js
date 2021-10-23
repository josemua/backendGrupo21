const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email:{type: String, required:true, unique:true},
        password:{type: String, required:true, unique:true},
        isAdmin:{
            type:Boolean, 
            default: false,
        },
        status: {type: String, default: "pendiente"},
        username:{type: String},
        img: {type: String}
    },
    { timestamps : true },
);

module.exports = mongoose.model("User", UserSchema);