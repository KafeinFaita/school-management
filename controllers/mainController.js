const { findByIdAndUpdate } = require('../models/User')
const User = require('../models/User')

module.exports.dashboard_get = async (req, res) => {
    res.status(200).json({})
}

module.exports.users_get = async (req, res) => {
    const userList = await User.find({role: { $nin: ['Admin'] }}, { password: 0 })
    res.status(200).json({ userList })
}

module.exports.enrollment_get = (req, res) => {
    res.status(200).send()
}

module.exports.profile_get = (req, res) => {
    res.status(200).send()
}

// module.exports.student_POST = (req, res) => {
//     console.log(req.body);
// }

module.exports.user_patch = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { isVerified: req.body.checkUser })
        res.status(200).send()
    } catch (error) {
        console.log(error)
    } 
}