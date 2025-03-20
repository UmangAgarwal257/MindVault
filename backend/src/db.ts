import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    username : { type : String , required : true, unique : true},
    password : { type : String , required : true, unique : true}
})

