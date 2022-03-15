const User = require('../models/User')

module.exports.dashboard_get = async (req, res) => {
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