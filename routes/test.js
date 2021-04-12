const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()



router.post('/',(req , res)=>{
     
    console.log(req.body);
     

    res.send("hello world")
    
})



module.exports = router