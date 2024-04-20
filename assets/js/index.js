const Display = document.querySelector('.display');

const displayEmployee = (employees) => {
    Display.innerHTML = '';
    employees.forEach(employee => {
        Display.innerHTML += `  
        <tr>
            <td>${employee._id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>
                <a href="./update.html?=${employee._id}"><i class="fas fa-edit"></i></a>
                <a href="#" class="delete_employee" data-employee-id="${employee._id}"><i class="fas fa-trash-alt"></i></a>
            </td>
        </tr>
        `;
    });

    // Add event listener for delete buttons
    const deleteButtons = Display.querySelectorAll('.delete_employee');
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const employeeId = deleteButton.getAttribute('data-employee-id');
            if (employeeId) {
                deleteEmployee(employeeId);
            }
        });
    });
};

fetch('http://localhost:3000/', {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
    credentials: "include"
})
.then(res => res.json())
.then(data => {
   displayEmployee(data);
})
.catch(error => console.log(error));

async function deleteEmployee(id) {
    try {
        const response =  await fetch(`http://localhost:3000/delete/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            credentials: "include"
        });
        if(response.ok) {
            fetch('http://localhost:3000/', {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                credentials: "include"
            })
            .then(res => res.json())
            .then(data => {
               displayEmployee(data);
            })
            .catch(error => console.log(error));
        } else {
            console.error('Error deleting employee:', response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}
