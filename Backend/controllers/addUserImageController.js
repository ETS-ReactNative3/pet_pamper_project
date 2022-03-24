const User = require('../models/User')

exports.imageUpdate = function(req, res) {

    User.findOne({'token': req.body.token}).then((user)=>{
        if (user) {           
            const updateUserImage = user.set({
                image: req.body.image,
            })
            updateUserImage.save()
            return res.status(200).json({message: "Successfully updated user image"})
        }else{
            return res.status(400).json({message: "You don't have access"})
        }
    }).catch((err) => console.log(err))
}