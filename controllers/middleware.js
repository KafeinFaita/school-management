const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.auth_user = async (req, res) => {
    const token = req.cookies.jwt
    jwt.verify(token, 'schooldb secret', (err, decodedToken) => {
        if (err) {
            console.log(err.message)
            res.json({ verified: false })
        } else {
            res.json({ verified: true })
        }
    })
}

module.exports.auth_user_role = (role) => {
    return (req, res) => {
        const token = req.cookies.jwt

        if (token) {
            jwt.verify(token, 'schooldb secret', async (err, decodedToken) => {
                
                if (err) {
                    res.json({ verified: false })
                } else {
                    let user = await User.findById(decodedToken.id)
                    console.log(user.role)

                    // const userHasAccess = role.some(r => user.roles.includes(r)) <-- for multiple roles
                    
                    if (role.includes(user.role)) {
                        res.json({ verified: true })
                    } else {
                        res.json({ verified: false })
                    }
                    
                }
            })
        } else {
            res.json({ verified: false })
        }
    }
}