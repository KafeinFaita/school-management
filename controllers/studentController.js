const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Student = require('../models/Student')


module.exports.student_get = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (error) {
        
    }
}

module.exports.student_get_one = async (req, res) => {
    
    try {
        const studentInfo = await Student.findById(req.params.id)
        console.log(req.params)
        res.status(200).json(studentInfo)
    } catch (error) {
        console.log(error)
        res.status(404).send()
    }
}

module.exports.student_post = (req, res) => {
    const newStudent = new Student(req.body.admissionDetails)
    newStudent.save()
    console.log('student recorded')
}