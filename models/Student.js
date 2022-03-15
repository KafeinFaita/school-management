const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requiredString = {
    type: String,
    required: true
}

const requiredNumber = {
    type: Number,
    required: true
}

const reqDefault = (sr) => {
    return {
        accomplished: {
            type: Boolean,
            default: false
        },
        stronglyRequired: {
            type: Boolean,
            default: sr
        }
    }
}

const requirements = {
    reservationFee: reqDefault(false),
    interview: reqDefault(true),
    registrarConfirmation: reqDefault(true),
    exam: reqDefault(true),
    orNum: reqDefault(false),
    reportCard: reqDefault(true),
    picture: reqDefault(false),
    visa9e: reqDefault(true),
    escqvr: reqDefault(true),
    additionalPic: reqDefault(false),
    recForm: reqDefault(true),
    gcc: reqDefault(true),
    psa: reqDefault(true)
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
    lastschool: requiredString,
    requirements
})

module.exports = mongoose.model('student', studentSchema)