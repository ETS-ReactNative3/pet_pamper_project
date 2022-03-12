const User = require('../models/User')

exports.getUser = function(req, res) {
    User.findOne({email: req.body.email, password: req.body.password}, {first_name:1, last_name:1, email:1, password:1, status:1, online:1}).then((user)=>{
        if (!user) {
            return res.status(400).json({message: "Please enter a valid email or password"})
        }else {
            const updateUser = user.set({
                online: true,
            })
            updateUser.save()
            return res.status(200).json(user)
            }
    })
}
