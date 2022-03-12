const express = require('express')
const app = express()

app.get('/signup', (req,res) => {
    res.send(req.body)
})

module.exports = app