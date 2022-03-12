const express = require('express')
const app = express()
const signupController = require('../controllers/signupController')
const statusController = require('../controllers/statusController')

app.post('/signup', signupController.addUser)
app.post('/status', statusController.statusUpdate)

module.exports = app