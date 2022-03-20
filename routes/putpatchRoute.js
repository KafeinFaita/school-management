const express = require('express')
const router = express.Router()

const { user_patch } = require('../controllers/mainController')

 router.patch('/users/:id', user_patch)

 module.exports = router