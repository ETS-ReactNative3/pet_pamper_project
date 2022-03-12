const express = require('express')
const app = express()
const signupController = require('../controllers/signupController')

app.post('/signup', signupController.addUser)

module.exports = app