const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
 category:{
     type: mongoose.Schema.Types.ObjectId,
    ref:'Category'},
    genres:{
        type:String,
        default:""
    },
 file_size:{
     type:String,
     default:""
 },
 director:{  
     type:String,
    default:""
},

writers:{  
    type:String,
    default:""
},

stars:{  
    type:String,
    default:""
},
 rating:{
     type:String,
     default:""
 },
 release_date:{
     type:String,
     default:""
 },
 language:{
     type:String,
     default:""
 },
 views:{
     type:Number,
     default:""
 },
 title:{
     type:String,
     default:""
 },
image_url:{
    type:String,
    default:""
},
description:{
    type:String,
    default:""
},
video_url:{
    type:String ,
    default:""
},
is_popular:{
    type:Boolean,
    default:false
},
is_featured:{
    type:Boolean,
    default:false
}
});

const Movie = mongoose.model('Movie',MovieSchema);
module.exports = Movie;