const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
<<<<<<< HEAD
const bodyParser = require('body-parser');
=======
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438


//middleware
app.use(express.json())
<<<<<<< HEAD
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
=======

app.use(cookieParser())
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438


//db connection and .env
require('dotenv').config()
require("./config/conn")
<<<<<<< HEAD
const authMiddleware = require("./middleware/authMiddleware")
=======
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438

const PORT = process.env.PORT 


//my all routes
const auth = require("./routers/authRoutes")
<<<<<<< HEAD
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


=======


app.get("/",(req,res)=>{
    res.json("Welcome to index page")
})

app.use(auth)
>>>>>>> 58edde5cf0694d9f952948815776383bc846b438



app.listen(PORT,()=>{
    console.log("running at port : "+PORT)
})