const express = require('express')
const mongoose = require('mongoose')
const Movie = require("../Models/movie")
const router = express.Router()



router.get('/',(req , res)=>{
    Movie.find()
    .limit(200)
    .then(movies=>res.status(200).json(movies))
    .catch(error=>res.status(500).json(error))
    
})


router.get('/popular',(req , res)=>{
    Movie.find({is_popular:true})
    .populate('category')
    .then(movies=>res.status(200).json(movies))
    .catch(error=>res.status(500).json(error))
})

router.get('/featured',(req , res)=>{
    Movie.find({is_featured:true})
    .populate('category')
    .then(movies=>res.status(200).json(movies))
    .catch(error=>res.status(500).json(error))
})




router.post('/',(req,res)=>{
    const movieObj ={
        category:req.body.category,

        genre:req.body.genre,

        file_size:req.body.file_size,

        imdb_rating:req.body.imdb_rating,

        file_type:req.body.file_type,
    
        release_date:req.body.release_date,

        language:req.body.release_date,

        views:req.body.views,

        title:req.body.title,

        image_url:req.body.image_url,

        description:req.body.description,

        video_url:req.body.video_url

    }

    const movie = new Movie (movieObj)

    movie.save()
    .then(movie=>res.status(200).json(movie))
    .catch(error=>res.status(500).json(error))
})


router.put('/:id',(req,res)=>{
    const{category ,genre,file_size,
        imdb_rating,file_type,release_date,
        language,views,title,image_url,
        description,video_url,is_popular,is_featured}=req.body

        Movie.findOne({_id:req.params.id})
        .then(movie=>{
            if(category){
                movie.category = category
            }
            if(genre){
                movie.genre = genre
            }
            if(file_size){
                movie.file_size = file_size
            }
            if(imdb_rating){
                movie.imdb_rating = imdb_rating
            }
            if(file_type){
                movie.file_type= file_type
            }
            if(release_date){
                movie.release_date = release_date
            }
            if(language){
                movie.language = language
            }
            if(views){
                movie.views = views
            }
            if(title){
                movie.title= title
            }
            if(image_url){
                movie.image_url = image_url
            }
            if(description){
                movie.description = description
            }
            if(video_url){
                movie.video_url = video_url
            }
            movie.is_popular = is_popular
            movie.is_featured = is_featured
            
            movie.save()
            .then(movie=>res.status(201).json(movie))
            .catch(error=>res.status(500).json(error))
        })
    
        .catch(error=>res.status(500).json(error))

})


router.delete('/:id',(req , res)=>{
    Movie.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({"message":"Movie Deleted"}))
    .catch(error=>res.status(500).json(error))
    
})

router.get('/:id',(req, res)=>{
    console.log(req.params)
    Movie.findOne({_id:req.params.id})
   .then(movie=>res.status(200).json(movie))
   .catch(error=>res.status(500).json(error))
    
})


router.get('/:id/increaseView',(req, res)=>{
    console.log(req.params)
    Movie.findOneAndUpdate({_id:req.params.id}, { $inc: { views: 1 }})
   .then(movie=>res.status(200).json(movie))
   .catch(error=>res.status(500).json(error))
    
})

module.exports = router
