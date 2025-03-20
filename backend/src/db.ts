import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    username : { type : String , required : true, unique : true},
    password : { type : String , required : true}
})

const tagSchema = new Schema({
    title : { type : String, required : true, unique : true}
})

const contentSchema = new Schema({
    link : {type : String , required : true},
    type : {type : String },
    title : {type : String , required : true},
    tags : [{type : ObjectId , ref : 'Tag'}],
    userId : {type : ObjectId , ref : "User", required : true}
})

const linkSchema = new Schema({
    hash : {type : String , required : true},
    userId : {type : ObjectId , ref : "User", required : true}
})

export const UserModel = mongoose.model("User", userSchema);
export const TagModel = mongoose.model("Tag", tagSchema);
export const ContentModel = mongoose.model("Content", contentSchema);
export const LinkModel = mongoose.model("Link", linkSchema);

