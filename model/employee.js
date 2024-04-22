// Interacting with MOngoDB and creating model schema

const mongoose  = require('mongoose')

// Creating schema
const employeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    department: {
        type: String
    },
    salary: {
        type: Number
    }
})


const Employee = mongoose.model('employee', employeeSchema)

// exporting model for use in CRUD ops
module.exports =  Employee