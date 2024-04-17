# EmployeeApp-JS-GroupXX
This repository contains the code for managing employee data using JavaScript.

# The main objectives of this exercise are:
1. Practice Object-Oriented Programming principles in JavaScript.
2. Implement encapsulation, inheritance, and polymorphism.
3. Develop a functional EmployeeApp to manage employee data in a group setting.
# Target Audience
 This exercise is designed for you to work in pairs to practice OOP and collaboration skills.
 
# Setting Up the Repository (Group Activity)
  *Create a new GitHub repository named EmployeeApp-JS-GroupXX (replace XX with your group number)*.
*Initialize the repository with a README.md file explaining the exercise objectives, steps, functionalities, and your group members' names*.
*Create a JavaScript file named EmployeeApp.js to house your group's code*.
 
 # Designing the Employee Class (Group Activity):
Encapsulation: 
*Define a class named Employee with the following private properties*:
id (number, unique identifier for each employee)
name (string, employee's full name)
department (string, employee's department)
salary (number, employee's monthly salary)
Create public getter methods for each private property to retrieve their values without direct access.

# Part 2: Inheritance (Group Activity):
Discuss with your partner how you want to implement inheritance with a Manager subclass.
Create a subclass named Manager that inherits from the Employee class.
Add a new private property bonus (number, monthly bonus amount) to the Manager class.
Override the getSalary method in the Manager class to calculate and return the total salary with the bonus included.

# Polymorphism (Group Activity):
Discuss with your partner the strategies for implementing polymorphism through a calculatePaycheck method.
Implement a method named calculatePaycheck in both the Employee and Manager classes.
In the Employee class, simply return the salary.
In the Manager class, call the getSalary method (which includes the bonus) to return.

# Group members
 Sugira Vincent
 Oluwabunmi Adebanjo

# Important links: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_initialization_blocks
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
