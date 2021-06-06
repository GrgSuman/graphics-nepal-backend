const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")


//middleware
app.use(express.json())

app.use(cookieParser())


//db connection and .env
require('dotenv').config()
require("./config/conn")

const PORT = process.env.PORT 


//my all routes
const auth = require("./routers/authRoutes")


app.get("/",(req,res)=>{
    res.json("Welcome to index page")
})

app.use(auth)



app.listen(PORT,()=>{
    console.log("running at port : "+PORT)
})