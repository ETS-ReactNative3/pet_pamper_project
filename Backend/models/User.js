const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
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

    gender: {
        type: String,
        required: true
    },

    status: {
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
    }

    
}, { timestamps: true })

module.exports = addUser = mongoose.model("User", addUserSchema)