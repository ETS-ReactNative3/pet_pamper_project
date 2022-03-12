const express = require('express')
const app = express()

const signupController = require('../controllers/signupController')
const statusController = require('../controllers/statusController')
const signinController = require('../controllers/signinController')

app.post('/signup', signupController.addUser)
app.post('/signin', signinController.getUser)
app.post('/status', statusController.statusUpdate)

module.exports = app