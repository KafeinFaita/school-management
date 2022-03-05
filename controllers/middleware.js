const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.auth_user = (goToNext) => {
    return (req, res, next) => {
        const token = req.cookies.jwt
        console.log(req.params)
        console.log(req.url)
        jwt.verify(token, 'schooldb secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                return res.json({ verified: false, msg: "Please log in." })
            } 
            
            if (goToNext) {
                return next()
            }
            res.json({ verified: true })
        })
    }
}

module.exports.auth_user_role = (role) => {
    return (req, res) => {
        const token = req.cookies.jwt
        jwt.verify(token, 'schooldb secret', async (err, decodedToken) => {
            
            if (err) {
                res.json({ verified: false, msg: "Unknown error." })
            } else {
                let user = await User.findById(decodedToken.id)

                // const userHasAccess = role.some(r => user.roles.includes(r)) <-- for multiple roles
                
                if (role.includes(user.role)) {
                    res.json({ verified: true, authorized: true })
                } else {
                    res.json({ verified: true, authorized: false, msg: "You don't have enough privilege to view this page."  })
                }
                
            }
        })
         
    }
}