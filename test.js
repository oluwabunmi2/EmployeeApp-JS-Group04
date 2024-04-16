class Employee{
    id = 0;
    name = '';
    department = '';
    salary = 0;

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getDep(){
        return this.department;
    }

    getSalary(){
        return this.salary;
    }

    // constructor function

    constructor(id, name, department, salary){
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;

    }

    calculatePaycheck(){
        return this.salary;
    }

}

class Manager extends Employee{
    #bonus;
    getBonus(){
        this.bonus;
    }
    getSalary(){
        return this.salary + this.bonus;
    }

    calculatePaycheck(){
        Manager.getSalary();
    }
}

const employees =[];

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