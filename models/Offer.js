const mongoose = require("mongoose")
const User = require("./User")

const offerSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the title of service"]
    },
    img:{
        type:String,
        required:[true,"Featured image is required"]
    },
    body:{
        type:String,
        required:[true,"Service description is required"],
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:[true,"Creator is required"]
    }

})


const Offer = mongoose.model("offer",offerSchema);

module.exports = Offer