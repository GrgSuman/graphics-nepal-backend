const mongoose = require("mongoose")
const validator = require("validator")
const bcrtpt = require("bcrypt")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        minlength:[6,"Mininum password length is 6"]
    },
    location:{
        type:String,
        required:[true,"Please select your location"],

    },
    role:{
        type:String,
        required:[true,"Please select one role option"],
    },
})

//mongoose hook, pre,post(before and after saving data )
//hashing password
userSchema.pre("save",async function(next){

    const salt = await bcrtpt.genSalt();
    this.password = await bcrtpt.hash(this.password,salt);

    next();
})


const User = mongoose.model("user",userSchema);



module.exports = User