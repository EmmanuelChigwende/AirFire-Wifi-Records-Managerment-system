import express from 'express'
import {CreatePassword,ReadPassword,UpdatePassword,DeletePassword} from '../routes/PasswordsLogic.js'
const PassWordListRoute = express.Router()

PassWordListRoute.get('/',ReadPassword)

PassWordListRoute.post('/new',CreatePassword)

PassWordListRoute.put('/update/:id',UpdatePassword)

PassWordListRoute.delete('/delete/:id',DeletePassword)

export {PassWordListRoute}