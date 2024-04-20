const Form = document.getElementById('form')
const Name = document.getElementById('name')
const Department = document.getElementById('department')
const salary = document.getElementById('salary')

const id = window.location.href.split('=').pop()
fetch(`http://localhost:3000/${id}`, {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
    credentials: "include"
})
.then(res => res.json())
.then(data => {
 Name.value = data.name
 Department.value = data.department
 salary.value = data.salary
})
.catch(error => console.log(error))

Form.addEventListener('submit', async(e) => {
    e.preventDefault()
    try {
        const response = await fetch(`http://localhost:3000/edit/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: Name.value,
                department: Department.value,
                salary: salary.value
            }),
            credentials: "include"
        })

        const data = response.json()
        console.log(data)
        if(data) {
            window.location.href = "index.html"
        }
    } catch (error) {
        console.log(error)
    }
})


