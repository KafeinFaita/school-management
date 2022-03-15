const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Student = require('../models/Student')


module.exports.student_get = async (req, res) => {
    try {
        const students = await Student.find()
        console.log(students)
        res.status(200).json(students)
    } catch (error) {
        
    }
}

module.exports.student_post = (req, res) => {
    const newStudent = new Student(req.body.admissionDetails)
    newStudent.save()
    console.log('student recorded')
}