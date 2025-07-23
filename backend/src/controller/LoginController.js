import express from 'express'
import { CheckUser } from '../LoginLogic/login.js'

const LoginRouter = express.Router()

LoginRouter.post("/",CheckUser)

export {LoginRouter}