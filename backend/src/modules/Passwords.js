import mongoose, { mongo } from "mongoose";

const PasswordsSchema = mongoose.Schema({
    "Name":{type:String,required:true},
    "Description":{type:String},
    "Password":{type:String,required:true}
})

const PasswordM = mongoose.model("Passwords",PasswordsSchema)

export{PasswordM}