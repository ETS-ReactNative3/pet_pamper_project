const User = require('../models/User');

exports.getPetShops = function(req, res) {
    
    User.find({account_type: 'Pet Shop'}).then((pet_shops)=>{
        return res.status(200).json(pet_shops)
        }).catch((err) => res.send({message: "Something is wrong"}))
    }
