window.onload = function () {
    loadNavbar();
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `
    <h2>${getLocalizedValue('registration')}</h2>
    <h3 id="error" style="color: red;"></h3>
    <h3 id="success" style="color: green;"></h3>
    <div id="registrationForm">
        <label for="username" class="sr-only">${getLocalizedValue('username')}</label>
        <input type="text" class="form-control" id="username" name="username" placeholder="${getLocalizedValue('username')}" required autofocus>
        <label for="password" class="sr-only">${getLocalizedValue('password')}</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="${getLocalizedValue('password')}" required>
        <label for="passwordConfirmation" class="sr-only">${getLocalizedValue('passwordConfirmation')}</label>
        <input type="password" class="form-control" id="passwordConfirmation" name="passwordConfirmation" placeholder="${getLocalizedValue('passwordConfirmation')}" required>
        <label for="name" class="sr-only">${getLocalizedValue('firstName')}</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="${getLocalizedValue('firstName')}" required>
        <label for="surname" class="sr-only">${getLocalizedValue('secondName')}</label>
        <input type="text" class="form-control" id="surname" name="surname" placeholder="${getLocalizedValue('secondName')}">
        <label for="email" class="sr-only">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
        <button type="button" class="btn btn-danger btn-block" onclick="registerUser()">${getLocalizedValue('register')}</button>
        <br>
        <h6>${getLocalizedValue('alreadyRegistered')}</h6>
        <a href="/login.html">
            <button class="btn btn-danger btn-block" type="button">${getLocalizedValue('login')}</button>
        </a>
        <br>
    </div>`;
}

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('passwordConfirmation').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;

    let errors = validate(username, password, passwordConfirmation, name, email);
    if (errors !== '') {
        document.getElementById('error').innerText = errors;
        return;
    }
    document.getElementById('error').innerText = '';
    document.getElementById('success').innerText = getLocalizedValue('handlingRequest');
    document.getElementById('registrationForm').hidden = true;
    fetch('api/user/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password, name, surname, email, language})
    }).then(response => {
        response.text().then(body => {
            if (response.ok) {
                document.getElementById('success').innerText = getLocalizedValue('registeredSuccessfully');
            } else {
                document.getElementById('success').innerText = '';
                document.getElementById('error').innerText = getLocalizedValueByCode('ERROR_WHILE_HANDLING').replace('{operationName}', getLocalizedValue('registering')) + getLocalizedValueByCode(body);
                document.getElementById('registrationForm').hidden = false;
            }
        })
    })
}

function validate(username, password, passwordConfirmation, name, email) {
    let errors = '';
    if (!/^[a-zA-Z0-9]+$/.test(username) || username.length < 4) {
        errors += getLocalizedValueByCode('INVALID_LOGIN');
    }
    if (password.length < 4) {
        errors += getLocalizedValueByCode('INVALID_PASSWORD');
    }
    if (password !== passwordConfirmation) {
        errors += getLocalizedValueByCode('PASSWORDS_ARE_DIFFERENT');
    }
    if (!name) {
        errors += getLocalizedValueByCode('NAME_IS_REQUIRED');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors += getLocalizedValueByCode('INVALID_EMAIL');
    }
    return errors;
}
