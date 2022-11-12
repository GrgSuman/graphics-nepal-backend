const User = require("../models/User")
const jwt = require("jsonwebtoken")


const handleError = (err)=>{
    let errors = {
        name:"",email:"",location:"",password:"",role:""
    }

    if(err.code===11000){
        errors.email="Email already exists"
        return errors
    }

    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
          errors[properties.path] = properties.message
        })
    }

    return errors

}

const maxAge = 2*24*60*60;

const createToken = (id)=>{
    return jwt.sign({id},"my secret key",{
        expiresIn:maxAge
    })
}


<<<<<<< HEAD
module.exports.login=async (req,res)=>{
    const{email,password} = req.body;

    try{

        const user = await User.login(email,password)
            const token = createToken(user._id)
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
            res.cookie('__d',user._id,{httpOnly:true,maxAge:maxAge*1000})
            res.status(200).json("Logged In Successfully")
    }
    catch(err){
        console.log(err.message)
        return res.status(400).json({err:err.message})
    }
   
=======
module.exports.login=(req,res)=>{
    const{email,password} = req.body;
    console.log(`email: ${email} password: ${password}`)
    res.json({"name":"Login"})
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438
}

module.exports.signup= async (req,res)=>{
    const{email,password,fullName,location,workAs} = req.body;

    try{
<<<<<<< HEAD
    const user = await User.create({name:fullName,email,password,location,role:workAs})
    // const token = createToken(user._id)
    // res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
    res.status(201).json("Account created, now please verify your email.")
    }
    catch(err){
        const errors = handleError(err)
        res.status(400).json(errors)
    }

}

module.exports.logout = (req,res)=>{
    res.cookie("jwt","",{maxAge:1})
    res.status(201).json("Logged out successfully")
=======

    const user = await User.create({name:fullName,email,password,location,role:workAs})
    const token = createToken(user._id)
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
    res.status(201).json(user._id)


    }
    catch(err){

        const errors = handleError(err)
        res.status(400).json(errors)

    }

>>>>>>> 58edde5cf0694d9f952948815776383bc846b438
}