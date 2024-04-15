class Employee{
    // private properties of the class
    id= 0;
    name = "";
    department= "";
    salary= 0;

    constructor(id,name,department, salary){
        // initialization
        this.id= id;
        this.name= name;
        this.department= department;
        this.salary = salary;
    }

// getter methods for the private objects initialization
    getID(){
        return this.id;
    };

    getName(){
        return this.nameame;
    };
    getDepartment(){
        return this.department;
    };

    getSalary(){
        return this.salary;
    };
};

// Manager class inheritance
class Manager extends Employee{
    bonus = 0;

    // Overriding the getSalary method
    getSalary(){
        this.salary= this.salary + this.bonus;

    }

}
