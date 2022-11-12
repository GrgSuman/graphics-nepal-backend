const mongoose = require("mongoose")
const User = require("../models/User")

const jobSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the title of service"]
    },
    body:{
        type:String,
        required:[true,"Service description is required"],
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:[true,"Creator is required"]
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
    }

})


const Job = mongoose.model("job",jobSchema);

module.exports = Job