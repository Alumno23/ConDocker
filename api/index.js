import express from 'express'

const router = express.Router()

router.get('/', function (req, res, next) {
    res.header('Content-Type', 'application/json')
    res.send({message: 'WElcom to the ARAGON SKILLS 2023'})
})
export default router