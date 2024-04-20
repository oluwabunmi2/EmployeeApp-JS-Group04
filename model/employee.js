const mongoose  = require('mongoose')


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

module.exports =  Employee