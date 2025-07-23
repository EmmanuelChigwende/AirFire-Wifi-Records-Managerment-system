import express from 'express'

import { ReadRecords,NewRecord } from '../routes/RoutesLogic.js'

const router = express.Router()

router.get('/',ReadRecords)
router.post('/new',NewRecord)



export {router}