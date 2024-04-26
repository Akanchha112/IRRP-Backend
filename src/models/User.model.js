import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        userEmail:{
            type:String,
            required:true,
            unique:true,
            trim: true,
            index: true
        },
        userFullname:{
            type:String,
            required:true,
            trim: true,
            index:true
        },
        userPassword:{
            type:String,
            required:true
        },
    }
)