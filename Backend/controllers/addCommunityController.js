const User = require('../models/User')

exports.addCommunity = function(req, res) {

    User.findOne({'token': req.body.token}).then((user)=>{
        if (user) {           
            user.communities.push(req.body.id)
            user.save()

            return res.status(200).json({message: "Successfully added community"})
        }else{
            return res.status(400).json({message: "You don't have access"})
        }
    }).catch(() => res.send({message: "JWT is wrong"}))
}
