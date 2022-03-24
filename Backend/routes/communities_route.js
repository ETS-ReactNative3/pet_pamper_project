const express = require('express')
const app = express()
const {body, validationResult} = require('express-validator')

const communityController = require('../controllers/communityController')


//Create community route
app.post('/create_community', communityController.createCommunity)

module.exports = app