const Community = require('../models/Community')


exports.addCommunity = (req, res) => { 
    //Check if any of the fields is missing
    try {
        if (!req.body.name || !req.body.token || !req.body.id || !req.body.account_type) {
            return res.status(400).json({message: "Please don't leave any field empty"})
        }
    } catch (err) {
        res.send({message: err})
    }

    // Search if the user exist in the database using email parameter
    Community.findOne({name: req.body.name}).then((community)=>{

        //Send that email already exist or add the user to the database
        try{
            if (community) {
                return res.status(400).json({message: "name already exists"})
            }else {
                if(req.body.account_type == 'pet walker') {
                    const newCommunity = new Community({
                        name: req.body.name,
                        $push: {members: req.body.id}
                    })

                    newCommunity.save()
                    return res.status(200).json({message: "Successfully added community"})
                }else {return res.status(400).json({message: "You are not a pet walker"})}
            }
        }catch(err) {res.send(err)}
    })
}

