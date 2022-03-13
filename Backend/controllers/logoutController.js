const User = require('../models/User')

exports.logOut = function(req, res) {

    User.findOne({'token': req.body.token}).then((user)=>{
        if (user) {           
            const logOutUser = user.set({
                online: false,
                token: ""
            })
            logOutUser.save()
            return res.status(200).json({message: "Successfully logged out"})
        }else{
            return res.status(400).json({message: "You don't have access"})
        }
    }).catch((err) => console.log(err))
}
