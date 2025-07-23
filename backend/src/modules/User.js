import mongoose, { MongooseError } from 'mongoose'

const UserSchema = mongoose.Schema({
    "Username": {type:"String", required:true},
    "Password": {type:"String",required:true}
})


const User = mongoose.model("User",UserSchema)

export {User}