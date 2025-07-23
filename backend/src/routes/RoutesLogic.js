import { record } from "../modules/Layout.js";

async function ReadRecords(req,res) {
    try{
        const readRecord = await record.find()
        res.status(200).json(readRecord)
    }
    catch(error){
        console.log(error)
        return res.status(500).send("failed to fetch data")
    }
}


async function NewRecord(req,res) {
    try{
        if(req.body === ""){
            return res.status(401).send("fill in all fields")
        }
        else{
            const newRec = new record(req.body) 
            await newRec.save()
            res.status(200).send("new data added")
        }

    }
    catch(error){
        console.log(error)
        return res.status(500).send("failed to create new")
    }
}

export {ReadRecords,NewRecord}