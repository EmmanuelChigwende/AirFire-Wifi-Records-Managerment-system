import express from 'express'
import cors from 'cors'

import {router} from './controller/routeController.js'
import { Connection } from './database/DatabaseCon.js'
import { UserRoutes } from './controller/UserController.js'
import { LoginRouter } from './controller/LoginController.js'
import { PassWordListRoute } from './controller/PasswordController.js'
const server = express()

server.use(cors(" http://localhost:5173/"))
server.use(express.json())
server.use('/',router)
server.use('/login',LoginRouter)
server.use('/User',UserRoutes)
server.use('/password',PassWordListRoute)

Connection().then(
    server.listen(5002,()=>{
        console.log("server is running on http://localhost:5002")
    })
)