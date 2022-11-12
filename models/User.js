const mongoose = require("mongoose")
const validator = require("validator")
const bcrtpt = require("bcrypt")

<<<<<<< HEAD




=======
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438
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
<<<<<<< HEAD

    workTitle:{
        type:String,
        default:""
    },

    description:{
        type:String,
        default:""
    },

    education:{
        type:String,
        default:""
    },

    skills:[],

    accountStatus:{
        type:Boolean,
        default:false
    },
    uploads:[ ],

})


=======
})

//mongoose hook, pre,post(before and after saving data )
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438
//hashing password
userSchema.pre("save",async function(next){

    const salt = await bcrtpt.genSalt();
    this.password = await bcrtpt.hash(this.password,salt);

    next();
})


<<<<<<< HEAD
//static method

userSchema.statics.login = async function (email,password){
    const user = await this.findOne({email}) //this is user User

    if(user){
         const auth = await bcrtpt.compare(password,user.password)
         if(auth){
             if(user.accountStatus){
                 return user
             }
             throw Error("Please verify your email")
         }
         throw Error("Password is incorrect")
    }
    throw Error("Email doesnot exist")
}


=======
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438
const User = mongoose.model("user",userSchema);



module.exports = User