const Display = document.querySelector('.display')

fetch('http://localhost:3000/', {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
    credentials: "include"
})
.then(res => res.json())
.then(data => {
    data.forEach(employee => {
        Display.innerHTML += `
        <tr>
        <td>${employee._id}</td>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>
            <a href="./update.html?=${employee._id}"><i class="fas fa-edit"></i></a>
            <a href="#" ><i class="fas fa-trash-alt"></i></a>
        </td>
        </tr>
        `
    });
})