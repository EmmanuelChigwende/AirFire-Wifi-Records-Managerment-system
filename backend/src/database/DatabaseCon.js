import mongoose from 'mongoose'

async function Connection(){
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/Airfibre")
        console.log("connectioned successfully")
    }
    catch(error){
        console.log("failed to connect to database")
    }
}

export {Connection}