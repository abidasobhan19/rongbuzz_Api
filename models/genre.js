const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
 
  create_date:{
    type:Date,
    default:Date.now
}
});

const Genre = mongoose.model('Genre',GenreSchema);
module.exports = Genre;