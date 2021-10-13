const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{type: String, required:false, unique:true},
        email:{type: String, required:true, unique:true},
        password:{type: String, required:true, unique:true},
        isAdmin:{
            type:Boolean, 
            default: false,
        },
        status: {type: String, default: "pendiente"},
    },
    { timestamps : true }
);

module.exports = mongoose.model("User", UserSchema);