import Employee from './Employee';
const employees = [];

function AddEmployee(){
    const id = prompt('Please enter employee\'s ID: ');
    const name = prompt('Please enter employee\'s name: ');
    const department = prompt('Please enter employee\'s department: ');
    const salary = prompt('Please enter employee\'s salary: ');

    // Employee object for the Employee class
    const addEmployee = new Employee(id, name, department, salary);
    // Adding new employee at the end of the employee list
    employees.push(addEmployee);
}

for(let index=0; index <= employees.length; index++){
    console.log(employees[index]);
}