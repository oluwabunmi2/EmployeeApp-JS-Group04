import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

function ListEmployeeComponent() {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    //Hook that execute the code within it at each time ListEmployeeComponent mount
    useEffect(() => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
        })
    }, ['']);

    //method to get add employee template
    const addEmployee = () => {
        navigate('/add-employee');
    }

    const editEmployee = (empId) => {
        navigate('/update-employee', { state: { id: empId } });
    }

    const deleteEmployee = (empId) => {
        EmployeeService.deleteEmployee(empId).then(res => {
            setEmployees(employees.filter(employee => employee.empId !== empId))
        })
    }

    return (
        <div>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
                <button style={{ marginBottom: "15px" }} className='btn btn-primary' onClick={addEmployee}> Add Employee</button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Department</th>
                            <th>Job level</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(
                            employee =>
                                <tr key={employee.empId}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.jobLevel}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button onClick={() => { editEmployee(employee.empId) }} className='btn btn-info'>Update</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => { deleteEmployee(employee.empId) }} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent