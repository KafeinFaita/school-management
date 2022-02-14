const express = require('express')
const router = express.Router()

const { user_get } = require('../controllers/authController')

router.get('/user', user_get)

module.exports = router



