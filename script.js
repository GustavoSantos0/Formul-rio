document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    function validar() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('nameError2').textContent = '';
        document.getElementById('nameError3').textContent = '';
        document.getElementById('nameError4').textContent = '';

        const nome = document.getElementById('name').value.trim();
        const last = document.getElementById('last').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;

        let valido = true;

        if (nome === '' || last === '' || email === '' || senha === '') {
            alert('All fields must be filled in')
            valido = false;
        } else {
            if (nome.length < 3) {
            document.getElementById('nameError').textContent = 'The name must contain at least 3 letters.';
            valido = false;
        }
            if (last.length < 5){
            document.getElementById('nameError2').textContent = 'The last name must contain at least 5 letters.';
            valido = false;
        }
        if (senha.length < 4 || !regexEspecial.test(senha)) {
            document.getElementById('nameError4').innerHTML = 'The password must contain at least 4 characters <br> and an special character';
            valido = false;
        }
        
            if(valido) {
            alert('Form sent successfully!')
            document.getElementById('formulario').reset();
        }
    }
        
    }
    validar();

    
});