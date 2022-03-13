const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addCommunitySchema = new Schema({
    name: {
        type: String,
        required: true
    },

    latitude: {
        type: String,
    },

    longitude: {
        type: String,
    },

    members: [mongoose.Types.ObjectId],

    image: {
        type: String,
    },

    
}, { timestamps: true })

module.exports = addCommunity = mongoose.model("Community", addCommunitySchema)