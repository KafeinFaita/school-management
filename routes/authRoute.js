const express = require('express')
const router = express.Router()

const { user_get, dashboard_get, signup_post, login_post } = require('../controllers/authController')

router.get('/user', user_get)
router.get('/dashboard', dashboard_get)

router.post('/signup', signup_post)
router.post('/login', login_post)

module.exports = router




