const mongoose = require("mongoose")

const PersonalSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    age:{type:String,required:true},
    height:{type:String,required:true,unique:true},
    weight:{type:String,required:true},
    gender:{type:String,required:true},
})
module.exports = mongoose.model("personalDetail",PersonalSchema)