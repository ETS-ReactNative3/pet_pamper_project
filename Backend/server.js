const express = require('express');
const app = express();
const usersRoute = require('./routes/users_route');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/user', usersRoute);

app.listen(3000);