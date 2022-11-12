const jwt = require("jsonwebtoken");
const User = require('../models/User')
const Offer = require("../models/Offer")
const Job = require("../models/Job");
const mongoose = require("mongoose");



const handleError = (err)=>{
  let errors = {
     
  }
  if(err.message.includes("job validation failed")){
      Object.values(err.errors).forEach(({properties})=>{
        errors[properties.path] = properties.message
      })
  }

  return errors

}

module.exports.information = async(req,res)=>{

   const {name,jobTitle,location} =req.body;

   if(name==="" || location===""){
       res.json("Please don't leave the fields blank")
   }
   else{
    
    try{
        const user = await User.findById(req.params.id)
        user.location=location
        user.name=name
        user.workTitle=jobTitle
        const usr = await user.save()
        res.json(usr)
    }
    catch(e){
      res.json(e)
    }
    
   }
}

module.exports.userStatus = async(req,res)=>{

     try{
         const user = await User.findById(req.params.id)
         user.accountStatus=!user.accountStatus
         const usr = await user.save()
         res.json(usr)
     }
     catch(e){
       res.json(e)
     }
}



module.exports.description = async(req,res)=>{

    try{
        const user = await User.findById(req.params.id)
        user.description=req.body.description
        const usr = await user.save()
        res.json(usr)
    }
    catch(e){
      res.json(e)
    }


}

module.exports.skills = async(req,res)=>{

    try{
        const user = await User.findById(req.params.id)
        user.skills=req.body.skills
        const usr = await user.save()
        res.json(usr)
    }
    catch(e){
      res.json(e)
    }


}

module.exports.education = async(req,res)=>{

  try{
    const user = await User.findById(req.params.id)
    user.education=req.body.education
    const usr = await user.save()
    res.json(usr)
}
catch(e){
  res.json(e)
}


}


module.exports.offer = async(req,res)=>{

  const{title,img,body} = req.body;

  try{
    const offer = await Offer.create({
      title,img,body,createdBy:req.params.id
    })
    res.json(offer)
  }
  catch(err){
    res.json(err.message)
  }

}

module.exports.job = async(req,res)=>{

  const{title,body} = req.body;

    try{
      //id check gareko mongo ko try ma huna parxa natra unhandled promise err auauxa
      if(mongoose.Types.ObjectId.isValid(req.params.id)){  
        const job = await Job.create({
          title,body,createdBy:req.params.id
        })
        res.status(201).json(job)
      }
      res.json("Janne nahu")
    }

    catch(err){
        const error = handleError(err)
        res.json(error)
    }
}

