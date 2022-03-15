const express = require('express')
const router = express.Router()

const { user_get, logout_get } = require('../controllers/authController')
const { auth_user, auth_user_role } = require('../controllers/middleware');
const { dashboard_get, enrollment_get, profile_get } = require('../controllers/mainController')
const { student_get } = require('../controllers/studentController')

router.get('/user', user_get)
router.get('/auth_user', auth_user(false))
router.get('/dashboard', auth_user(true), auth_user_role(['Admin', 'Teacher']), dashboard_get)
router.get('/profile', auth_user(true), auth_user_role(['Admin', 'Teacher', 'Student']), profile_get)
router.get('/enrollment', auth_user(true), auth_user_role(['Admin']), enrollment_get )
router.get('/logout', logout_get)
router.get('/students', auth_user(true), auth_user_role(['Admin']), student_get)

module.exports = router




