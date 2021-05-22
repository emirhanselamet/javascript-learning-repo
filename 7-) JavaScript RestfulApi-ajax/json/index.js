document.querySelector('#getEmployee').addEventListener('click', loadEmployee);

function loadEmployee() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.json', true);

    var load = document.querySelector('#loading');
    load.style.display = 'block';

    setTimeout(() => {
        xhr.onload = function () {

            load.style.display="none";
            if (this.status === 200) {
    
                load.style.display ="none";
    
                let employees = JSON.parse(this.responseText);
    
                let html = "";
    
                employees.forEach(employee => {
                    html += `
                <tr>
                    <td>${employee.firsName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                </tr>  `;
                });
    
    
    
                document.querySelector('#employees').innerHTML = html;
                
            }
            
        }
        xhr.send();
    }, 1500);
    
    
  
   
    


}