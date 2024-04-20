class Employee {
    id = 0;
    name = '';
    department = '';
    salary = 0

    getId() {
        console.log('id:',this.id)
    }
    getName() {
        console.log(this.name)
    }
    getDepartment() {
        console.log(this.department)
    }
    getSalary() {
        console.log(this.salary)
    }
    calculatePaycheck() {
        console.log(this.salary)
    }
    constructor(id, name, department, salary){
    this.id = id 
    this.name = name
    this.department = department
    this.salary = salary
    }
}
const Sugira = new Employee(1, 'sugira', 'CSE', 2000)
// Sugira.getId()
// Sugira.getName()
// Sugira.getDepartment()
// Sugira.getSalary()

class Manager extends Employee {
    bonus = 0
    getSalary() {
        console.log(this.bonus + this.salary)
    }
    calculatePaycheck() {
        this.getSalary()
    }
    constructor(id, name, department, salary, bonus) {
        super(id,name, department, salary)
        this.bonus = bonus
    }
}
const SugiManager = new Manager(2, 'sugira', 'CSE', 2000, 1000)
SugiManager.calculatePaycheck()



