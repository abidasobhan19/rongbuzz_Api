const express = require('express')
const mongoose = require('mongoose')
const Genre = require("../Models/genre")

const router = express.Router()



router.get('/',(req , res)=>{
   Genre.find()
   .then(genre=>res.status(200).json(genre))
   .catch(error=>res.status(500).json(error))
   
})

router.post('/', (req , res)=>{
    const GenreObj = {
       name : req.body.name
    }   
   
    const genre = new Genre(GenreObj)
    
    genre.save()
   .then(genre=>res.status(200).json(genre))
   .catch(genre=>res.status(500).json(genre))
})








module.exports = router