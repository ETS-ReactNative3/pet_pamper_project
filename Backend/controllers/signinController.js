require('dotenv').config()

const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.getUser = function(req, res) {
    //Search for the using email and password attributes
    User.findOne({email: req.body.email, password: req.body.password}, {first_name:1, last_name:1, email:1, password:1, status:1, online:1, token:1}).then((user)=>{
        
        // check if the user entered an invalid email/password or return user information
        if (!user) {
            return res.status(400).json({message: "Please enter a valid email or password"})
        }else {
            const email = req.body.email
            const user_email = {name: email}
            const token = jwt.sign(user_email, process.env.ACCESS_TOKEN)

            const updateUser = user.set({
                token: token,
                online: true,          
            })

        updateUser.save()
        return res.status(200).json(user)
        }
    })
}
