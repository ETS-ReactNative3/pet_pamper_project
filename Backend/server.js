const express = require('express')
const app = express()
const users_route = require('./routes/users_route')

app.use('/user', users_route)

app.listen(3000)