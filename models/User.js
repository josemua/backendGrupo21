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
    },
    { timestamps : true },
    {
        username:{type: String},
        img: {type: String},
}
);

module.exports = mongoose.model("User", UserSchema);