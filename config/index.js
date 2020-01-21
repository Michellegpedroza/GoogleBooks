//Mongo DB configuration
const MONGODB_URI = "mongodb://localhost/googlebooks"
module.exports = require('mongoose')
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })