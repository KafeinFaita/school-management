const express = require('express')
const router = express.Router()

const { student_post } = require('../controllers/studentController')


router.post('/admission', student_post)

module.exports = router