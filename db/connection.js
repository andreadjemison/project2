// requirements: import mongoose
const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost/project2", { useNewUrlParser: true})
  .then(() => {
    console.log("mongo is working");
  })

// export your mongoose connection
module.exports = mongoose;