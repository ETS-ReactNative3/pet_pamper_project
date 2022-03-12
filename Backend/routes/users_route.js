const express = require('express')
const app = express()

app.get('/signup', (req,res) => {
    res.send('hellos world')
})

module.exports = app