const mongoose = require('mongoose')
const validator = require('validator')

var UserSechma = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
}, 
{ timestamps: true }
);

const User = mongoose.model('User', UserSechma);

module.exports = User
