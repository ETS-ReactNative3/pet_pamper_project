const express = require('express')
const app = express()
const {body, validationResult} = require('express-validator')

const communityController = require('../controllers/communityController')


//Create community route
app.post('/createCommunity', communityController.addCommunity)

module.exports = app