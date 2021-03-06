const express = require('express')

const Status = require("../Models/status")
const router = express.Router()




router.post('/',(req , res)=>{
    const statusObj ={
        status:req.body.status,
        is_active:req.body.is_active
    }
    const status = new Status (statusObj)

    status.save()
    .then(status=>res.status(200).json(status))
    .catch(error=>res.status(500).json(error))
})

router.get('/',(req , res)=>{
    Status.find()
    .then(status=>res.status(200).json(status))
    .catch(error=>res.status(500).json(error))
    
})

router.get('/:id',(req , res)=>{
    Status.findOne({_id:req.params.id})
    .then(status=>{
        if(status){
        status.is_active = !status.is_active
        }
        status.save()
        .then(status=>res.status(200).json(status))
        .catch(error=>res.status(500).json(error))
    })

    .catch(error=>res.status(500).json(error))

})


module.exports = router