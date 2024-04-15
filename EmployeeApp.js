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


    get ID(){
        return this.id;
    };

    get name(){
        return this.Name;
    };
    get department(){
        return this.department;
    };

    get alary(){
        return this.salary;
    };
};
