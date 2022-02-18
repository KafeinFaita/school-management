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

module.exports.user_get = async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        res.send()
    } catch (error) {
        res.send(error)
    }
}

module.exports.dashboard_get = async (req, res) => {
    const token = req.cookies.jwt
    // console.log(token)
    // res.json({ msg: "hi" })
    jwt.verify(token, 'schooldb secret', (err, decodedToken) => {
        if (err) {
            console.log(err.message)
            res.json({ verified: false })
        } else {
            res.json({ verified: true })
        }
    })
}


module.exports.signup_post = async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({ username: req.body.username, password: hashedPassword })
    console.log(newUser)

    try {
<<<<<<< HEAD
        const saveUser = await newUser.save();
=======
        const saveUser = await newUser.save()
        res.json({ redirect:'/login' })
>>>>>>> 0883b99bb5d76bc0f623acbf5d0d2c149077a3c7
    } catch (error) {
        res.send(error)
    }
}

module.exports.login_post = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    
    if (user){
        const auth = await bcrypt.compare(req.body.password, user.password)
        console.log(auth)
        
        if (auth) {
            const token = createToken(user._id)
            
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
            console.log(token)
            // res.status(200).json({ redirect: '/dashboard' })
        } else {
            console.log("Incorrect password!")
        }
    } else {
        console.log("User doesn't exist!")
    }
}