const User = require('../models/User')
const Community = require('../models/Community')

exports.addCommunity = function(req, res) {

    User.findOne({'token': req.body.token}).then((user)=>{
        if (user) {           
            user.communities.push(req.body.id)
            user.save()
        }else{
            return res.status(400).json({message: "You don't have access"})
        }
    }).catch(() => res.send({message: "JWT is wrong"}))
    
    Community.findOne({'_id': req.body.id}).then((community)=>{
        if (community) {           
            community.members.push(req.body.user_id)
            community.save()
            return res.status(200).json(community)
        }
    }).catch(() => res.send({message: "JWT is wrong"}))
    
}