import express from 'express'
import { CreateUser } from '../routes/UserLogic.js'
const UserRoutes = express.Router()

UserRoutes.post('/',CreateUser)


export {UserRoutes}