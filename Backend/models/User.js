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
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    status: {
        type: String
    },

    
}, { timestamps: true })

module.exports = addUser = mongoose.model("User", addUserSchema)