const User = require('../models/User')

exports.statusUpdate = function(req, res) {

    User.findOne({'token': req.body.token}).then((user)=>{
        if (user) {           
            const updateUser = user.set({
                status: req.body.status,
            })
            updateUser.save()
            return res.status(200).json({message: "Successfully updated user status"})
        }else{
            return res.status(400).json({message: "You don't have access"})
        }
    }).catch((err) => res.send({message: "JWT is wrong"}))
}
