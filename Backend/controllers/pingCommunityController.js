const User = require('../models/User');

exports.pingMembers = async function(req, res) {
    
    await User.updateMany({ '_id': { $in: req.body.members}}, { $push: {notifications: {first_name : req.body.first_name, last_name: req.body.last_name, image: req.body.image, latitude: req.body.latitude, longitude: req.body.longitude}} });
    
    return res.status(200).json({message: "Successfully sent notification"})
    
}


