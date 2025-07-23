import bcrypt from 'bcrypt'
import { User } from '../modules/User.js'

async function Compare(password,DatabasePass) {
    try{
        return await bcrypt.compare(password,DatabasePass)
    }
    catch(error){
        console.log(error)
    }
}

export {Compare}