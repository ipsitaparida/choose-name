import express from 'express'

const router = express.Router();
router.get('/',(req,res) => {
    res.send({data: ['sample data', 1] })
})

export default router