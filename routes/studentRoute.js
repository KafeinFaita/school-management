const express = require('express')
const router = express.Router()

const { student_post, student_get } = require('../controllers/studentController')

router.get('/students/list', student_get)
router.post('/admission', student_post)

module.exports = router