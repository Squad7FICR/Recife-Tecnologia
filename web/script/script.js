document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.querySelector('form');
    var loginInput = document.querySelector('input[name="login"]');
    var passwordInput = document.querySelector('input[name="password"]');
    var loginError = document.querySelector('#userError');
    var passwordError = document.querySelector('#passwordError');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var email = loginInput.value.trim();
        var password = passwordInput.value.trim();

        if (!email) {
            loginError.textContent = 'Email requerido';
        } else {
            loginError.textContent = '';
        }

        if (!password) {
            passwordError.textContent = 'Senha requerida';
        } else {
            passwordError.textContent = '';
        }

        if (email && password) {
            // Carregar os dados do user.json
            fetch('')
                .then(response => response.json())
                .then(data => {
                    var validUser = data.users.find(user => user.email === email && user.password === password);
                    if (validUser) {
                        alert('Login bem-sucedido!');
                        window.location.href = './dashboard.html';
                    } else {
                        loginError.textContent = 'Credenciais inválidas';
                    }
                })
                .catch(error => console.error(error));
        }
    });
});