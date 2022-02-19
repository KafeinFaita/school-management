const express = require('express')
const router = express.Router()

const { user_get, auth_user, signup_post, login_post } = require('../controllers/authController')

router.get('/user', user_get)
router.get('/dashboard', auth_user)

router.post('/signup', signup_post)
router.post('/login', login_post)

module.exports = router




