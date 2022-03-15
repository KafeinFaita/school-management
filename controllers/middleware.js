const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.auth_user = (goToNext) => {
    return (req, res, next) => {
        const token = req.cookies.jwt
        jwt.verify(token, 'schooldb secret', (err, decodedToken) => {
            if (err) {
                console.log('not logged in')
                return res.status(401).json({ msg: "Please log in." })
                // return res.json({ verified: false, msg: "Please log in." })
            } 
            
            if (goToNext) {
                return next()
            }
            res.json({ verified: true })
        })
    }
}


module.exports.auth_user_role = (role) => {
    return (req, res, next) => {
        const token = req.cookies.jwt
        jwt.verify(token, 'schooldb secret', async (err, decodedToken) => {
            
            if (err) {
                res.json({ msg: "Unknown error." })
            } else {
                let user = await User.findById(decodedToken.id)

                // const userHasAccess = role.some(r => user.roles.includes(r)) <-- for multiple roles
                
                if (role.includes(user.role)) {

                    if (user.isVerified) {
                        // console.log(req.url)
                        // if (req.url === "/dashboard") {
                        //     const userList = await User.find({role: { $nin: ['Admin'] }}, { password: 0 })
                        //     res.json({ verified: true, authorized: true, userList })
                        //     return next()
                        // }

                        // res.json({ verified: true, authorized: true })
                        // res.status(200).json({ msg: 'ok' })
                        // res.send()
                        return next()
                    }

                    res.json({ msg: "You are not yet verified by the admin." })

                } else {
                    res.status(403).json({ msg: "You don't have enough privilege to view this page."  })
                }
                
            }
        })
         
    }
}