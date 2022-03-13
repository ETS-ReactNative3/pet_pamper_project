const User = require('../models/User')


exports.addUser = (req, res) => { 
    //Check if any of the fields is missing
    try {
        if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.password || !req.body.phone_number || !req.body.gender) {
            return res.status(400).json({message: "Please don't leave any field empty"})
        }
    } catch (err) {
        res.send({message: err})
    }

    // Search if the user exist in the database using email parameter
    User.findOne({email: req.body.email}).then((user)=>{

        //Send that email already exist or add the user to the database
        try{
            if (user) {
                return res.status(400).json({message: "user email already exists"})
            }else {
                const newUser = new User({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: req.body.password,
                    phone_number: req.body.phone_number,
                    gender: req.body.gender
                })

                newUser.save()
                return res.status(200).json({message: "Successfully added user"})
            }
        }catch(err) {res.send(err)}
    })
}

