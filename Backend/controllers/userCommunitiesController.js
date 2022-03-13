const Community = require('../models/Community');

exports.getCommunities = function(req, res) {
    
    Community.find({ '_id': { $in: req.body.communities}}).then((community)=>{
        return res.status(200).json(community)
        }).catch((err) => res.send({message: "Something is wrong"}))
    }

