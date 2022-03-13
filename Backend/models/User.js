const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addUserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone_number: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: String
    },

    image: {
        type: String
    },

    latitude: {
        type: String
    },

    longitude: {
        type: String
    },

    online: {
        type: Boolean,
        default: false
    },

    token: {
        type: String,
        default: ""
    },

    account_type: {
        type: String,
        required: true
    },

    communities: [mongoose.Types.ObjectId],
    
}, { timestamps: true })

module.exports = addUser = mongoose.model("User", addUserSchema)