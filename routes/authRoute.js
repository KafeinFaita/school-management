const express = require('express')
const router = express.Router()

const { user_get, user_post, user_login } = require('../controllers/authController')

router.get('/user', user_get)
router.post('/student', user_post)
router.post('/login', user_login)

module.exports = router



