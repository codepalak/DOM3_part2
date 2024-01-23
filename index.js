// fill in javascript code here
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tbody = document.querySelector('tbody');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
    
      const name = document.getElementById('name').value;
      const docID = document.getElementById('docID').value;
      const specialization = document.getElementById('dept').value;
      const experience = document.getElementById('exp').value;
      const email = document.getElementById('email').value;
      const mobileNumber = document.getElementById('mbl').value;
  
      
      let role = '';
      if (experience > 5) {
        role = 'Senior';
      } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
      } else {
        role = 'Trainee';
      }
  
    
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${docID}</td>
        <td>${specialization}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobileNumber}</td>
        <td>${role}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
  
      
      const deleteButton = newRow.querySelector('.delete-btn');
      deleteButton.addEventListener('click', function () {
        tbody.removeChild(newRow);
      });
  
      
      tbody.appendChild(newRow);
  
      
      form.reset();
    });
  });
  