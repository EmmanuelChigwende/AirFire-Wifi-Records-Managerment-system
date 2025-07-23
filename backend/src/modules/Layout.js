import mongoose from 'mongoose'

const schema  = mongoose.Schema({
    "purchased by":{type:"String",required:true},
    "router number": {type:"String",required:true},
    "pppoe account name":{type:"String",required:true},
    "subscription start":{type:"String",required:true},
    "subscription end":{type:"String",required:true},
},{timestamps:true})


const record = mongoose.model("records",schema)

export {record}