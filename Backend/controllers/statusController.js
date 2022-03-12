const User = require('../models/User')

exports.statusUpdate = function(req, res) {
    User.findById(req.body.id).then((user)=>{
        if (user) {
            
            const updateUser = user.set({
                status: req.body.status,
            })
            updateUser.save()
            return res.status(200).json({message: "Successfully updated user"})
        }
    })
}
