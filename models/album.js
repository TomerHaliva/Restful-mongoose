const mongoose = require('mongoose')
const validator = require('validator')

var PhotoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    photographer: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String
    }
})

var AlbumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        default: 0
    },
    type: {
        type: String,
        enum: ["nature", "people"]
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    photos: [PhotoSchema]
})

const Album = mongoose.model('Album', AlbumSchema);
const Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Album , Photo;

