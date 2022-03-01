const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Student = require('../models/Student')


module.exports.student_post = (req, res) => {
    const newStudent = new Student(req.body.admissionDetails)
    console.log(req.body.admissionDetails)
    newStudent.save()
    console.log('test')
}