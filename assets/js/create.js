const Form = document.getElementById('form')

Form.addEventListener('submit', function(e) {
    e.preventDefault()
       const Name = document.querySelector('#name').value
       const Department = document.querySelector('#department').value
       const Salary = document.querySelector('#salary').value

       const employee ={
        name: Name,
        department: Department,
        salary: Salary
       }

    fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(employee),
        credentials: "include"
    })
    .then(res => res.json())
    .then(data => {
        if(data) {
            window.location.href = "index.html"
        }
    })
    .catch(error => console.log(error))
})