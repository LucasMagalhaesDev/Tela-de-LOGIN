document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const errorMessage = document.querySelector('.error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.querySelector('.inputs-type[type="email"]').value;
        const password = document.querySelector('.inputs-type[type="password"]').value;

        if (email.trim() === '' || password.trim() === '') {
            errorMessage.textContent = 'favor preencher os compos.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';

            // Aqui você pode adicionar o código para fazer o login
            // Por exemplo, você pode enviar os dados para um servidor ou realizar outras operações
            // Exemplo: fetch('URL_DO_SEU_BACKEND', { method: 'POST', body: { email, password } })
            alert('Login bem-sucedido!'); // Aviso temporário, substitua pelo seu código de login
        }
    });

    // Adicionando eventos de escuta para os campos de entrada
    const emailInput = document.querySelector('.inputs-type[type="email"]');
    const passwordInput = document.querySelector('.inputs-type[type="password"]');

    emailInput.addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });

    passwordInput.addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });
});
