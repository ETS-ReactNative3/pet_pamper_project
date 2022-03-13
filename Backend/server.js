require('dotenv').config();
const express = require('express');
const app = express();
const usersRoute = require('./routes/users_route');
const communitiesRoute = require('./routes/communities_route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const res = require('express/lib/response');

// Database connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (error)=> {console.log(error)})
db.once('open', ()=> {console.log('connected to database')})

// Body parser content-type urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// Router
app.use('/user', usersRoute);
app.use('/community', communitiesRoute);

// Listen to the port
try{
    app.listen(parseInt(process.env.PORT))
}catch(err) {res.send({message: "Something is wrong with the server connection"})}
