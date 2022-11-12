const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser');


//middleware
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


//db connection and .env
require('dotenv').config()
require("./config/conn")
const authMiddleware = require("./middleware/authMiddleware")

const PORT = process.env.PORT 


//my all routes
const auth = require("./routers/authRoutes")
const user = require("./routers/userProfileRouters");
const User = require("./models/User");


app.get("/test",authMiddleware, async(req,res)=>{

    let userInfo={}

    try{
      const user = await User.findOne({_id:req.userID}) 
      userInfo.id=user._id
      userInfo.name=user.name
      userInfo.email=user.email
      userInfo.location=user.location
      userInfo.skills=user.skills
      userInfo.uploads=user.uploads
      userInfo.degree=user.education
      userInfo.userDesc=user.description
      userInfo.role=user.role
      userInfo.workTitle=user.workTitle
      res.json(userInfo)
    }
    catch(er){
       res.json("error")
    }
})

//implementing routes
app.use(auth)
app.use("/user",user)





app.listen(PORT,()=>{
    console.log("running at port : "+PORT)
})