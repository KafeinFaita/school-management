const express = require('express')
const route = express.Router()
const mainController = require('../controllers/mainController')

route.get('/student', mainController.student_GET)
route.post('/student', mainController.student_POST);

module.exports = route