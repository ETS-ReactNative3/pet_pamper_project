const Community = require('../models/Community');

exports.getAllCommunities = function(req, res) {
    
    Community.find().then((communities)=>{
        return res.status(200).json(communities)
        }).catch((err) => res.send({message: "Something is wrong"}))
    }