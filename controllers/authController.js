// const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports.user_get = async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        res.send()
    } catch (error) {
        res.send(error)
    }
}