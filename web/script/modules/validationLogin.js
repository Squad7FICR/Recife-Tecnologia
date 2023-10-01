export default function Init() {
    document.addEventListener('DOMContentLoaded', function () {
        var loginForm = document.querySelector('#loginForm');
        var loginInput = document.querySelector('input[name="login"]');
        var passwordInput = document.querySelector('input[name="password"]');
        var userError = document.querySelector('#userError');
        var passwordError = document.querySelector('#passwordError');
        function addTimeout(callback, delay) {
            setTimeout(callback, delay);
        }
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var email = loginInput.value.trim();
            var password = passwordInput.value.trim();

            var hasError = false;
            function isValidEmail(email) {
                
                var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            
                
                return emailRegex.test(email);
            }
            
            var email = loginInput.value.trim();
            if (!isValidEmail(email)) {
                userError.textContent = 'Insira o email de maneira correta';
                return;
            } else {
                userError.textContent = '';
                console.log ('passou por aqui, email regex');
            }
            if (!email) {
                userError.textContent = 'Preencha o campo de email!';
                hasError = true;
            } else {
                userError.textContent = '';
                console.log ('passou por aqui, email')
            }

            if (!password) {
                passwordError.textContent = 'Preencha o campo de senha!';
                hasError = true;
            } else {
                passwordError.textContent = '';
                console.log ('passou por aqui, senha')
            }

            if (hasError) {
                addTimeout(function() {
                    userError.textContent = '',
                    passwordError.textContent = '';
                }, 3000);
                return;
            }


            // Carrega os dados de usuários a partir do arquivo JSON usando fetch
            fetch('./users.json')
                .then(response => response.json())
                .then(data => {
                    // Validação de usuário
                    var validUser = data.users.find(user => user.email === email && user.password === password);
                    if (validUser) {
                        alert('Login bem-sucedido!');
                        window.location.href = './dashboard.html';
                    } else {
                        userError.textContent = 'Credenciais inválidas';
                        addTimeout(function() {
                            userError.textContent = '';
                        }, 3000);
                        
                    }
                })
                .catch(error => console.error(error));
        });
        setTimeout(function() {
            console.clear();
        }, 5000);
    });
}
