const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        minlength: [6, 'Minimum username length is 6 characters']
    }, 
    password: {
        type: String,
        required: true,
        minlength: [8, 'Minimum password length is 8 characters']
    },
    role: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('user', userSchema)