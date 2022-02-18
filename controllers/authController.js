const bcrypt = require('bcrypt')

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

module.exports.user_post = async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({ username: req.body.username, password: hashedPassword })
    console.log(newUser)

    try {
        const saveUser = await newUser.save()
        res.json({ redirect:'/login' })
    } catch (error) {
        res.send(error)
    }
}

module.exports.user_login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    
    if (user){
        const auth = await bcrypt.compare(req.body.password, user.password)
        
        if (auth) {
            console.log("Logged in!")
        } else {
            console.log("Incorrect password!")
        }
    } else {
        console.log("User doesn't exist!")
    }
}