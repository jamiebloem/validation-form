const usernameInput = document.getElementById('input-username');
const passwordInput = document.getElementById('input-password')

const usernameWarning = document.getElementById('username-warning')
const passwordWarning = document.getElementById('password-warning')

usernameInput.addEventListener('keyup', checkUsername);
passwordInput.addEventListener('keyup', checkPassword);

function checkUsername(e) {
    if(e.target.value.includes('@')) {
        usernameWarning.textContent = "Gebruikersnaam mag geen @ bevatten"
    } else {
        usernameWarning.textContent = "";
    }
}

function checkPassword(e) {
    if(e.target.value === '' || e.target.value.length > 6) {
        passwordWarning.textContent = '';
    } else {
        passwordWarning.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens"
    }
}