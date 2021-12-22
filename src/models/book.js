import mongoose from "mongoose";
const bookSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    tour:{
        type:mongoose.Schema.ObjectId,
        ref:"Tour"

    },
    status:{
        type:String,
        enum:["pending","accepted","declined",],
        default:"pending"

    }
})