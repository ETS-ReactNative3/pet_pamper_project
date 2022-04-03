const User = require('../models/User');

exports.getPushTokens = function(req, res) {
    
    User.find({ '_id': { $in: req.body.members}}, {push_token: 1}).then((members_push_tokens)=>{
        return res.status(200).json(members_push_tokens)
        }).catch((err) => res.send({message: "Something is wrong"}))
    }
