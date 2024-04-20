const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./model/employee')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}))

mongoose.connect('mongodb+srv://sugira:Sugiravincent12@cluster0.y9stlob.mongodb.net/Employee_Management')
.then(res => {
    const PORT = 3000

    app.listen(PORT, () => console.log(`app connected on port ${PORT} `))
})
.catch(err => console.log(err))


// create an employee

app.post('/post', async(req, res) => {
    try {
        const {name, department, salary} = req.body
        const employee = await new Employee({name, department, salary})

        await employee.save()
        res.status(200).json({message: "Employee created successfully", employee})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('/', async(req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
app.get('/:id', async(req, res) =>{
    try {
        const {id} = req.params
        const employee = await Employee.findById(id)
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).json(error)
        consol.log(error)
    }
})
app.put('/edit/:id', async(req,res) => {
    try {
        const {name, department, salary} = req.body
        const { id } = req.params
        const employee = await Employee.findById(id)

        if(!employee) {
        res.status(400).json({message: 'no employee with such id'})
        } else {
            employee.name = name || employee.name;
            employee.department = department || employee.department;
            employee.salary = salary || employee.salary

            await employee.save()
            res.status(200).json({message: "Edited employee successfully", employee})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.delete('/delete/:id', async(req, res) =>{
    try {
        const { id } = req.params
        await Employee.findByIdAndDelete(id)

        res.status(200).json({message: "employee deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})