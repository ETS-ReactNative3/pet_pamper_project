const User = require('../models/User');

exports.getNotifications = function(req, res) {
    
    User.find({'token': req.body.token},{notifications: 1}).then((notifications)=>{
        return res.status(200).json(notifications)
        }).catch((err) => res.send({message: "Something is wrong"}))
    }