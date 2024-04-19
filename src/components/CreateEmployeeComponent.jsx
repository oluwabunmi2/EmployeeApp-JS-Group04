import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


function CreateEmployeeComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [jobLevel, setJobLevel] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const changeFirstNameHandler = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastNameHandler = (e) => {
        setLastName(e.target.value);
    }
    const changeDepartmentHandler = (e) => {
        setDepartment(e.target.value);
    }
    const changeJobLevelHandler = (e) => {
        setJobLevel(e.target.value);
    }
    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: firstName,
            lastName: lastName,
            department: department,
            jobLevel: jobLevel,
            email: email
        }
        console.log("employee :" + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res => {
            navigate('/employees');
        })
    }

    const cancelEmployee = () => {
        navigate('/employees');
    }

    return (
        <div>
            <div className='container mt-2'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center mb-0'>Add Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label>First name</label>
                                    <input placeholder='First Name' name='firstName' className='form-control'
                                        value={firstName} onChange={(e) => changeFirstNameHandler(e)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Last name</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control'
                                        value={lastName} onChange={(e) => changeLastNameHandler(e)}></input>
                                </div> <div className='form-group mb-2'>
                                    <label>Department</label>
                                    <input placeholder='Department' name='department' className='form-control'
                                        value={department} onChange={(e) => changeDepartmentHandler(e)}></input>
                                </div> <div className='form-group mb-2'>
                                    <label>Job level</label>
                                    <input placeholder='Job Level' name='jobLevel' className='form-control'
                                        value={jobLevel} onChange={(e) => changeJobLevelHandler(e)}></input>
                                </div> <div className='form-group mb-2'>
                                    <label>Email</label>
                                    <input placeholder='Email' name='email' className='form-control'
                                        value={email} onChange={(e) => changeEmailHandler(e)}></input>
                                </div>
                                <button className='btn btn-success' onClick={(e) => { saveEmployee(e) }}> Save</button>
                                <button className='btn btn-danger' onClick={cancelEmployee} style={{ marginLeft: '10px' }}>Cancel</button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeComponent
