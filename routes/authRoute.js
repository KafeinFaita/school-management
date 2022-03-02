const express = require('express')
const router = express.Router()

const { user_get, signup_post, login_post } = require('../controllers/authController')
const { auth_user, auth_user_role } = require('../controllers/middleware');

router.get('/user', user_get)
router.get('/auth_user', auth_user(false))
router.get('/dashboard', auth_user(true), auth_user_role(['Admin', 'Teacher']))
router.get('/profile', auth_user(true), auth_user_role(['Admin', 'Teacher', 'Student']))
router.get('/enrollment', auth_user(true), auth_user_role(['Admin']))

router.post('/signup', signup_post)
router.post('/login', login_post)

module.exports = router




