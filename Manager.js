// Manager class inheritance
class Manager extends Employee{
    bonus = 0;

    get bonus() {
        return this.bonus;
      }

    // Overriding the getSalary method
    getSalary(){
        this.salary= this.salary + this.bonus;

    }

    calculatePaycheck(){
        Manager.getSalary();
    }

}
