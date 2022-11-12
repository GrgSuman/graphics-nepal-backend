const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://sumanmongogn:sumanmongogn@graphics-nepal.wtcya.mongodb.net/graphicsnepal?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connected to DB successfully")
}).catch((e)=>{
   console.log("No connection "+e)
})