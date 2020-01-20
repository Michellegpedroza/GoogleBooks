//Require Packages
require('dotenv').config()
const { join } = require('path')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

//Define Middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Add Routes
require('./routes')(app)

//Connect to the MongoDB
require('mongoose')
  .connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/googlebooks')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(e => console.error(e))
