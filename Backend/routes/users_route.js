const express = require('express')
const app = express()
const {body, validationResult} = require('express-validator')

const signupController = require('../controllers/signupController')
const statusController = require('../controllers/statusController')
const signinController = require('../controllers/signinController')
const userCommunitiesController = require('../controllers/userCommunitiesController')
const petShopController = require('../controllers/petShopController')
const veterinariesController = require('../controllers/veterinariesController')
const userInfoController = require('../controllers/userInfoController')

//Signup route
app.post('/signup', body('email').isEmail(), body('password').isLength({min: 8}), (req, res) => { 
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).send({message: 'Invalid email address or password. Please try again.'})
    }
    signupController.addUser(req,res)
})

//Signin route
app.post('/signin', signinController.getUser)

//Status update route
app.post('/status', statusController.statusUpdate)

//Show communities
app.post('/communities', userCommunitiesController.getCommunities)

//Show pet shops
app.post('/pet_shops', petShopController.getPetShops)

//Show veterinaries
app.post('/veterinaries', veterinariesController.getVeterinaries)

//Update user information
app.post('/info_update', userInfoController.infoUpdate)

module.exports = app