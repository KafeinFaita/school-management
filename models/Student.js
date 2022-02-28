const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requiredString = {
    type: Number,
    required: true
}

const requiredNumber = {
    type: Number,
    required: true
}

const studentSchema = new Schema({
    lastname: requiredString,
    firstname: requiredString,
    middlename: requiredString,
    gender: requiredString,
    dob: requiredString,
    pob: requiredString,
    address: requiredString,
    nationality: requiredString,
    religion: requiredString,
    mobile: requiredNumber,
    email: requiredString,
    status: requiredString,
    grade: requiredString,
    lrn: requiredNumber,
    department: requiredString,
    strand: requiredString,
    session: {
        type: String
    },
    lastschool: requiredString
})

module.exports = mongoose.model('student', studentSchema)