document.getElementById('myBtn').addEventListener('click',function (e) {
    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
   
        try {
            if (name.value.length === 0) {
                throw new Error('name is required');
            }
            if (name.value.length >20) {
                throw new Error('name is too long');
            }
        } catch (err) {
            errors.innerHTML = err;
        }

        e.preventDefault();
    }
)