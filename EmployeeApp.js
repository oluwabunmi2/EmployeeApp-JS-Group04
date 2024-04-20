// import Employee from './Employee.js';
// const employees = [];

// function AddEmployee(){
//     const id = prompt('Please enter employee\'s ID: ');
//     const name = prompt('Please enter employee\'s name: ');
//     const department = prompt('Please enter employee\'s department: ');
//     const salary = prompt('Please enter employee\'s salary: ');

//     // Employee object for the Employee class
//     const addEmployee = new Employee(id, name, department, salary);
//     // Adding new employee at the end of the employee list
//     employees.push(addEmployee);
// }

// AddEmployee()
// for(let index=0; index <= employees.length; index++){
//     console.log(employees[index]);
// }


const employees = []

const addEmployee = (ID, name, department, salary) => {
const employeObject = {
    ID,
    name,
    department,
    salary
}
employees.push(employeObject)
}

addEmployee(1,'sugira','CSE',2000)
addEmployee(2, 'marc', 'CSE', 4000)

function getEmployee(id) {
   return employees.filter(employee => employee.ID === id )
}

// if(input) {
//     console.log(getEmployee(input))
// }

// console.log(employees)


function updateEmployee(id, arr, name, department, salary) {
    const newArray = []
 for(let i = 0; i < arr.length; i++){
      if(id === arr[i].ID) {
        if(name) {
            arr[i].name = name
        } else {
            arr[i].name = arr[i].name
        }
        if(department) {
            arr[i].department = department
        } else {
            arr[i].department = arr[i].department
        }
        if(salary) {
            arr[i].salary = salary
        }else {
            arr[i].salary = arr[i].salary
        }
        
      }
      newArray.push(arr[i])
     
 }
 
 return newArray.filter(singleArr => singleArr.ID === id)
 
}
// console.log(updateEmployee(2,employees, 'Martial','',0))

function DeleteEmployee(id){
   return employees.filter(removeEmp => removeEmp.ID !== id)

}

const inut = document.querySelector('.sugira').value
// console.log(DeleteEmployee(inut)))
