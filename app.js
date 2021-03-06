const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Category = require('./Routes/category')
const Movie = require('./Routes/movie')
const Genre = require('./routes/genre')
const Test = require('./routes/test')

require("./initDB")

app.use(bodyParser.json());
// app.use('/Movies', express.static(__dirname + '/Movies'));

// For Support Cross Origin Request
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","*"); // '*' for any
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    return res.status(200).json({});
  }

  next();
});



app.use('/categories',Category)
app.use('/movies',Movie)
app.use('/genre',Genre)
app.use('/test',Test)
// app.use('/genre',Genre)



app.listen(3000,()=>{

    console.log("api started");

})