const mongoose = require("mongoose")

const slider = mongoose.Schema({
imageUrl:String,
profile:String
})

module.exports=mongoose.model("slider",slider)