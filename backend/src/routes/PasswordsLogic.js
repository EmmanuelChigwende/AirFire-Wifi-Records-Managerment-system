import { PasswordM } from "../modules/Passwords.js"

async function ReadPassword(req,res) {
    try{
        const SavedPasswords  = await PasswordM.find()
        return res.status(200).send(SavedPasswords)
    }
    catch(error){
        console.log(error)
        return res.status(500).send("failed to get saved passwords")
    }
}

async function CreatePassword(req,res) {
    try{
            const NewPassword = req.body
            if(!NewPassword){
             return res.status(401).send("Please fill in all the required fields")
            }

            const BeforeSave = new PasswordM(NewPassword)
            await BeforeSave.save()
            return res.status(201).send("new password list created successfully")
    }
    catch(error){
        console.log(error)
        return res.status(500).send("failed to  create  new Password list")
    }
}

async function UpdatePassword(req,res) {
    try{
        const {id} = req.params
        const update = req.body
        if(!id){
           return req.status(404).send("Object does not exist..")
        }
        const Updated = await PasswordM.findByIdAndUpdate(id,update,{new:true})
        return res.status(200).send("password list updated successfully...")
    }
    catch(error){
        console.log(error)
        return res.status(500).send("failed to save changes")
    }
}

async function DeletePassword(req,res) {
    try{
        const {id} = req.params
        if(!id){
            return res.status(404).send("object does not exist")
        }
        await PasswordM.findByIdAndDelete(id)
        return res.status(200).send("passowrd list deleted successfully")
    }
    catch(error){
        console.log(error)
        return res.status(500).send("failed to save changes")        
    }
}

export {CreatePassword,ReadPassword,UpdatePassword,DeletePassword}