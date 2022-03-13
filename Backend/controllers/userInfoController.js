const User = require('../models/User')

exports.infoUpdate = function(req, res) {
    try {
        if (!req.body.first_name || !req.body.last_name || !req.body.password) {
            return res.status(400).json({message: "Please don't leave any field empty"})
        }
    } catch (err) {
        res.send({message: err})
    }

    User.findOne({'token': req.body.token}).then((user)=>{
        if (user) {           
            const updateUserInfo = user.set({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: req.body.password,
            })
            updateUserInfo.save()
            return res.status(200).json({message: "Successfully updated user information"})
        }else{
            return res.status(400).json({message: "You don't have access"})
        }
    }).catch((err) => res.send({message: "JWT is wrong"}))
}
