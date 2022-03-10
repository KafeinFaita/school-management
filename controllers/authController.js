const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

//create token
const maxAge = 3 * 24 * 60 * 60
const createToken = id => {
    return jwt.sign({ id }, 'schooldb secret', {
        expiresIn: maxAge
    })
}

//GET

module.exports.user_get = async (req, res, next) => {
    try {
        const users = await User.find()
        console.log(users)
        res.send()
    } catch (error) {
        res.send(error)
    }
}

module.exports.dashboard_get = async (req, res) => {
    try {
        const users = await User.find({role: { $nin: ['Admin'] }})
        console.log(users)
    } catch (error) {
        console.log(error)
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.send()
}

module.exports.signup_post = async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({ username: req.body.username, password: hashedPassword, role: req.body.role })

    try {
        const saveUser = await newUser.save();
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports.login_post = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    console.log(req.body)
    if (user){
        const auth = await bcrypt.compare(req.body.password, user.password)
        console.log(auth)
        
        if (auth) {
            const token = createToken(user._id)
            
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
            console.log(token)
            res.status(200).json({ redirect: '/dashboard', username: user.username, role: user.role })
            
        } else {
            res.status(500).json({ passErr: "incorrect password!" })
        }
    } else {
        res.status(500).json({ userErr: 'user does not exist!' });
    }
}