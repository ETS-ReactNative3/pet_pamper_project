const User = require('../models/User');

exports.getVeterinaries = function(req, res) {
    
    User.find({account_type: 'veterinary'}).then((veterinaries)=>{
        return res.status(200).json(veterinaries)
        }).catch((err) => res.send({message: "Something is wrong"}))
    }
