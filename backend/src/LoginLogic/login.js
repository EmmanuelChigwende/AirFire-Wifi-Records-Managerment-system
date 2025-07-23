import { Compare } from "../Authentication/Decrypt.js";
import { User } from "../modules/User.js";

async function CheckUser(req,res) {
    try{
        const {Username,Password} = req.body

        if(!Username || !Password){
            return res.status(401).send("fill in all fields")
        }
        const exist =  await User.findOne({Username})
        if(!exist){
            return res.status(403).send("User does not exist ,access denied")
        }

        const verified = await Compare(Password,exist.Password)
        if(!verified){
            return res.status(403).send("access denied")
        }
        return res.status(200).send(`successfully logged in as ${Username}`)
    }
    catch(error){
        console.log(error)
    }
}

export {CheckUser}
